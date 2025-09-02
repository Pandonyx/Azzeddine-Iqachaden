"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiRedux,
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiFigma,
  SiAdobephotoshop,
  SiGithub,
  SiGit,
  SiDocker,
  SiSass,
  SiHeroku,
  SiNetlify,
  SiVercel,
  SiJest,
  SiExpo,
  SiAxios,
} from "react-icons/si";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "HTML", icon: <SiHtml5 className='text-orange-500' /> },
        { name: "CSS", icon: <SiCss3 className='text-blue-500' /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className='text-yellow-400' />,
        },
        { name: "Python", icon: <SiPython className='text-green-500' /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: <SiReact className='text-sky-400' /> },
        { name: "React Native", icon: <SiReact className='text-indigo-400' /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className='text-black dark:text-white' />,
        },
        { name: "Django", icon: <SiDjango className='text-green-600' /> },
        {
          name: "TailwindCSS",
          icon: <SiTailwindcss className='text-cyan-400' />,
        },
        { name: "Redux", icon: <SiRedux className='text-purple-500' /> },
        { name: "Context API", icon: <SiReact className='text-teal-400' /> },
        { name: "Axios", icon: <SiAxios className='text-blue-400' /> },
        {
          name: "Expo",
          icon: <SiExpo className='text-black dark:text-white' />,
        },
      ],
    },
    {
      title: "Databases & APIs",
      skills: [
        { name: "MySQL", icon: <SiMysql className='text-blue-600' /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className='text-blue-400' />,
        },
        { name: "GraphQL", icon: <SiGraphql className='text-pink-500' /> },
        { name: "REST APIs", icon: <SiAxios className='text-green-400' /> },
      ],
    },
    {
      title: "Tools & Design",
      skills: [
        { name: "Figma", icon: <SiFigma className='text-pink-400' /> },
        {
          name: "Photoshop",
          icon: <SiAdobephotoshop className='text-blue-400' />,
        },
        { name: "SASS / SCSS", icon: <SiSass className='text-pink-500' /> },
        { name: "Git", icon: <SiGit className='text-red-500' /> },
        {
          name: "GitHub",
          icon: <SiGithub className='text-black dark:text-white' />,
        },
        { name: "Docker", icon: <SiDocker className='text-sky-600' /> },
      ],
    },
    {
      title: "Deployment & Testing",
      skills: [
        {
          name: "Vercel",
          icon: <SiVercel className='text-black dark:text-white' />,
        },
        { name: "Netlify", icon: <SiNetlify className='text-green-500' /> },
        { name: "Heroku", icon: <SiHeroku className='text-purple-500' /> },
        { name: "Jest", icon: <SiJest className='text-red-500' /> },
      ],
    },
  ];

  return (
    <section
      id='skills'
      className='relative min-h-screen flex flex-col items-center justify-center px-6 py-20 
      bg-[#1a002b] text-gray-100 space-y-20 transition-colors duration-700'>
      <h2 className='text-5xl font-extrabold mb-12 text-center text-indigo-300'>
        Skills & Stack
      </h2>

      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12'>
        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            className='rounded-2xl bg-white/5 dark:bg-white/10 backdrop-blur-md shadow-xl p-8 flex flex-col items-center'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: ci * 0.2 }}
            viewport={{ once: true }}>
            <h3 className='text-2xl font-bold mb-8 text-center text-indigo-200'>
              {cat.title}
            </h3>
            <div className='flex flex-wrap justify-center gap-10'>
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className='flex flex-col items-center group'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}>
                  <div
                    className='text-5xl mb-3 transition-transform duration-300 
                    group-hover:scale-125 group-hover:drop-shadow-[0_0_14px_rgba(186,85,255,0.7)]'>
                    {skill.icon}
                  </div>
                  <p className='font-medium text-sm text-indigo-100'>
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
