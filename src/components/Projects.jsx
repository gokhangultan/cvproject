import { useState } from "react"
import {data} from "../data"
import ProjectCard from "./ProjectCard";
export default function Projects() {
    const [productList, setProductList] = useState(data.en.projects);
    return (
        <div>
            <h1 className="pb-10 text-[#AEBCCF]">Projects</h1>
        <div className="flex justify-between pb-5 ">

            {productList.map((item,index) => {
                return (<ProjectCard key={index} data={item} />)
            })}
        </div>
        </div>
    )
}