import React from 'react'

const Navbar = () => {
  return (
    <nav className="[mask-type:luminance] hover:[mask-type:alpha]">
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline transform transition-transform duration-500 hover:translate-z-1 hover:scale-105' style={{ perspective: '500px' }}>
          DablU
        </div>
        
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400 hover:translate-z-2 hover:scale-105 transform transition-transform duration-300' style={{ perspective: '500px' }}>Home</a>
          <a href="#about" className='hover:text-gray-400 hover:translate-z-2 hover:scale-105 transform transition-transform duration-300' style={{ perspective: '500px' }}>About Me</a>
          <a href="#skills" className='hover:text-gray-400 hover:translate-z-2 hover:scale-105 transform transition-transform duration-300' style={{ perspective: '500px' }}>Skills</a>
          <a href="#project" className='hover:text-gray-400 hover:translate-z-2 hover:scale-105 transform transition-transform duration-300' style={{ perspective: '500px' }}>Projects</a>
          <a href="#contact" className='hover:text-gray-400 hover:translate-z-2 hover:scale-105 transform transition-transform duration-300' style={{ perspective: '500px' }}>Contact</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-110 shadow-lg hover:shadow-2xl px-4 py-2 rounded-full' style={{ perspective: '500px' }}>
          Connect Me
        </button>
      </div>
    </nav>
  )
}

export default Navbar
