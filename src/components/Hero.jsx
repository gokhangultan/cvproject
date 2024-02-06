import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import useAxios from '../hooks/useAxios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function Hero() {

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
    const heroData = lang === 'EN' ? cvData.en.hero : cvData.tr.hero;

    return (
        <div className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 hero-image flex justify-between  xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
            <div className="left-hero xl:flex-1 lg:flex-1 md:flex-1 sm:flex-auto  flex mr-10 xl:basis-3/5 basis-1">
                 <div className=" flex-col ">
                   <h3 className="dark:text-[#BAB2E7] text-[#4338CA] text-xl font-medium">{heroData.heroName}</h3>
            <hr/>
                     <h1 className="xl:text-[72px] lg:text-[50px]  sm:text-[40px] text-[40px] dark:text-[#AEBCCF] text-[#1F2937] font-bold mt-3 xl:mt-10 lg:mt-5 ">{heroData.heroTitle}</h1>
                     <p className="text-[18px] text-[#6B7280] dark:text-white mt-3 xl:mt-10 lg:mt-8 md:mt-5 ">{heroData.heroDescription}</p>
            <div className="flex justify-start gap-2 xl:mt-10 mt-3 lg:mt-8 md:mt-5">
            <a href={`${heroData.gitLink}`}><button className="dark:text-[#3730A3] text-white bg-[#3730A3] dark:bg-[#E1E1FF] border-[#3730A3] border-2 xl:py-[12px] xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium">Hire me</button></a>
                 <a href={`${heroData.gitLink}`} target='_blank'><button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3]  border-2 xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium"><FontAwesomeIcon icon={faGithub} /> Github</button></a>
                 <a href={`${heroData.webLink}`} target='_blank'><button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3] border-2 xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button></a>
            </div>
        </div>
        </div>
        <div className='flex justify-end right-hero  basis-2/5'>
        <div className=' mt-3 xl:mt-10 lg:mt-5'><img src="hero2.png"  className=" rounded-2xl w-[476px] h-[375px]  "/></div>
        </div>

        
        </div>
    )
}