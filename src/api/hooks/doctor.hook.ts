import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "@/api/queryKeys";
import { doctorApi, TDoctorQueryParams } from "../services/doctor.api";
import { queryClient } from "@/lib/queryClient";

export const useGetDoctors = (params?: TDoctorQueryParams) => {
  return useQuery({
    queryKey: queryKeys.doctors.list(params),
    queryFn: () => doctorApi.getDoctors(params),
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
