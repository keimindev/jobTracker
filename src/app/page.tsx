import { dummyData } from "@/utils/dummydata";

import Header from "./components/Header";
import JobCard from "./components/JobCard";
import { Filter } from "./components/Filter";

export default function Home() {
  return (
    <div className="p-2">
      <Header />
      <main>
        <section>
          <Filter />
        </section>
        <section className="p-4">
          {dummyData.appliedCompany.map((company) => {
            return (
                <JobCard key={company.id} company={company} />
            );
          })}
        </section>
      </main>
    </div>
  );
}
