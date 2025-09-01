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
  SiMysql,
  SiPostgresql,
  SiGraphql,
  SiFigma,
  SiAdobephotoshop,
  SiGithub,
  SiGit,
  SiDocker,
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
      title: "Frameworks",
      skills: [
        { name: "React", icon: <SiReact className='text-sky-400' /> },
        {
          name: "Next.js",
          icon: <SiNextdotjs className='text-black dark:text-white' />,
        },
        { name: "Django", icon: <SiDjango className='text-green-600' /> },
        { name: "Tailwind", icon: <SiTailwindcss className='text-cyan-400' /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", icon: <SiMysql className='text-blue-600' /> },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className='text-blue-400' />,
        },
        { name: "GraphQL", icon: <SiGraphql className='text-pink-500' /> },
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
        { name: "Git", icon: <SiGit className='text-red-500' /> },
        {
          name: "GitHub",
          icon: <SiGithub className='text-black dark:text-white' />,
        },
        { name: "Docker", icon: <SiDocker className='text-sky-600' /> },
      ],
    },
  ];

  return (
    <section
      id='skills'
      className='relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-black space-y-20'>
      <h2 className='text-5xl font-extrabold mb-12 text-center'>
        Skills & Stack
      </h2>

      <div className='w-full max-w-5xl space-y-16'>
        {categories.map((cat, ci) => (
          <div key={ci}>
            <h3 className='text-2xl font-bold mb-6 text-center'>{cat.title}</h3>
            <div className='flex flex-wrap justify-center gap-8'>
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className='flex flex-col items-center group'
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  viewport={{ once: true }}>
                  <div className='text-5xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]'>
                    {skill.icon}
                  </div>
                  <p className='font-medium text-sm'>{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
