'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/about.png"
            alt="About Me Illustration"
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.div 
          className="md:w-1/2 md:pl-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg mb-4 text-white">
            Hi, I'm Romaisa Hanif, a passionate frontend developer, Python enthusiast, and graphics designer. With a keen eye for detail and a love for creating beautiful, functional websites, I strive to bring ideas to life through code and design.
          </p>
          <p className="text-lg mb-4 text-white">
            My journey in the world of technology has led me to explore various aspects of software development, from crafting intuitive user interfaces to building robust backend systems. I'm always eager to learn new technologies and improve my skills.
          </p>
          <p className="text-lg text-white">
            When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or sharing my knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

