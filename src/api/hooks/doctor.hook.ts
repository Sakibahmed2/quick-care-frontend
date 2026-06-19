import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import {
  doctorApi,
  TCreateDoctorPayload,
  TDoctorQueryParams,
} from "../services/doctor.api";
import { queryClient } from "@/lib/queryClient";

export const useGetDoctors = (params?: TDoctorQueryParams) => {
  return useQuery({
    queryKey: queryKeys.doctors.list(params),
    queryFn: ({ signal }) => doctorApi.getDoctors(params, signal),
    placeholderData: (previousData) => previousData,
  });
};

export const useCreateDoctor = () => {
  return useMutation({
    mutationKey: queryKeys.doctors.create(),
    mutationFn: doctorApi.createDoctor,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.doctors.all });
    },
  });
};

export const useGetDoctorInfo = (doctorId: string) => {
  return useQuery({
    queryKey: queryKeys.doctors.detail(doctorId),
    queryFn: ({ signal }) => doctorApi.getDoctorInfo(doctorId, signal),
  });
};

export const useUpdateDoctor = (
  doctorId: string,
  payload: Partial<TCreateDoctorPayload>,
) => {
  return useMutation({
    mutationKey: queryKeys.doctors.detail(doctorId),
    mutationFn: () => doctorApi.updateDoctor(doctorId, payload),
  });
};
