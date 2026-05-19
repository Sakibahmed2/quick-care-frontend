import { baseApi } from "../ApiBase";

export type TScheduleStatus = "available" | "unavailable";

export type TSchedule = {
  date: string;
  start_time: string;
  end_time: string;
  status: TScheduleStatus;
};

export type TScheduleCreateInput = {
  date: string | Date;
  start_time: string | Date;
  end_time: string | Date;
  status?: TScheduleStatus;
};

const toIsoString = (value: string | Date) => {
  if (value instanceof Date) {
    return value.toISOString();
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toISOString();
};

const normalizeSchedulePayload = (
  payload: TScheduleCreateInput,
): TSchedule => ({
  date: toIsoString(payload.date),
  start_time: toIsoString(payload.start_time),
  end_time: toIsoString(payload.end_time),
  status: payload.status ?? "available",
});

const createSchedule = async (payload: TScheduleCreateInput) => {
  const normalizedPayload = normalizeSchedulePayload(payload);
  const res = await baseApi.post<TSchedule>("/schedules", normalizedPayload);

  return res.data;
};

const getDoctorSchedules = async () => {
  const data = await baseApi.get("/doctors/profile/me");

  const formattedSchedules = (data.data.data.schedules as TSchedule[]).map(
    (schedule) => ({
      ...schedule,
      date: new Date(schedule.date).toLocaleDateString(),
      start_time: new Date(schedule.start_time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      end_time: new Date(schedule.end_time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }),
  );

  return formattedSchedules;
};

export const scheduleApi = {
  createSchedule,
  getDoctorSchedules,
};
