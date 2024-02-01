import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHandPointRight } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (
        <div className="bg-[#F9F9F9] dark:bg-[#141414] py-10 pl-[125px] pr-[175px]">
            <div>
                <h1 className="mb-20 dark:text-#[AEBCCF] text-[#1F2937] font-semibold text-[42px]">Let’s work together on <br/>your next product.</h1>
            <div className="flex justify-between">
                <div className='flex-1'>
                     <p className='font-medium underline text-[#AF0C48] dark:text-[#BAB2E7]'><FontAwesomeIcon icon={faHandPointRight} /> gultangokhan@gmail.com</p>
                     </div>
                <div className='flex gap-1'>
                    <button className='font-medium dark:text-[#E1E1FF] text-[#0A0A14] text-lg'>Personal Blog</button>
                <button className='font-medium dark:text-[#17D18B] text-[#00AB6B] text-lg'>Github</button>
                <button className='font-medium dark:text-[#0BA6F6] text-[#0077B5] text-lg'>Linkedin</button>
                </div>
                </div>
            </div>
        </div>
    )
}