import { create } from "zustand";

const useStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  events: [],
  setEvents: (events) => set({ events }),
  currentEvent: null,
  setCurrentEvent: (event) => set({ currentEvent: event }),
}));

export default useStore;
