"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const earlyWorks = [
  {
    title: "Matrix-Inspired Portfolio",
    description:
      "My first ever portfolio, inspired by the Matrix theme. Experimental and fun.",
    image: "/projects/matrix.png",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://matrixportfolio.vercel.app/",
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
  {
    title: "ALX Listing App",
    description:
      "A listings application showcasing deployed functionality and clean UI.",
    image: "/projects/airbnbclone.png",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://alx-listing-app-deployed-muso93de7-pandonyxs-projects.vercel.app",
    code: "https://github.com/Pandonyx/alx-listing-app-deployed",
    openInNewTab: true,
  },
];

const inProgress = [
  {
    title: "Restaurant Management System (In Progress)",
    description:
      "A full-stack system for restaurant operations with Next.js frontend and Django backend.",
    image: "/projects/restaurantmanagementsys.png",
    tech: ["Next.js", "Django", "PostgreSQL"],
    inProgress: true,
  },
  {
    title: "Library Management System (In Progress)",
    description:
      "A system to manage books, members, and loans, with admin dashboards.",
    image: "/projects/libms.jpg",
    tech: ["Next.js", "Django"],
    inProgress: true,
  },
];

export default function Projects() {
  type Project = {
    title: string;
    description: string;
    image: string;
    tech?: string[];
    live?: string;
    code?: string;
    inProgress?: boolean;
    openInNewTab?: boolean;
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id='projects'
      className='relative min-h-screen flex flex-col justify-center 
  bg-gradient-to-br from-gray-50 via-white to-gray-100 
  dark:from-gray-900 dark:via-gray-800 dark:to-black px-6 py-20'>
      <h2 className='text-5xl font-extrabold mb-20 text-center text-indigo-300'>
        Projects
      </h2>

      <div className='flex flex-col space-y-40'>
        {/* Portfolios */}
        <motion.div
          className='max-w-6xl mx-auto'
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <h3 className='text-3xl font-bold text-center mb-12 text-indigo-200'>
            Portfolios
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {earlyWorks.map((project, i) => (
              <div
                key={i}
                className='flex flex-col items-center text-center 
                bg-white/5 dark:bg-white/10 backdrop-blur-md rounded-xl 
                shadow-lg p-6'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='w-full h-64 object-cover rounded-lg mb-4 
                  border border-gray-700'
                />
                <h4 className='text-xl font-semibold'>{project.title}</h4>
                <p className='text-gray-400 text-sm mt-2'>
                  {project.description}
                </p>
                <div className='flex gap-4 mt-6'>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className='px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition'>
                    Live Demo
                  </button>
                  <a
                    href={project.code}
                    target='_blank'
                    className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition'>
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dining Project */}
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className='flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12'
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='flex-1'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-72 object-cover rounded-xl shadow-2xl 
                border border-gray-700'
              />
            </div>
            <div className='flex-1 text-center md:text-left space-y-4'>
              <h3 className='text-3xl font-bold text-indigo-200'>
                {project.title}
              </h3>
              <p className='text-lg text-gray-400'>{project.description}</p>
              <div className='flex gap-4 justify-center md:justify-start pt-4'>
                {project.openInNewTab ? (
                  <a
                    href={project.live}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition'>
                    Live Demo
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className='px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition'>
                    Live Demo
                  </button>
                )}
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

        {/* In Progress */}
        {inProgress.map((project, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}>
            <div className='flex-1 relative'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-72 object-cover rounded-xl shadow-2xl 
                border border-gray-700 opacity-90'
              />
              <span className='absolute top-2 left-2 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold'>
                In Progress
              </span>
            </div>
            <div className='flex-1 text-center md:text-left space-y-4'>
              <h3 className='text-3xl font-bold text-indigo-200'>
                {project.title}
              </h3>
              <p className='text-lg text-gray-400'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className='bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl 
              w-full max-w-5xl h-[80vh] relative'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}>
              <button
                onClick={() => setSelectedProject(null)}
                className='absolute top-3 right-3 text-sm bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition'>
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
