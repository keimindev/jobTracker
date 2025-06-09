"use client"

import React from "react";
import Header from "../components/Header";
import InputForm from "../components/inputForm";
import Button from "../components/Button";
import { addCompany } from "../api/add-company";

const Add = () => {
    
  const handleAddCompany = async () => {
    try {
      await addCompany({
        name: 'OpenAI',
        position: 'Frontend Developer',
        applied_date: new Date().toISOString().split('T')[0],
        status: 'Pending',
        note: '테스트용 데이터입니다',
        link: 'https://openai.com',
        user_id: 'user-123', 
      });
      alert('등록 성공!');
    } catch (err) {
      alert(`에러 발생: ${(err as Error).message}`);
    } finally {
    }
  };

  return (
    <div>
      <Header />
      <section>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Add Applied Company</h1>
          <InputForm initialStatus="All" />
          <Button onClick={handleAddCompany} buttonName="Add Company" size="medium" />
        </div>
      </section>
    </div>
  );
};

export default Add;
