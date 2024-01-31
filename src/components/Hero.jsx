import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
export default function Hero() {
    return (
        <div className="pt-10 hero-image flex justify-between gap-5">
            <div className="left-hero flex-1 ">
                 <div className=" flex-col ">
                   <h3 className="text-[#BAB2E7] text-xl">Gökhan GÜLTAN</h3>
            <hr/>
                     <h1 className="text-[72px] text-[#AEBCCF] font-medium mt-10">Creative thinker <br/>Minimalism Lover</h1>
                     <p className="text-[18px] text-white mt-10">Hi, I'm Gokhan. Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="flex gap-5 mt-10">
                 <button className="text-[#3730A3] bg-white border-[#3730A3] py-[12px] px-[32px] rounded">Hire me</button>
                 <button className="text-[#E1E1FF] bg-[#383838] border-[#3730A3] py-[12px] px-[32px] rounded"><FontAwesomeIcon icon={faGithub} /> Github</button>
                 <button className="text-[#E1E1FF] bg-[#383838] border-[#3730A3] py-[12px] px-[32px] rounded"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</button>
            </div>
        </div>
        </div>
        <div className='flex right-hero'>
        <div className=' mt-10'><img src="hero2.png"  className=" rounded-2xl w-[476px] h-[375px] ml-16 "/></div>
        </div>

        
        </div>
    )
}