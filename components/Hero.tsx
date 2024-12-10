'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-4xl md:text-6xl font-bold text-gray-800 mb-4'
        >
          Hi, I'm YourName
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-xl md:text-2xl text-gray-600 mb-8'
        >
          A Full Stack Developer
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
