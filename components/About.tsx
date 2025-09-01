"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id='about'
      className='relative min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700'>
      {/* Background overlay effect (inherits from Hero style) */}
      <div className='absolute inset-0 -z-10 bg-gradient-to-r from-purple-800/70 to-indigo-900/70' />

      {/* Content */}
      <motion.div
        className='max-w-3xl text-center p-8 rounded-2xl bg-black/40 backdrop-blur-md shadow-2xl'
        initial={{ scale: 0.7, opacity: 0 }}
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
          className='text-lg md:text-xl leading-relaxed text-gray-200'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}>
          I’m <span className='font-semibold text-white'>Azzeddine</span>, but
          online I go by{" "}
          <span className='font-semibold text-indigo-300'>Pandonyx</span>. My
          journey has taken me from the heat of professional kitchens, through
          entrepreneurship, and into software development. I specialize in
          crafting interactive experiences that feel alive and make an
          impression.
        </motion.p>
      </motion.div>
    </section>
  );
}
