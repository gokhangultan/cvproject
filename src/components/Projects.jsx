import { useState } from "react"
import {data} from "../data"
import ProjectCard from "./ProjectCard";
export default function Projects() {
    const [productList, setProductList] = useState(data.en.projects);
    return (
        <div className="pl-[125px] pr-[175px]">
            <h1 className="pb-10 dark:text-[#AEBCCF] text-black text-5xl font-semibold">Projects</h1>
        <div className="flex justify-between pb-5 gap-5">

            {productList.map((item,index) => {
                return (<ProjectCard key={index} data={item} />)
            })}
        </div>
        </div>
    )
}