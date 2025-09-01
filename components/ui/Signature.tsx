"use client";

import { motion } from "framer-motion";

export default function Signature() {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1024 1024'
      className='w-64 h-24 text-white'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'>
      <motion.path
        d='M10 80 C...' // <- paste your SVG path "d" here
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}
