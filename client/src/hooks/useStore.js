import { create } from "zustand";

const useStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
}));

export default useStore;
