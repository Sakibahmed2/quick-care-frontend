export const queryKeys = {
  doctors: {
    all: ["doctors"] as const,
    list: (filters?: Record<string, unknown>) =>
      [...queryKeys.doctors.all, "list", filters ?? {}] as const,
    detail: (doctorId: string) =>
      [...queryKeys.doctors.all, "detail", doctorId] as const,
  },
};
