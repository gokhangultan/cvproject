import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useAxios from "../hooks/useAxios";


export default function projectCard({data}) {
    const apiUrl = 'https://65be832adcfcce42a6f29918.mockapi.io/api/v1/cvData';
  const { data: cvDataArray, loading, error } = useAxios(apiUrl);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  // BECAUSE DUMMY MOCKAPI REQUIRE DATA FORMAT AS JSON MUST BE AN ARRAY.... SPENT 4hours cuz of that
  const cvData = cvDataArray[0];
    
  return (
    <div className="mb-20">
      <img src={data.projectImg} className="rounded w-[450px] h-[270px] object-cover" alt={data.projectTitle} />
      <h3 className="pt-5 dark:text-[#CFCBFF] text-[#4338CA] text-3xl font-medium">{data.projectTitle}</h3>
      <p className="text-sm my-5 dark:text-white text-[#6B7280]">{data.projectDescription}</p>
      <div className="pb-5 flex-none gap-2">
        {data.tags.map((tag, index) => (
          <button key={index} className="font-medium dark:text-[#8F88FF] dark:bg-[#383838] bg-white text-[#3730A3] border-[#3730A3] border-2 w-[70px] h-[30px] rounded">
            {tag}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <Link to={data.gitLink} target="_blank" rel="noopener noreferrer">
          <button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] text-base"> Github</button>
        </Link>
        <Link to={data.webLink} target="_blank" rel="noopener noreferrer">
          <button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] text-base">View Site</button>
        </Link>
      </div>
    </div>
  );
}