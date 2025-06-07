"use client";

import { useParams } from "next/navigation";
import Header from "../components/Header";
import InputForm from "../components/inputForm";


const AppliedCompanyEdit = () => {
  const { id } = useParams();
  const companyId = id as string;
  console.log("Editing company with ID:", companyId);
  
  return (
    <div>
      <Header />
      <section>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Edit Applied Company</h1>
          <InputForm initialStatus="On Hold"/>
        </div>
      </section>
    </div>
  );
};

export default AppliedCompanyEdit;
