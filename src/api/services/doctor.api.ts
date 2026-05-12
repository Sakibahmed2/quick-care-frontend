import { baseApi } from "../ApiBase";

export type TDoctor = {
  id: string;
  name: string;
  specialty?: string;
  image?: string;
  fees?: number;
  isAvailable?: boolean;
};

export type TDoctorQueryParams = {
  searchTerm?: string;
  specialty?: string;
  page?: number;
  limit?: number;
};

type TDoctorsApiResponse = {
  data?: TDoctor[];
  doctors?: TDoctor[];
};

const extractDoctors = (
  payload: TDoctor[] | TDoctorsApiResponse,
): TDoctor[] => {
  if (Array.isArray(payload)) {
    return payload;
  }

  return payload.data ?? payload.doctors ?? [];
};

const getDoctors = async (params?: TDoctorQueryParams): Promise<TDoctor[]> => {
  const res = await baseApi.get<TDoctor[] | TDoctorsApiResponse>("/doctors", {
    params,
  });

  return extractDoctors(res.data);
};

type TCreateDoctorPayload = {
  name: string;
  img: string;
  age: string;
  gender: "Male" | " Female";
  location: string;

  email: string;
  password: string;

  specialty: string;
  experience: string;
  qualification: string;
  fees: string;
  designation: string;
};

const createDoctor = async (
  payload: TCreateDoctorPayload,
): Promise<TDoctor> => {
  const res = await baseApi.post<TDoctor>("/doctors", payload);
  return res.data;
};

export const doctorApi = {
  getDoctors,
  createDoctor,
};
