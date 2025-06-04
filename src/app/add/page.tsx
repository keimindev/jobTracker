import React from "react";
import Header from "../components/Header";

const Add = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold mb-4">Add Applied Company</h1>
          <form className="w-full max-w-md">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="companyName"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                placeholder="Enter company name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="position"
              >
                Position
              </label>
              <input
                type="text"
                id="position"
                placeholder="Enter position"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateApplied"
              >
                Date Applied
              </label>
              <input
                type="date"
                id="dateApplied"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="status"
              >
                Status
              </label>
              <input
                type="text"
                id="status"
                placeholder="Enter status (e.g., applied, interview, offer)"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="link"
              >
                Link
              </label>
              <input
                type="text"
                id="link"
                placeholder="Enter Job description link"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="note"
              >
                Note (Optional)
              </label>
              <textarea
                id="note"
                placeholder="Enter any additional notes"
                className="h-[100px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize: none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Add Company
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Add;
