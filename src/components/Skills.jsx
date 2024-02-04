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
        <div className="pt-10 pl-[125px] pr-[175px] ">
            <hr/>
            <h1 className="pt-10 pb-3 text-5xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold">Skills</h1>
            <div className="flex justify-between gap-2">
                {skillsData.map((skill, index) => (
                    <div key={index} className="">
                       <h2 className="text-3xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 font-medium ">{skill.skillTitle}</h2>
        <p className="text-xs pt-5 text-[#6B7280] dark:text-white">{skill.skillDescription}</p>
                    </div>
                ))}
            </div>
            <hr/>
        </div>
    );
}