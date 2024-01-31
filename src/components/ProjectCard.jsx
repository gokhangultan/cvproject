import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function projectCard(props) {
    const {projects} = props;
    
    return (
        <div className="w-[300px] mb-20">
            <img src={projects.projectImg} className="rounded w-[300px] h-[280px] object-cover"/>
            <h3 className="pt-5 text-[#CFCBFF] text-3xl">{projects.projectTitle}</h3>
            <p className="text-sm my-5 text-white">{projects.projectDescription}</p>
            <div className="flex gap-2 pb-5">
            <button className="text-[#8F88FF] bg-[#383838] border-1 w-[70px] h-[30px] rounded">react</button>
            <button className="text-[#8F88FF] bg-[#383838] border-1 w-[70px] h-[30px] rounded">redux</button>
            <button className="text-[#8F88FF] bg-[#383838] border-1 w-[70px] h-[30px] rounded">axios</button>
            </div>
            <div className="flex justify-between">
            <Link to={"/+`{projects.gitLink}`"}><button className="flex-1 underline text-[#E1E1FF] text-base"> Github</button></Link>
            <Link to={"/+`{projects.webLink}`"}><button className="flex underline text-[#E1E1FF] text-base">View Site</button></Link>
            </div>

        </div>
    )
}