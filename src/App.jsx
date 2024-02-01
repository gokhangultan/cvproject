import { useState } from 'react'
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

function App() {
  const [count, setCount] = useState(0)

  const darkMode = useSelector((store) => store.darkMode);

  return (
    <div className={` ${darkMode ? 'dark bg-[#252128]' : 'bg-[#FFFFFF]'}`}>
    
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      
      {/*<Route path="*">
        <NotFound />
  </Route> */} 
  
    
    </div>
  )
}

export default App
