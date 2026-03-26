"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createDoctor,
  getDoctors,
  TDoctor,
  TDoctorQueryParams,
} from "../services/doctor.api";
import { queryKeys } from "../queryKeys";

export const useDoctorsQuery = (params?: TDoctorQueryParams) => {
  return useQuery({
    queryKey: queryKeys.doctors.list(params),
    queryFn: () => getDoctors(params),
  });
};

export const useCreateDoctorMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDoctor,
    onSuccess: (newDoctor: TDoctor) => {
      queryClient.setQueryData<TDoctor[]>(
        queryKeys.doctors.list(),
        (prev = []) => [newDoctor, ...prev],
      );

      queryClient.invalidateQueries({
        queryKey: queryKeys.doctors.all,
      });
    },
  });
};
