import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";

export default function Projects() {
  const lang = useSelector((store) => store.lang);
  const data = useSelector((store) => store.data);
  const productList = lang === "EN" ? data.en.projects : data.tr.projects;
  const projectsTitle = lang === "EN" ? data.en.header : data.tr.header;

  return (
    <div className="px-[20px] md:px-[190px]">
      <h1 className=" dark:text-[#AEBCCF] text-black xl:text-5xl lg:text-4xl text-3xl font-semibold">
        {projectsTitle.headerProjects}
      </h1>
      <div className="flex flex-col sm:flex-row gap-3 flex-wrap justify-between align-middle ">
        {productList.map((item, index) => {
          return <ProjectCard key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
