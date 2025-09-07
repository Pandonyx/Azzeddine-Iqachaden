"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SignatureImage from "./ui/SignatureImage";

// 🎨 Solid background + text color pairs
const colorPairs = [
  { bg: "bg-indigo-200", text: "text-gray-900" },
  { bg: "bg-gray-100", text: "text-black" },
  { bg: "bg-gray-900", text: "text-white" },
  { bg: "bg-indigo-900", text: "text-white" },
  { bg: "bg-teal-600", text: "text-white" },
];

export default function Hero() {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const handleClick = () =>
      setColorIndex((prev) => (prev + 1) % colorPairs.length);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const { bg, text } = colorPairs[colorIndex];

  return (
    <section
      className={`${bg} ${text} min-h-screen flex flex-col justify-center items-center 
      relative overflow-hidden transition-colors duration-700 px-6`}>
      {/* ✒️ Signature */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='mb-8'>
        <SignatureImage />
      </motion.div>

      {/* 👋 Intro */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 text-center leading-tight'>
        Hi, I’m Azzeddine
      </motion.h1>

      {/* 💬 Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='text-lg sm:text-xl md:text-2xl mb-10 text-center max-w-2xl'>
        Web Developer & Freelancer <br />
        crafting interactive experiences.
      </motion.p>

      {/* 🎯 CTA */}
      <motion.a
        href='#contact'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className='px-8 py-4 rounded-full bg-black text-white font-bold shadow-lg 
        hover:shadow-xl hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 
        transition-colors'>
        Let’s Work Together
      </motion.a>
    </section>
  );
}
