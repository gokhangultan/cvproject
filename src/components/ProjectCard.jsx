import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useAxios from "../hooks/useAxios";

export default function projectCard({ data }) {
  const apiUrl = "https://65be832adcfcce42a6f29918.mockapi.io/api/v1/cvData";
  const { data: cvDataArray, loading, error } = useAxios(apiUrl);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!cvDataArray) {
    return null;
  }
  // BECAUSE DUMMY MOCKAPI REQUIRE DATA FORMAT AS JSON MUST BE AN ARRAY.... SPENT 4hours cuz of that
  const cvData = cvDataArray[0];

  return (
    <div className=" mb-5 w-[400px] h-auto">
      <img
        src={data.projectImg}
        className="rounded  w-[250px] h-[250px] object-contain p-2 align-middle justify-center items-center"
        alt={data.projectTitle}
      />
      <h3 className="dark:text-[#CFCBFF] text-[#4338CA] xl:text-3xl lg:text-2xl text-xl font-medium">
        {data.projectTitle}
      </h3>
      <p className="xl:text-sm text-xs my-5 dark:text-white text-[#6B7280]">
        {data.projectDescription}
      </p>
      <div className="xl:pb-5 lg:pb-3 md:pb-2 pb-1 flex flex-wrap flex-row gap-2">
        {data.tags.map((tag, index) => (
          <button
            key={index}
            className="xl:font-medium font-bold flex-1  dark:text-[#5d5df5] text-[#3730A3] xl:text-base text-xs border-2 border-[#3730A3]  bg-gray-100 rounded px-4 py-1"
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex justify-between">
        <a href={data.gitLink} target="_blank" rel="noopener noreferrer">
          <button className="xl:font-medium font-bold flex-1  dark:text-[#5d5df5] text-[#3730A3] xl:text-base text-xs border-2 border-[#3730A3]  bg-gray-300 rounded px-4 py-1">
            {" "}
            Github
          </button>
        </a>
        <a href={data.webLink} target="_blank" rel="noopener noreferrer">
          <button className="xl:font-medium font-bold flex-1  dark:text-[#5d5df5] text-[#3730A3] xl:text-base text-xs border-2 border-[#3730A3]  bg-gray-300 rounded px-4 py-1	">
            View Site
          </button>
        </a>
      </div>
    </div>
  );
}
