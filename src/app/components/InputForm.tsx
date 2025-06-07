import Dropdown from "./Dropdown";


type InputFormProps = {
  initialStatus: string;
};


const InputForm = ({ initialStatus }: InputFormProps) => {
  return (
    <>
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
          <Dropdown status = {initialStatus}/>
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
      </form>
    </>
  );
};

export default InputForm;
