import { useState } from "react"
import {projects} from "../data"
import ProjectCard from "./ProjectCard";
export default function Projects() {
    const [productList, setProductList] = useState(projects);
    return (
        <div>
            <h1 className="pb-10 text-[#AEBCCF]">Projects</h1>
        <div className="flex justify-between pb-5">

            {productList.map((item,index) => {
                return (<ProjectCard key={index} projects={item} />)
            })}
        </div>
        </div>
    )
}