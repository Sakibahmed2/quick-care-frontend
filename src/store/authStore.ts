import { create } from "zustand";
import { persist } from "zustand/middleware";

type TState = {
  token?: string;
  role?: string;
  email?: string;
  userId?: string;
};

type TActions = {
  setAuthToken: (token: string) => void;
  removeAuthToken: () => void;
};

const initialState: TState = {
  token: undefined,
  role: undefined,
  email: undefined,
  userId: undefined,
};

const authStore = create<
  TState & TActions,
  [["zustand/persist", TState & TActions]]
>(
  persist<TState & TActions>(
    (set) => ({
      ...initialState,
      setAuthToken: (token) => set(() => ({ token })),
      removeAuthToken: () => set(() => ({ token: undefined })),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default authStore;
