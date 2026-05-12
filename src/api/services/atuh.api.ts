import { baseApi } from "../ApiBase";

type TRegisterPayload = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type TLoginPayload = {
  email: string;
  password: string;
};

type TApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
};

type TLoginResponseData = {
  accessToken: string;
};

export type TProfileUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  img?: string | null;
  role: "admin" | "doctor" | "user";
  isActive: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

const registerUser = async (payload: TRegisterPayload) => {
  const res = await baseApi.post<TApiResponse<null>>("/users", payload);
  return res.data;
};

const loginUser = async (
  payload: TLoginPayload,
): Promise<TApiResponse<TLoginResponseData>> => {
  const res = await baseApi.post<TApiResponse<TLoginResponseData>>(
    "/auth",
    payload,
  );
  return res.data;
};

const logoutUser = async (): Promise<TApiResponse<null>> => {
  const res = await baseApi.post<TApiResponse<null>>("/auth/logout");
  return res.data;
};

const profile = async (): Promise<TProfileUser> => {
  const res = await baseApi.get<TApiResponse<TProfileUser>>("/users/me");
  return res.data.data;
};

export const authApi = {
  loginUser,
  logoutUser,
  profile,
  registerUser,
};
