import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import useAxios from "../hooks/useAxios";
import { useSelector } from "react-redux";

export default function Projects() {

    const lang = useSelector((store) => store.lang);
    const data = useSelector((store) => store.data);
    const productList = lang === 'EN' ? data.en.projects : data.tr.projects;
    const projectsTitle = lang === 'EN' ? data.en.header : data.tr.header;

    return (
        <div className="px-[20px] md:px-[190px]">
            <h1 className=" dark:text-[#AEBCCF] text-black xl:text-5xl lg:text-4xl text-3xl font-semibold">{projectsTitle.headerProjects}</h1>
            <div className="flex flex-wrap flex-col lg:flex-row xl:pb-5 lg:pb-3 md:pb-2 pb-1 xl:gap-5 lg-gap-4 md:gap-2 gap-1">

                {productList.map((item, index) => {
                    return (<ProjectCard key={index} data={item} />)
                })}
            </div>
        </div>
    )
}