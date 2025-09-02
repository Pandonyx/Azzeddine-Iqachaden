"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id='about'
      className='relative min-h-screen flex items-center justify-center 
      overflow-hidden transition-colors duration-700 px-6 py-20 bg-white dark:bg-black'>
      {/* Background photos */}
      <motion.img
        src='/pandodev.png'
        alt='About Left'
        className='absolute left-0 top-1/4 w-1/3 max-w-xl opacity-0 filter brightness-110 contrast-105 saturate-110'
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      <motion.img
        src='/pandobiz.png'
        alt='About Middle'
        className='absolute left-1/2 -translate-x-1/2 top-10 w-1/3 max-w-xl opacity-0 fade-bottom filter brightness-110 contrast-105 saturate-110'
        initial={{ y: -120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      />

      <motion.img
        src='/chefpando-.png'
        alt='About Right'
        className='absolute right-0 top-1/4 w-1/3 max-w-xl opacity-0 filter brightness-110 contrast-105 saturate-110'
        initial={{ x: 120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      />

      {/* Content */}
      <motion.div
        className='max-w-3xl text-center p-8 rounded-2xl 
        bg-black/40 dark:bg-white/10 backdrop-blur-md shadow-2xl relative z-10'
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}>
        <motion.h2
          className='text-5xl font-extrabold mb-6'
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}>
          About Me
        </motion.h2>

        <motion.p
          className='text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-200'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}>
          I’m <span className='font-semibold'>Azzeddine</span>, but online I go
          by <span className='font-semibold text-indigo-500'>Pandonyx</span>. My
          journey has taken me from the heat of professional kitchens, through
          entrepreneurship, and into software development. I specialize in
          crafting interactive experiences that feel alive and make an
          impression.
        </motion.p>
      </motion.div>
    </section>
  );
}
