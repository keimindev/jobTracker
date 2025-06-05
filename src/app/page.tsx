"use client";

import Header from "./components/Header";
import JobCard from "./components/JobCard";
import { Filter } from "./components/Filter";
import { useAppliedCompanyStore } from "./store/appliedCompanyStore";

export default function Home() {
  const { appliedCompanies, view } = useAppliedCompanyStore();

  return (
    <div className="p-2">
      <Header />
      <main>
        <section>
          <Filter />
        </section>
        <section
          className={`p-4 ${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
              : "flex flex-col gap-2"
          }`}
        >
          {appliedCompanies.map((company) => {
            return <JobCard key={company.id} company={company} />;
          })}
        </section>
      </main>
    </div>
  );
}
