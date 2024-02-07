import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {
    const lang = useSelector((store) => store.lang);
    const localLang = useSelector((store) => store.localLang);
    const darkMode = useSelector((store) => store.darkMode);
    const data = useSelector((store) => store.data);

    const headerData = lang === 'EN' ? data.en.header : data.tr.header;
    const constData = lang === 'EN' ? data.en.const : data.tr.const;
    const dispatch = useDispatch();
    const setLang = () => {
        
        dispatch({
            type: "CHANGE_LANG",
            payload: "test",
        });

        localStorage.setItem("localLang" , JSON.stringify(localLang));
        localStorage.setItem("lang" , JSON.stringify( lang === "EN" ? "TR" : "EN"));

        notifyLang();

    }

    const toggleDarkMode = () => {
        dispatch({
            type: "DARK_MODE",
            payload: "test"
        });
        localStorage.setItem("darkMode" , JSON.stringify(!darkMode));
        notifyTheme();
    }
  
//Tostify Notifications
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
            toast.success(!darkMode ? 'DARK MODE ACIK' : 'DARK MODE KAPALI' , {
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
        toast.success(lang === 'EN' ? 'DİL TERCİHİ TÜRKÇE' : 'PREFFERRED LANG ENGLISH' , {
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
        <div className="pt-[23px] xl:pl-[125px] xl:pr-[175px] lg:pl-[100px] lg:pr-[150px]  sm:pl-[60px] sm:pr-[90px] pl-[20px] pr-[30px]">
            <div className="flex gap-[14px] float-right">
            <button onClick={toggleDarkMode}>
            <span className={`rounded-md p-0.5 ${darkMode ? 'bg-yellow-600' : 'bg-gray-400'}`}>
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon  } />
              <FontAwesomeIcon icon={darkMode ? faToggleOn : faToggleOff} />
            </span>
            <span className='dark:text-[#D9D9D9] text-[#777777]'>
            {!darkMode ? constData.constThemeDark : constData.constTheme}
            </span>
            </button>
                 <p className='text-[#777777]'>|</p>
                 <span className='text-[#4731D3] dark:text-[#BAB2E7]'>
                  <button onClick={setLang}> {constData.constLang} </button>
                  </span>
                  <img src={lang === 'TR'  ? 'enflag.png' : 'trflag.png'  } className='w-[25px] h-[25px]'/>
            </div>
            <div className='flex justify-between mt-16'>
            <div className="  flex-1">            
                <img src={!darkMode ? 'logo.gg.png' : 'logo.gg2.png' } className='xl:w-[83.68px] xl:h-[82px] lg:w-[70.68px] lg:h-[70px] w-[63.68px] h-[62px]'/>
            </div>
            <div className=" flex justify-between">
                <nav className='flex xl:gap-10 lg:gap-6 md:gap-4 gap:2'>
                <button className="dark:text-[#6B7280] text-[#6B7280] font-medium py-[1px] px-[4px]">{constData.constSkills}</button>
                <button className="dark:text-[#6B7280] text-[#6B7280] font-medium py-[1px] px-[4px]">{constData.constProjects}</button>
                <button className="text-[#3730A3] dark:bg-white dark:border-[#3730A3] border-2 border-[#3730A3]  xl:py-[12px] xl:px-[32px]  py-[1px] px-[4px] rounded font-medium">{constData.constHireMe}</button>
                </nav>
            <div></div>
            </div>
         </div>
            
            
        </div>
    )
}