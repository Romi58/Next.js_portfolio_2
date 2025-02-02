'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h1>
      <motion.div 
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Image
          src="/contact.jpg"
          alt="Contact Illustration"
          width={400}
          height={300}
          className="mx-auto rounded-lg shadow-lg"
        />
      </motion.div>
      <motion.div 
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white text-secondary"
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="btn w-full bg-primary text-white hover:bg-opacity-80"
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255, 105, 180, 0.7)' }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}

