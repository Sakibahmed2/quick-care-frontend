import { create } from "zustand";

type TState = {
  token?: string;
  isAuthInitialized: boolean;
};

type TActions = {
  setAuthToken: (token: string) => void;
  removeAuthToken: () => void;
  setAuthInitialized: (isInitialized: boolean) => void;
};

const initialState: TState = {
  token: undefined,
  isAuthInitialized: false,
};

const authStore = create<TState & TActions>((set) => ({
  ...initialState,
  setAuthToken: (token) => set(() => ({ token })),
  removeAuthToken: () => set(() => ({ token: undefined })),
  setAuthInitialized: (isAuthInitialized) => set(() => ({ isAuthInitialized })),
}));

export default authStore;
