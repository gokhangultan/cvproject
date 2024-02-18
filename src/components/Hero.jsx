import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux';
export default function Hero() {

    const lang = useSelector((store) => store.lang);
    const data = useSelector((store) => store.data);

    const heroData = lang === 'EN' ? data.en.hero : data.tr.hero;
    const constData = lang === 'EN' ? data.en.const : data.tr.const;

    return (
        <div className=" flex flex-col lg:flex-row xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px] gap-3">
            <div className="left-hero basis-3/5 ">
                <div className=" flex-col ">
                    <h3 className="dark:text-[#BAB2E7] text-[#4338CA] text-xl font-medium">{heroData.heroName}</h3>
                    <hr />
                    <h1 className="xl:text-[72px] lg:text-[50px] md:text-[40px] sm:text-[32px] text-[28px] dark:text-[#AEBCCF] text-[#1F2937] font-bold mt-3 xl:mt-10 lg:mt-5 ">{heroData.heroTitle}</h1>
                    <h1 className="xl:text-[72px] lg:text-[50px] md:text-[40px] sm:text-[32px] text-[28px] dark:text-[#AEBCCF] text-[#1F2937] font-bold  ">{heroData.heroTitle2}</h1>
                    <p className="text-[18px] text-[#6B7280] dark:text-white mt-3 xl:mt-10 lg:mt-8 md:mt-5 ">{heroData.heroDescription}</p>
                    <div className="flex justify-center gap-2 xl:mt-10 mt-3 lg:mt-8 md:mt-5">
                        <a href={`${heroData.gitLink}`}><button className="dark:text-[#3730A3] text-white bg-[#3730A3] dark:bg-[#E1E1FF] border-[#3730A3] border-2 xl:py-[8px] xl:px-[40px] lg:py-[8px] lg:px-[32px] md:py-[6px] md:px-[30px] py-[6px] px-[20px] rounded font-medium">{constData.constHireMe}</button></a>
                        <a href={`${heroData.gitLink}`} target='_blank'><button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3]  border-2 xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium"><FontAwesomeIcon icon={faGithub} /> {constData.constGithub}</button></a>
                        <a href={`${heroData.webLink}`} target='_blank'><button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3] border-2 xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium"><FontAwesomeIcon icon={faLinkedin} /> {constData.constLinkedin}</button></a>
                    </div>
                </div>
            </div>
            <div className='right-hero  basis-2/5 items-center align-middle flex'>
                <div className=' mt-3 '><img src="hero2.png" className=" rounded-2xl w-[476px] h-[375px] " alt='heroprofilfoto' /></div>
            </div>


        </div>
    )
}