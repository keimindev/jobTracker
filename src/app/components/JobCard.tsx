import Link from "next/link";


type CompanyProps = {
  company: {
    id: number;
    name: string;
    location: string;
    industry: string;
    position: string;
    appliedDate: string;
    status: string;
    note: string;
    link: string;
  };
};


const JobCard = ({company} : CompanyProps) => {
  return (
    <Link href={`/${company.id}`}><div
      key={company.id}
      className="border-1 border-gray-200 p-2 rounded-lg m-1 cursor-pointer hover:bg-gray-100 transition-all duration-200"
    >
      <div className="flex flex-row items-center justify-between">
        <span className="font-bold">{company.name}</span>
        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
          {company.status ? company.status : "applied"}
        </span>
      </div>
      <p>{company.position}</p>
      <div className="flex flex-row items-center justify-between">
        <p>{company.appliedDate}</p>
      </div>
    </div>
    </Link>
  );
};

export default JobCard;
