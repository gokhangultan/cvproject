import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHandPointRight } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
    return (
        <div className="bg-[#141414] mb-10">
            <div>
                <h1 className="mb-20">Let’s work together on <br/>your next product.</h1>
            <div className="flex justify-between">
                <div className='flex-1'>
                     <p className='underline'><FontAwesomeIcon icon={faHandPointRight} /> gultangokhan@gmail.com</p>
                     </div>
                <div className='flex gap-3'>
                    <button>Personal Blog</button>
                <button>Github</button>
                <button>Linkedin</button>
                </div>
                </div>
            </div>
        </div>
    )
}