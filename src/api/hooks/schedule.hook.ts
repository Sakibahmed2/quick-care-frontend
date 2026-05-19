import { queryKeys } from "@/api/queryKeys";
import { queryClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { scheduleApi } from "../services/schedule.api";

export const useGetDoctorSchedules = () => {
  return useQuery({
    queryKey: queryKeys.schedule.list("me"),
    queryFn: scheduleApi.getDoctorSchedules,
  });
};

export const useCreateSchedule = () => {
  return useMutation({
    mutationKey: queryKeys.schedule.create(),
    mutationFn: scheduleApi.createSchedule,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: queryKeys.schedule.all });
    },
  });
};
