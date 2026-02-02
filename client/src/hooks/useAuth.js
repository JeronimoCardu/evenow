import { create } from "zustand";

const useAuth = create((set) => ({
  userData: null,
  setUserData: (userData) => set({ userData }),
  clearUserData: () => set({ userData: null }),
}));

export default useAuth;
