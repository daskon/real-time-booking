import { create } from "zustand";

interface AuthState {
  user: any | null;
  token: string | null;
  setAuth: (user: any, token: string) => void;
  logout: () => void;
}
const tokenFromStorage = localStorage.getItem("token");

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: tokenFromStorage,
  setAuth: (user, token) => {
    localStorage.setItem("token", token);
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  }
}));