'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header 
      className="bg-primary bg-opacity-80 backdrop-blur-md sticky top-0 z-50 w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">Romaisa Hanif</Link>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </button>
          </div>
          <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'block space-y-4' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-primary md:bg-transparent p-4 md:p-0 mt-2 md:mt-0 shadow-md md:shadow-none`}>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.li key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className="text-white hover:text-secondary transition-colors text-xl font-medium block py-2 md:py-0"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </motion.header>
  )
}

export default Header

