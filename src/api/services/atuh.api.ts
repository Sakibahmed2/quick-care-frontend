import { baseApi } from "../ApiBase";

type TLoginPayload = {
  email: string;
  password: string;
};

const loginUser = async (payload: TLoginPayload) => {
  const res = await baseApi.post("/auth", payload);
  return res.data;
};

const logoutUser = async () => {
  const res = await baseApi.post("/auth/logout");
  return res.data;
};

export const authApi = {
  loginUser,
  logoutUser,
};
