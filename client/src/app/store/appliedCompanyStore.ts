import { dummyData } from "../../utils/dummydata";
import { create } from "zustand";

export interface AppliedCompany {
  id: number;
  name: string;
  position: string;
  appliedDate: string;
  status: string;
  note: string;
  link: string;
}

interface AppliedCompanyStore {
  appliedCompanies: AppliedCompany[];
  addAppliedCompany: (company: AppliedCompany) => void;
  order: string;
  orderBy: (order: string) => void;
  view: string;
  setView: (order: string) => void;
}

export const useAppliedCompanyStore = create<AppliedCompanyStore>((set) => ({
  appliedCompanies: [...dummyData.appliedCompany],
  addAppliedCompany: (company) =>
    set((state) => ({
      appliedCompanies: [...state.appliedCompanies, company],
    })),
  orderBy: (order) =>
    set((state) => ({
      order : order,
      appliedCompanies: [...state.appliedCompanies].sort((a, b) => {
        const dateA = new Date(a.appliedDate).getTime();
        const dateB = new Date(b.appliedDate).getTime();

        if (order === "ascending") {
          return dateA - dateB;
        }
        if (order === "descending") {
          return dateB - dateA;
        }
        return 0;
      }),
    })),
  order: "descending",
  view: "list", // default view
  setView: (view) =>
    set(() => ({
      view: view,
    })),
}));
