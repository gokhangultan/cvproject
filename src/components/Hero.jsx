import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Hero() {
    return (
        <div className="pt-10 hero-image flex justify-between  pl-[125px] pr-[175px]">
            <div className="left-hero flex-1 ">
                 <div className=" flex-col ">
                   <h3 className="dark:text-[#BAB2E7] text-[#4338CA] text-xl font-medium">Gökhan GÜLTAN</h3>
            <hr/>
                     <h1 className="text-[72px] dark:text-[#AEBCCF] text-[#1F2937] font-bold mt-10">Creative thinker <br/>Minimalism Lover</h1>
                     <p className="text-[18px] text-[#6B7280] dark:text-white mt-10 ">Hi, I'm Gokhan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="flex gap-5 mt-10">
                 <button className="dark:text-[#3730A3] text-white bg-[#3730A3] dark:bg-[#E1E1FF] border-[#3730A3] border-2 py-[12px] px-[32px] rounded font-medium">Hire me</button>
                 <button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3]  border-2 py-[12px] px-[32px] rounded font-medium"><FontAwesomeIcon icon={faGithub} /> Github</button>
                 <button className="dark:text-[#E1E1FF] text-[#3730A3] dark:bg-[#383838] bg-white border-[#3730A3] border-2 py-[12px] px-[32px] rounded font-medium"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button>
            </div>
        </div>
        </div>
        <div className='flex right-hero'>
        <div className=' mt-10'><img src="hero2.png"  className=" rounded-2xl w-[476px] h-[375px]  "/></div>
        </div>

        
        </div>
    )
}