import { useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";

export default function Skills() {
    const lang = useSelector((store) => store.lang);
    const apiUrl = 'https://65be832adcfcce42a6f29918.mockapi.io/api/v1/cvData';
    const { data: cvDataArray, loading, error } = useAxios(apiUrl);
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }
    // BECAUSE DUMMY MOCKAPI REQUIRES DATA FORMAT AS JSON MUST BE AN ARRAY.... SPENT 4hours cuz of that
    const cvData = cvDataArray[0];
    const skillsData = lang === 'EN' ? cvData.en.skills : cvData.tr.skills;

    return (
        <div className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px] ">       
        <h1 className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 pb-3 xl:text-5xl lg:text-4xl text-3xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold">Skills</h1>
        <div className=" xl:flex justify-between">
            <hr/>
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex-col">
                       <h2 className=" xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 font-medium ">{skill.skillTitle}</h2>
        <p className=" text-xs pt-1 xl:pt-5 lg:pt-4 md:pt-2 text-[#6B7280] dark:text-white">{skill.skillDescription}</p>
                    </div>
                ))}
            
            <hr/>
        </div></div>
    );
}