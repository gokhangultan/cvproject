import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import NotFound from './components/NotFound'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import { store } from './store/store'

function App() {

  const darkMode = useSelector((store) => store.darkMode);
  const initialLang = useSelector((store) => store.lang);

  let localGetLang =  useEffect(() => {
    localStorage.getItem("lang" , JSON.stringify(lang));
  }, []);

  const lang = localGetLang ? localGetLang : initialLang;
   
  const notifyWelcome = () => {
    toast.success(lang === 'EN' ? 'WELCOME! Im Gokhan' : 'HOSGELDİN! Ben Gökhan', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "light", 
    });
  };

  useEffect(() => {
    notifyWelcome();
  }, []);

 


  return (
    <div className={` ${darkMode ? 'dark bg-[#252128]' : 'bg-[#FFFFFF]'}`}>
    
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      <ToastContainer />
      {/*<Switch>
      <Route path="*">
        <NotFound />
  </Route> </Switch>*/}
  
    
    </div>
  )
}

export default App
