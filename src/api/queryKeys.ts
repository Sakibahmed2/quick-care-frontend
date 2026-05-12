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
  },
};
