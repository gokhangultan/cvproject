import { useSelector } from "react-redux";

export default function Skills() {
    const lang = useSelector((store) => store.lang);
    const data = useSelector((store) => store.data);
    const skillsData = lang === 'EN' ? data.en.skills : data.tr.skills;
    const skillsTitle =  lang === 'EN' ? data.en.header : data.tr.header;

    return (
        <div className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px] ">       
        <h1 className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 pb-3 xl:text-5xl lg:text-4xl text-3xl dark:text-[#AEBCCF] text-[#1F2937] font-semibold">{skillsTitle.headerSkills}</h1>
        <div className=" xl:flex justify-between ">
            <hr/>
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex-col ">
                       <h2 className=" xl:text-3xl lg:text-2xl text-xl dark:text-[#B7AAFF] text-[#4338CA] pt-2 font-medium ">{skill.skillTitle}</h2>
        <p className=" text-xs text-[#6B7280] dark:text-white pt-3 xl:pt-10 lg:pt-8 md:pt-6 pb-3 mr-5">{skill.skillDescription}</p>
                    </div>
                ))}
            
            <hr/>
        </div></div>
    );
}