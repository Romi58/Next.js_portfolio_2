'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary bg-opacity-80 backdrop-blur-md shadow-md w-full mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-0 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Romaisa Hanif. All rights reserved.
          </p>
          <motion.div 
            className="flex space-x-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="https://github.com/Romi58" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://pk.linkedin.com/in/romaisa-hanif" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:romaisahanifabbasi@gmail.com" 
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

