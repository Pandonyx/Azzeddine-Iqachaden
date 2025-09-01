"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SignatureImage from "./ui/SignatureImage";

const colorPairs = [
  { bg: "bg-white", text: "text-gray-800" },
  { bg: "bg-gray-100", text: "text-black" },
  { bg: "bg-gradient-to-r from-purple-800 to-indigo-900", text: "text-white" },
  { bg: "bg-gradient-to-r from-teal-500 to-green-600", text: "text-black" },
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
      className={`${bg} ${text} min-h-screen flex flex-col justify-center items-center relative overflow-hidden transition-colors duration-700`}>
      {/* Signature Placeholder */}
      <SignatureImage />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='absolute top-8 text-3xl font-bold italic'></motion.div>

      {/* Intro */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className='text-5xl md:text-7xl font-extrabold mb-4 text-center'>
        Hi, I’m Azzeddine
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className='text-xl md:text-2xl mb-8 text-center max-w-2xl'>
        Web Developer & Freelancer <br />
        crafting interactive experiences.
      </motion.p>

      {/* CTA */}
      <motion.a
        href='#contact'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='px-6 py-3 rounded-full bg-white text-black font-bold shadow-lg hover:shadow-xl transition '>
        Let’s Work Together
      </motion.a>
    </section>
  );
}
