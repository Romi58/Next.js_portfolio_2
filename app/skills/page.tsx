"use client"

import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaFigma, FaGitAlt } from "react-icons/fa"
import { SiTailwindcss, SiTypescript, SiJavascript, SiNextdotjs } from "react-icons/si"

const skills = [
  { name: "HTML", icon: FaHtml5, percentage: 90 },
  { name: "CSS", icon: FaCss3Alt, percentage: 85 },
  { name: "Tailwind CSS", icon: SiTailwindcss, percentage: 80 },
  { name: "JavaScript", icon: SiJavascript, percentage: 85 },
  { name: "TypeScript", icon: SiTypescript, percentage: 75 },
  { name: "React", icon: FaReact, percentage: 80 },
  { name: "Next.js", icon: SiNextdotjs, percentage: 75 },
  { name: "Python", icon: FaPython, percentage: 70 },
  { name: "Figma", icon: FaFigma, percentage: 65 },
  { name: "Git", icon: FaGitAlt, percentage: 78 },
]

export default function Skills() {
  return (
    <div className="container mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 105, 180, 0.7)" }}
          >
            <div className="p-6">
              <div className="flex items-center mb-4">
                <skill.icon className="text-4xl text-primary mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary bg-pink-200">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                  <motion.div
                    style={{ width: `${skill.percentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

