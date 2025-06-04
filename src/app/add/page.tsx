import React from "react";
import Header from "../components/Header";
import InputForm from "../components/inputForm";

const Add = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Add Applied Company</h1>
          <InputForm />
        </div>
      </section>
    </div>
  );
};

export default Add;
