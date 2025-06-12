import { create } from "zustand";

export interface FilterStore {
  status: string;
  setStatus: (status: string) => void;
}

interface FilterStoreState {
  filterOptions: string[];
  status: string;
  setStatus: (status: string) => void;
}

export const useFilterStore = create<FilterStoreState>((set) => ({
  filterOptions: ["All", "Applied", "Interviewing", "Offer", "Rejected"],
  status: "All",
  setStatus: (status) => set(() => ({ status })),
}));
