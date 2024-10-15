import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/about'
import  Skills from './pages/skills'
import './App.css'
 
function App() {

  return (
    <div>
        <Navbar />
        <Hero />
         <About />
         <Skills />
        
    </div>
  )
}

export default App
