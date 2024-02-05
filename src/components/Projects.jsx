import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";

export default function Projects() {
    
  const lang = useSelector((store) => store.lang);


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

  const productList = lang === 'EN' ? cvData.en.projects : cvData.tr.projects;


    return (
        <div className="xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
            <h1 className="pb-3 xl:pb-10 lg:pb-8 md:pb-6 dark:text-[#AEBCCF] text-black xl:text-5xl lg:text-4xl text-3xl font-semibold">Projects</h1>
        <div className="flex justify-between xl:pb-5 lg:pb-3 md:pb-2 pb-1 xl:gap-5 lg-gap-4 md:gap-2 gap-1">

            {productList.map((item,index) => {
                return (<ProjectCard key={index} data={item} />)
            })}
        </div>
        </div>
    )
}