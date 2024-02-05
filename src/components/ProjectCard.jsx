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
    <div className="xl:mb-20 lg:mb-16 md:mb-10 mb-5">
      <img src={data.projectImg} className="rounded xl:w-[450px] xl:h-[270px] w-[250px] h-[150px] object-cover" alt={data.projectTitle} />
      <h3 className="xl:pb-5 lg:pb-3 md:pb-2 pb-1 dark:text-[#CFCBFF] text-[#4338CA] xl:text-3xl lg:text-2xl text-xl font-medium">{data.projectTitle}</h3>
      <p className="xl:text-sm text-xs my-5 dark:text-white text-[#6B7280]">{data.projectDescription}</p>
      <div className="xl:pb-5 lg:pb-3 md:pb-2 pb-1 flex-none gap-2">
        {data.tags.map((tag, index) => (
          <button key={index} className="xl:font-medium font-light dark:text-[#8F88FF] dark:bg-[#383838] bg-white text-[#3730A3] border-[#3730A3] border-2 xl:w-[70px] xl:h-[30px] w-[50px] h-[25px] rounded">
            {tag}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <Link to={data.gitLink} target="_blank">
          <button className="xl:font-medium font-light flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base text-xs	"> Github</button>
        </Link>
        <Link to={data.webLink} target="_blank">
          <button className="xl:font-medium font-light flex underline dark:text-[#E1E1FF] text-[#3730A3] xl:text-base text-xs	">View Site</button>
        </Link>
      </div>
    </div>
  );
}