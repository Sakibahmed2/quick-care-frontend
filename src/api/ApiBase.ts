import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import authStore from "@/store/authStore";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api/v1";

type TAuthApiResponse = {
  data?: {
    accessToken?: string;
  };
};

type TRetryableRequestConfig = InternalAxiosRequestConfig & {
  _retry?: boolean;
  skipAuthRefresh?: boolean;
};

let refreshTokenPromise: Promise<string> | null = null;

const refreshAccessToken = async (): Promise<string> => {
  const res = await axios.post<TAuthApiResponse>(
    `${API_BASE_URL}/auth/refresh-token`,
    {},
    {
      withCredentials: true,
      timeout: 15_000,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  const nextAccessToken = res.data?.data?.accessToken;

  if (!nextAccessToken) {
    throw new Error("Failed to refresh access token");
  }

  authStore.getState().setAuthToken(nextAccessToken);

  return nextAccessToken;
};

const getRefreshedAccessToken = async (): Promise<string> => {
  if (!refreshTokenPromise) {
    refreshTokenPromise = refreshAccessToken().finally(() => {
      refreshTokenPromise = null;
    });
  }

  return refreshTokenPromise;
};

export const baseApi = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

baseApi.interceptors.request.use((config: TRetryableRequestConfig) => {
  const token = authStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

baseApi.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ message?: string }>) => {
    const originalRequest = error.config as TRetryableRequestConfig | undefined;
    const isUnauthorized = error.response?.status === 401;
    const isRefreshRequest = originalRequest?.url?.includes(
      "/auth/refresh-token",
    );
    const isLoginRequest =
      originalRequest?.url === "/auth" ||
      originalRequest?.url?.includes("/auth/login");
    const isLogoutRequest = originalRequest?.url?.includes("/auth/logout");

    if (
      isUnauthorized &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.skipAuthRefresh &&
      !isRefreshRequest &&
      !isLoginRequest &&
      !isLogoutRequest
    ) {
      originalRequest._retry = true;

      try {
        const nextAccessToken = await getRefreshedAccessToken();
        originalRequest.headers.Authorization = `Bearer ${nextAccessToken}`;
        return baseApi(originalRequest);
      } catch {
        authStore.getState().removeAuthToken();
      }
    }

    return Promise.reject(error);
  },
);

export const initializeAuthSession = async () => {
  try {
    await getRefreshedAccessToken();
  } catch {
    authStore.getState().removeAuthToken();
  }
};
