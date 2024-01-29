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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      {/*<Route path="*">
        <NotFound />
  </Route> */}
    
    </>
  )
}

export default App
