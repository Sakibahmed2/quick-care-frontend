import { baseApi } from "../ApiBase";

export type TDoctor = {
  age: number;
  experience: number;
  fees: number;
  gender: "Male" | "Female";
  id: string;
  isDeleted: boolean;
  isPending: boolean;
  location: string;
  phone: string;
  qualification: string;
  specialty: string;
  user: {
    email: string;
    id: string;
    img: string;
    name: string;
    isActive: boolean;
  };
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type TDoctorQueryParams = {
  searchTerm?: string;
  specialty?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type TDoctorsMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type TDoctorsResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: { doctors: TDoctor[]; meta: TDoctorsMeta };
};

export type TCreateDoctorPayload = {
  name: string;
  img: string;
  age: number;
  gender: "Male" | "Female";
  location: string;
  email: string;
  password: string;
  specialty: string;
  experience: number;
  qualification: string;
  fees: number;
  phone: string;
};

export type TDoctorListResult = { doctors: TDoctor[]; meta: TDoctorsMeta };

const getDoctors = async (
  params?: TDoctorQueryParams,
  signal?: AbortSignal,
): Promise<TDoctorListResult> => {
  const res = await baseApi.get<TDoctorsResponse>("/doctors", {
    params,
    signal,
  });

  return {
    doctors: res.data.data.doctors,
    meta: res.data.data.meta,
  };
};

const createDoctor = async (
  payload: TCreateDoctorPayload,
): Promise<TDoctor> => {
  const res = await baseApi.post<TDoctor>("/doctors", payload);

  return res.data;
};

const getDoctorInfo = async (doctorId: string, signal?: AbortSignal) => {
  const res = await baseApi.get<TDoctor>(`/doctors/info/${doctorId}`, {
    signal,
  });

  return res.data;
};

const updateDoctor = async (
  doctorId: string,
  payload: Partial<TCreateDoctorPayload>,
) => {
  const res = await baseApi.patch<TDoctor>(`/doctors/${doctorId}`, payload);

  return res.data;
};

export const doctorApi = {
  getDoctors,
  createDoctor,
  getDoctorInfo,
  updateDoctor,
};
