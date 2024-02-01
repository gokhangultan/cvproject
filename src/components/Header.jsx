import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faToggleOff } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

export default function Header() {
    
    const lang = useSelector((store) => store.lang);
    const darkMode = useSelector((store) => store.darkMode);


    const dispatch = useDispatch();
    const setTheme = () => {
        dispatch({
            type: "CHANGE_LANG",
            payload: "test",
        });
    }

    const toggleDarkMode = () => {
        dispatch({
            type: "DARK_MODE",
            payload: "test"
        })
    }

    return (
        <div className="pt-[23px]">
            <div className="flex gap-[14px] float-right">
            <button onClick={toggleDarkMode}>
            <span className={`rounded-md p-1 ${darkMode ? 'bg-yellow-600' : 'bg-gray-400'}`}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon  } />
              <FontAwesomeIcon icon={ faToggleOff} />
            </span>
            {darkMode ? ' LIGHT MODE' : ' DARK MODE'}
            </button>
                 <p>|</p>
                  <button onClick={setTheme}> {lang === 'EN' ? 'MAKE ENGLISH ' : 'TÜRKÇEYE GEÇ '} </button>
                  <img src={lang === 'EN'  ? 'enflag.png' : 'trflag.png'  } className='w-[30px] h-[30px]'/>
            </div>
            <div className='flex justify-between mt-16'>
            <div className="  flex-1">            
                <img src="logo.gg2.png" className=" w-[83.68px] h-[82px] " />
            </div>
            <div className=" flex justify-between">
                <nav className='flex gap-10'>
                <button className="text-[#6B7280]">Skills</button>
                <button className="text-[#6B7280]">Projects</button>
                <button className="text-[#3730A3] bg-white border-[#3730A3] py-[12px] px-[32px] rounded">Hire me</button>
                </nav>
            <div></div>
            </div>
         </div>
            
            
        </div>
    )
}