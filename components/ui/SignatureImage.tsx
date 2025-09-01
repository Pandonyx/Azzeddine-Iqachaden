"use client";

import { motion } from "framer-motion";

type Props = {
  /** Path under /public (e.g. "/pandonyx.svg") */
  src?: string;
  /** Size classes */
  className?: string;
  /** Seconds */
  duration?: number;
};

export default function SignatureImage({
  src = "/pandonyxsvg.svg",
  className = "w-72 h-auto",
  duration = 1.8,
}: Props) {
  return (
    <div className={className}>
      <motion.img
        src={src}
        alt='Pandonyx signature'
        className='block w-full h-auto invert dark:invert-0'
        // Reveal from left -> right using CSS clip-path (robust + simple)
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration, ease: "easeInOut" }}
        style={{ willChange: "clip-path" }}
      />
    </div>
  );
}
