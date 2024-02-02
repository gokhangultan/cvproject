import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { store } from '../store/store';


export default function Header() {
    const lang = useSelector((store) => store.lang);
    const darkMode = useSelector((store) => store.darkMode);
    const dispatch = useDispatch();
    const setLang = () => {
        
        dispatch({
            type: "CHANGE_LANG",
            payload: "test",
        });

        localStorage.setItem("lang" , JSON.stringify(lang));

        notifyLang();

    }

    const toggleDarkMode = () => {
        dispatch({
            type: "DARK_MODE",
            payload: "test"
        });
        localStorage.setItem("darkMode" , JSON.stringify(darkMode));
        notifyTheme();
    }
  

    let notifyTheme;
    if(lang === 'EN') {
         notifyTheme = () => {
            toast.success(darkMode ? 'DARK MODE DISABLED' : 'DARK MODE ENABLED', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: darkMode ? "light" : "dark",
                
            });
        }
    } else {
        notifyTheme = () => {
            toast.success(darkMode ? 'DARK MODE ACIK' : 'DARK MODE KAPALI' , {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: darkMode ? "light" : "dark",
                
            });
        }
    }
   
    let notifyLang = () => {
        toast.success(lang === 'EN' ? 'PREFFERRED LANG ENGLISH' : 'DİL TERCİHİ TÜRKÇE', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: darkMode ? "dark" : "light",
        });
    }


    return (
        <div className="pt-[23px] pl-[125px] pr-[175px]">
            <div className="flex gap-[14px] float-right">
            <button onClick={toggleDarkMode}>
            <span className={`rounded-md p-0.5 ${darkMode ? 'bg-yellow-600' : 'bg-gray-400'}`}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon  } />
              <FontAwesomeIcon icon={ darkMode ? faToggleOn : faToggleOff} />
            </span>
            <span className='dark:text-[#D9D9D9] text-[#777777]'>
            {darkMode ? ' DARK MODE ' : ' LIGHT MODE'}
            </span>
            </button>
                 <p className='text-[#777777]'>|</p>
                 <span className='text-[#4731D3] dark:text-[#BAB2E7]'>
                  <button onClick={setLang}> {lang === 'EN' ? 'TÜRKÇEYE GEÇ' :  'TRANSLATE ENGLISH '} </button>
                  </span>
                  <img src={lang === 'TR'  ? 'enflag.png' : 'trflag.png'  } className='w-[25px] h-[25px]'/>
            </div>
            <div className='flex justify-between mt-16'>
            <div className="  flex-1">            
                <img src={darkMode ? 'logo.gg.png' : 'logo.gg2.png' } className='w-[83.68px] h-[82px]'/>
            </div>
            <div className=" flex justify-between">
                <nav className='flex gap-10'>
                <button className="dark:text-[#6B7280] text-[#6B7280] font-medium ">Skills</button>
                <button className="dark:text-[#6B7280] text-[#6B7280] font-medium">Projects</button>
                <button className="text-[#3730A3] dark:bg-white dark:border-[#3730A3] border-2 border-[#3730A3]  py-[12px] px-[32px] rounded font-medium">Hire me</button>
                </nav>
            <div></div>
            </div>
         </div>
            
            
        </div>
    )
}