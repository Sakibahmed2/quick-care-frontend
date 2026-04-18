import { create } from "zustand";

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

const authStore = create<TState & TActions>((set) => ({
  ...initialState,
  setAuthToken: (token) => set(() => ({ token })),
  removeAuthToken: () => set(() => ({ token: undefined })),
}));

export default authStore;
