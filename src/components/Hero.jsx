import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Hero() {
    return (
        <div className="pt-3 xl:pt-10 lg:pt-8 md:pt-6 hero-image flex justify-between  xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
            <div className="left-hero flex ">
                 <div className=" flex-col ">
                   <h3 className="dark:text-[#BAB2E7] text-[#4338CA] text-xl font-medium">Gökhan GÜLTAN</h3>
            <hr/>
                     <h1 className="xl:text-[72px] lg:text-[50px]  sm:text-[40px] text-[40px] dark:text-[#AEBCCF] text-[#1F2937] font-bold mt-3 xl:mt-10 lg:mt-5 ">Creative thinker <br/>Minimalism Lover</h1>
                     <p className="text-[18px] text-[#6B7280] dark:text-white mt-3 xl:mt-10 lg:mt-8 md:mt-5 ">Hi, I'm Gokhan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="flex justify-start gap-2 xl:mt-10 mt-3 lg:mt-8 md:mt-5">
                 <button className="dark:text-[#3730A3] text-white bg-[#3730A3] dark:bg-[#E1E1FF] border-[#3730A3] border-2 xl:py-[12px] xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium">Hire me</button>
                 <button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3]  border-2 xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium"><FontAwesomeIcon icon={faGithub} /> Github</button>
                 <button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3] border-2 xl:px-[32px] lg:py-[8px] lg:px-[24px] py-[6px] px-[18px] rounded font-medium"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button>
            </div>
        </div>
        </div>
        <div className='flex-2 right-hero'>
        <div className=' mt-3 xl:mt-10 lg:mt-5'><img src="hero2.png"  className=" rounded-2xl w-[476px] h-[375px]  "/></div>
        </div>

        
        </div>
    )
}