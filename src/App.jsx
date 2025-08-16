import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/sections/Home'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contacts from './components/sections/Contacts'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
