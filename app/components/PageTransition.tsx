'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <motion.div
        className="fixed inset-0 z-50 bg-primary"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed inset-0 z-50 bg-primary"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      {children}
    </>
  )
}

export default PageTransition

