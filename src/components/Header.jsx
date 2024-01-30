import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faToggleOff } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="pt-[23px]">
            <div className="flex gap-[14px] float-end">
                 <button><span className='bg-yellow-600 rounded-md p-1'><FontAwesomeIcon icon={faMoon} /> <FontAwesomeIcon icon={faToggleOff} /></span> LIGHT MODE</button>
                 <p>|</p>
                  <span>TÜRKÇE'YE GEÇ</span>
            </div>
            <div className="pt-5">            
                <img src="logo.gg2.png" className=" w-[83.68px] h-[82px] " />
            </div>
            <div className=" pt-0 ">
            <div className="float-end"><nav className="flex justify-between gap-10 ">
                <button className="text-[#6B7280]">Skills</button>
                <button className="text-[#6B7280]">Projects</button>
                <button className="text-[#3730A3] bg-white border-[#3730A3] py-[12px] px-[32px] rounded">Hire me</button>
            </nav>
            </div>
            <div>
            </div>
         </div>
            
            
        </div>
    )
}