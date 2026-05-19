export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    profile: ["auth", "profile"] as const,
  },
  doctors: {
    all: ["doctors"] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.doctors.all, "list", filters ?? {}] as const,
    detail: (doctorId: string) =>
      [...queryKeys.doctors.all, "detail", doctorId] as const,
    create: () => [...queryKeys.doctors.all, "create"] as const,
    update: (doctorId: string) =>
      [...queryKeys.doctors.all, "update", doctorId] as const,
    remove: (doctorId: string) =>
      [...queryKeys.doctors.all, "remove", doctorId] as const,
  },
  schedule: {
    all: ["schedule"] as const,
    list: (doctorId: string) =>
      [...queryKeys.schedule.all, "list", doctorId] as const,
    detail: (scheduleId: string) =>
      [...queryKeys.schedule.all, "detail", scheduleId] as const,
    create: () => [...queryKeys.schedule.all, "create"] as const,
    update: (scheduleId: string) =>
      [...queryKeys.schedule.all, "update", scheduleId] as const,
    remove: (scheduleId: string) =>
      [...queryKeys.schedule.all, "remove", scheduleId] as const,
  },
};
