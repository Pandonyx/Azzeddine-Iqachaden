"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const earlyWorks = [
  {
    title: "Matrix-Inspired Portfolio",
    description:
      "My first ever portfolio, inspired by the Matrix theme. Experimental and fun.",
    image: "/projects/matrix.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://matrixportfolio.vercel.app/", // replace with your demo URL
    code: "https://github.com/Pandonyx/Pandonyx.github.io",
  },

  {
    title: "Van Schneider-Inspired Portfolio",
    description:
      "A clean and minimal portfolio inspired by Tobias Van Schneider.",
    image: "/projects/VSP.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://pandonyx.github.io/PandonyxPortfolio/",
    code: "https://github.com/Pandonyx/PandonyxPortfolio",
  },
];

const projects = [
  {
    title: "Elegance Dining Website",
    description: "A mock client website for a fine dining restaurant.",
    image: "/projects/elegance-dining.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://elegantdining.vercel.app/",
    code: "https://github.com/Pandonyx/restaurantwebsitebasicstack",
  },
];

const inProgress = [
  {
    title: "Airbnb Clone (In Progress)",
    description:
      "An ambitious Airbnb clone with authentication, listings, and booking functionality. Still under development.",
    image: "/projects/airbnbclone.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Redux", "GraphQL"],
    live: "https://example.com/airbnb", // optional
    code: "#",
  },
  {
    title: "Restaurant Management System (In Progress)",
    description:
      "A full-stack system for restaurant operations with Next.js frontend and Django backend. Work in progress.",
    image: "/projects/restaurantmanagementsys.png",
    tech: ["Next.js", "Django", "PostgreSQL"],
    live: "https://example.com/restaurant",
    code: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section
      id='projects'
      className='relative min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black'>
      <h2 className='text-5xl font-extrabold mb-20 text-center'>Projects</h2>

      <div className='flex flex-col space-y-40'>
        {/* Early Works */}
        <motion.div
          className='max-w-6xl mx-auto px-6'
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h3 className='text-3xl font-bold text-center mb-12'>Portfolios</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            {earlyWorks.map((project, i) => (
              <div
                key={i}
                className='flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='rounded-lg mb-4 border border-gray-200 dark:border-gray-700'
                />
                <h4 className='text-xl font-semibold'>{project.title}</h4>
                <p className='text-gray-600 dark:text-gray-300 text-sm mt-2'>
                  {project.description}
                </p>
                <div className='flex gap-4 mt-8'>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className='px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
                    Live Demo
                  </button>
                  <a
                    href={project.code}
                    target='_blank'
                    className='px-3 py-1 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition'>
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/*  Dining */}
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 gap-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='flex-1'>
              <img
                src={project.image}
                alt={project.title}
                className='rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700'
              />
            </div>
            <div className='flex-1 text-center md:text-left space-y-4'>
              <h3 className='text-3xl font-bold'>{project.title}</h3>
              <p className='text-lg text-gray-700 dark:text-gray-300'>
                {project.description}
              </p>
              <div className='flex gap-4 justify-center md:justify-start pt-4'>
                <button
                  onClick={() => setSelectedProject(project)}
                  className='px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition'>
                  Live Demo
                </button>
                <a
                  href={project.code}
                  target='_blank'
                  className='px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition'>
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* In Progress Projects */}
        {inProgress.map((project, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto px-6 gap-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='flex-1 relative'>
              <img
                src={project.image}
                alt={project.title}
                className='rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 opacity-90'
              />
              <span className='absolute top-2 left-2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold'>
                In Progress
              </span>
            </div>
            <div className='flex-1 text-center md:text-left space-y-4'>
              <h3 className='text-3xl font-bold'>{project.title}</h3>
              <p className='text-lg text-gray-700 dark:text-gray-300'>
                {project.description}
              </p>
              <div className='flex gap-4 justify-center md:justify-start pt-4'>
                {/*{project.live && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className='px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition'>
                    Preview
                  </button>
                )} */}
                {/*<a
                  href={project.code}
                  target='_blank'
                  className='px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-900 transition'>
                  Code
                </a> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className='bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-4xl w-full h-[80vh] relative'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}>
              <button
                onClick={() => setSelectedProject(null)}
                className='absolute top-3 right-3 text-white bg-red-600 px-3 py-1 rounded-lg z-10 hover:bg-red-700 transition'>
                Close
              </button>
              <iframe
                src={selectedProject.live}
                className='w-full h-full border-0'
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
