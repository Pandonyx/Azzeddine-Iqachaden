"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiFiverr, SiGithub, SiLinkedin } from "react-icons/si";
import emailjs from "emailjs-com";
import SignatureImage from "./ui/SignatureImage";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 🎨 Background gradient palette (fixed)
  const bgPairs = [
    "from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-black",
    "from-green-100 via-emerald-100 to-teal-100 dark:from-green-900 dark:via-emerald-900 dark:to-black",
    "from-yellow-100 via-orange-100 to-red-100 dark:from-yellow-900 dark:via-orange-900 dark:to-black",
  ];
  const [bgIndex, setBgIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        e.currentTarget,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  // ✨ Scroll reveal variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
  };

  return (
    <section
      id='contact'
      onClick={() => setBgIndex((prev) => (prev + 1) % bgPairs.length)}
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 py-20 cursor-pointer
      bg-gradient-to-br transition-colors duration-700 ${bgPairs[bgIndex]}`}>
      {/* ✒️ Signature */}
      <motion.div
        className='w-64 mb-6'
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        custom={0}
        viewport={{ once: true }}>
        <SignatureImage />
      </motion.div>

      {/* 📝 Title */}
      <motion.h2
        className='text-5xl font-extrabold text-center mb-12'
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        custom={1}
        viewport={{ once: true }}>
        Let’s Work Together
      </motion.h2>

      {/* 🎯 Hire Me Button */}
      <motion.button
        onClick={(e) => {
          e.stopPropagation(); // prevent background toggle
          setIsOpen(true);
        }}
        className='px-8 py-4 text-xl rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition'
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        custom={2}
        viewport={{ once: true }}>
        Hire Me
      </motion.button>

      {/* 🔗 Social Icons */}
      <motion.div
        className='flex justify-center gap-10 mt-8 text-4xl'
        variants={fadeUp}
        initial='hidden'
        whileInView='visible'
        custom={3}
        viewport={{ once: true }}>
        <a
          href='https://www.fiverr.com/s/VY4dvG5'
          target='_blank'
          className='text-green-500 hover:scale-125 transition-transform'>
          <SiFiverr />
        </a>
        <a
          href='https://github.com/Pandonyx'
          target='_blank'
          className='text-gray-800 dark:text-white hover:scale-125 transition-transform'>
          <SiGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/azzeddine-iqachaden/'
          target='_blank'
          className='text-green-600 hover:scale-125 transition-transform'>
          <SiLinkedin />
        </a>
      </motion.div>

      {/* 📩 Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}>
            <motion.div
              className='bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-2xl p-8 relative'
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // keep modal open
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSubmitted(false);
                }}
                className='absolute top-3 right-3 text-sm bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition'>
                Close
              </button>

              {!submitted ? (
                <>
                  <h3 className='text-2xl font-bold mb-6 text-center'>
                    Thank you for your interest! 🎉
                  </h3>
                  <form
                    onSubmit={handleSubmit}
                    className='space-y-4'>
                    <input
                      name='name'
                      type='text'
                      placeholder='Name'
                      required
                      className='w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                    />
                    <input
                      name='email'
                      type='email'
                      placeholder='Email'
                      required
                      className='w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                    />
                    <input
                      name='company'
                      type='text'
                      placeholder='Company (Optional)'
                      className='w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                    />
                    <input
                      name='subject'
                      type='text'
                      placeholder='Subject'
                      required
                      className='w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800'
                    />
                    <select
                      name='position'
                      required
                      className='w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800'>
                      <option value=''>Select Position</option>
                      <option value='freelance'>Freelance Work</option>
                      <option value='fulltime'>Full-time Position</option>
                      <option value='parttime'>Part-time Position</option>
                    </select>
                    <textarea
                      name='message'
                      placeholder='Your Message'
                      rows={4}
                      required
                      className='w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-800'></textarea>
                    <button
                      type='submit'
                      disabled={loading}
                      className='w-full py-3 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition'>
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className='text-center space-y-4'>
                  <div className='text-6xl'>✅</div>
                  <h3 className='text-2xl font-bold'>Message Sent!</h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Thank you for reaching out. I’ll get back to you shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
