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

        localStorage.setItem("localLang", JSON.stringify(localLang));
        localStorage.setItem("lang", JSON.stringify(lang === "EN" ? "TR" : "EN"));

        notifyLang();

    }

    const toggleDarkMode = () => {
        dispatch({
            type: "DARK_MODE",
            payload: "test"
        });
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        notifyTheme();
    }

    //Tostify Notifications
    let notifyTheme;
    if (lang === 'EN') {
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
            toast.success(!darkMode ? 'DARK MODE ACIK' : 'DARK MODE KAPALI', {
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
        toast.success(lang === 'EN' ? 'DİL TERCİHİ TÜRKÇE' : 'PREFFERRED LANG ENGLISH', {
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
        <header className="mt-5 px-[20px] md:px-[190px]">
            <div className="flex gap-1 justify-end flex-row mb-5">
                <button onClick={toggleDarkMode}>
                    <span className={`rounded-md p-0.5 ${darkMode ? 'bg-yellow-600' : 'bg-gray-400'}`}>
                        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
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
                <img src={lang === 'TR' ? 'enflag.png' : 'trflag.png'} className='w-[25px] h-[25px]' alt='ülkebayragı' />
            </div>
            <div className='flex flex-row  mt-2 justify-between my-5'>
                <div className=" ">
                    <img src={!darkMode ? 'logo.gg.png' : 'logo.gg2.png'} className='w-[83.68px] h-[82px] ' alt='logo' />
                </div>
                <div className=" ">
                    <nav className='flex flex-col sm:flex-row gap-2'>
                        <button className="dark:text-[#6B7280] text-[#6B7280] font-medium py-[1px] px-[4px]">{constData.constSkills}</button>
                        <button className="dark:text-[#6B7280] text-[#6B7280] font-medium py-[1px] px-[4px]">{constData.constProjects}</button>
                        <button className="text-[#3730A3] dark:bg-white dark:border-[#3730A3] border-2 border-[#3730A3]  xl:py-[12px] xl:px-[32px]  py-[1px] px-[4px] rounded font-medium">{constData.constHireMe}</button>
                    </nav>
                    <div>
                    </div>
                </div>
            </div>


        </header>
    )
}