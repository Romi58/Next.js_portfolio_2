"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { use } from "react"

// This would typically come from a database or API
const projects = [
  {
    id: "hackathon-ui-ux",
    title: "Hackathon UI/UX",
    description: "A user interface and experience design project for a hackathon event.",
    image: "/p1.webp",
    details:
      "This project focused on creating an intuitive and engaging user interface for a hackathon event. The design prioritizes ease of navigation and clear information presentation, enhancing the overall user experience for participants. We incorporated modern design trends and ensured accessibility for all users.",
    technologies: ["Figma", "Typescript","React.js", "Tailwindcss","Shadcn UI"],
    link: "https://github.com/Romi58/hakathon_UI_UX.git",
  },
  {
    id: "html-css-project",
    title: "HTML/CSS Project",
    description: "A showcase of HTML and CSS skills with responsive design.",
    image: "/p_2.jpg",
    details:
      "This project demonstrates proficiency in HTML and CSS, featuring a responsive design that adapts seamlessly to various screen sizes. It includes modern CSS techniques such as Flexbox and Grid, and follows best practices for web accessibility. The project also incorporates CSS animations and transitions for a more engaging user experience.",
    technologies: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"],
    link: "https://github.com/Romi58/HTML_CSS_.git",
  },
  {
    id: "dynamic-resume-builder",
    title: "Dynamic Resume Builder",
    description: "An application to create dynamic and personalized resumes.",
    image: "/p2 (3).png",
    details:
      "The Dynamic Resume Builder is a web application that allows users to create professional, customized resumes with ease. It features a user-friendly interface, multiple template options, and the ability to export resumes in various formats. The app uses modern web technologies to provide a smooth, interactive experience.",
    technologies: ["HTML5", "CSS3", "Typescript", , "PDF Generation"],
    link: "https://github.com/Romi58/Dynamic_Resume_Builder_.git",
  },
  {
    id: "student-management-system",
    title: "Student Management System",
    description: "A comprehensive system for managing student information and records.",
    image: "/p5.webp",
    details:
      "This Student Management System is a robust application designed to streamline administrative tasks in educational institutions. It includes features such as student enrollment, attendance tracking, grade management, and report generation. The system is built with scalability and security in mind, ensuring efficient management of large volumes of student data.",
    technologies: ["  Typescript"],
    link: "https://github.com/Romi58/-project-06-_Student-Management-System.git",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "A tool for converting between different currencies with real-time rates.",
    image: "/p7.webp",
    details:
      "The Currency Converter is a web application that provides real-time currency conversion rates. It features an intuitive interface, supports a wide range of currencies, and offers historical rate charts. The app integrates with a reliable currency API to ensure accurate and up-to-date conversion rates.",
    technologies: ["Typescript"],
    link: "https://github.com/Romi58/project04_currency_converter.git",
  },
  {
    id: "oop-project",
    title: "OOP Project",
    description: "An object-oriented programming project showcasing advanced concepts.",
    image: "/p6.webp",
    details:
      "This Object-Oriented Programming (OOP) project demonstrates advanced OOP concepts such as inheritance, polymorphism, encapsulation, and abstraction. It includes a complex system architecture, showcasing how OOP principles can be applied to create scalable and maintainable software solutions.",
    technologies: ["Typescript"],
    link: "https://github.com/Romi58/project10_oop.git",
  },
]

export default function ProjectDetails({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white shadow-xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-64 sm:h-80">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="p-6 sm:p-8">
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {project.description}
            </motion.p>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Project Details</h2>
              <p className="text-gray-600">{project.details}</p>
            </motion.div>
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-primary text-white hover:bg-primary/80 transition-colors duration-300 text-center"
              >
                View on GitHub
              </a>
              <Link
                href="/projects"
                className="btn bg-secondary text-white hover:bg-secondary/80 transition-colors duration-300 text-center"
              >
                Back to Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

