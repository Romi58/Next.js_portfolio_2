'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = [
  "Frontend Developer",
  "Python Developer",
  "Graphics Designer",
  "B2B Sales Expert"
]

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === roles[roleIndex]) {
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    } else {
      const nextChar = isDeleting
        ? roles[roleIndex].substring(0, displayText.length - 1)
        : roles[roleIndex].substring(0, displayText.length + 1);
    
      timeout = setTimeout(() => setDisplayText(nextChar), isDeleting ? 50 : 150);
    }

    return () => clearTimeout(timeout);
  }, [roleIndex, displayText, isDeleting])

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
          >
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hello, I am Romaisa Hanif
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-xl md:text-2xl mb-8 text-white">
                I am a <span className="text-primary font-semibold">{displayText}</span>
                <span className="animate-blink">|</span>
              </h2>
            </motion.div>
            <motion.a 
              href="/contact" 
              className="btn text-lg md:text-xl bg-primary text-white hover:bg-opacity-80 px-6 py-2 rounded-full inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 105, 180, 0.7)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="/home1.webp"
                alt="Romaisa Hanif"
                width={256}
                height={256}
                className="rounded-full"
              />
              <motion.div
                className="absolute inset-0 border-4 border-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

