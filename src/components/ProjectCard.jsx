import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function projectCard(props) {
    const {data} = props;
    
    return (
        <div className=" mb-20 ">
            <img src={data.projectImg} className="rounded w-[450px] h-[270px] object-cover"/>
            <h3 className="pt-5 dark:text-[#CFCBFF] text-[#4338CA] text-3xl font-medium">{data.projectTitle}</h3>
            <p className="text-sm my-5 dark:text-white text-[#6B7280]">{data.projectDescription}</p>
            <div className=" pb-5 flex-none gap-2">
            <button className="font-medium dark:text-[#8F88FF] dark:bg-[#383838] bg-white text-[#3730A3] border-[#3730A3] border-2 w-[70px] h-[30px] rounded ">react</button>
            <button className="font-medium dark:text-[#8F88FF] dark:bg-[#383838] bg-white text-[#3730A3] border-[#3730A3] border-2 w-[70px] h-[30px] rounded">redux</button>
            <button className="font-medium dark:text-[#8F88FF] dark:bg-[#383838] bg-white text-[#3730A3] border-[#3730A3] border-2 w-[70px] h-[30px] rounded">axios</button>
            </div>
            <div className="flex justify-between">
            <Link to={"/"}><button className="font-medium flex-1 underline dark:text-[#E1E1FF] text-[#3730A3] text-base"> Github</button></Link>
            <Link to={"/"}><button className="font-medium flex underline dark:text-[#E1E1FF] text-[#3730A3] text-base">View Site</button></Link>
            </div>

        </div>
    )
}