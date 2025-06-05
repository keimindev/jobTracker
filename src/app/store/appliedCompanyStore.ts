import { create } from "zustand";

export interface AppliedCompany {
  id: number;
  name: string;
  location: string;
  industry: string;
  position: string;
  appliedDate: string;
  status: string;
  note: string;
  link: string;
}

interface AppliedCompanyStore {
  appliedCompanies: AppliedCompany[];
  addAppliedCompany: (company: AppliedCompany) => void;
}

export const useAppliedCompanyStore = create<AppliedCompanyStore>((set) => ({
  appliedCompanies: [],
  addAppliedCompany: (company) =>
    set((state) => ({
      appliedCompanies: [...state.appliedCompanies, company],
    })),
}));
