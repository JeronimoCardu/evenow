import { create } from "zustand";

const useStore = create((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
  events: [],
  setEvents: (events) => set({ events }),
  currentEvent: null,
  setCurrentEvent: (event) => set({ currentEvent: event }),
  searchTerm: {
    search: "",
    category: "",
    month: "",
    sortPrice: "up-down",
  },
  setSearchTerm: (searchTerm) => set({ searchTerm }), 
}));

export default useStore;
