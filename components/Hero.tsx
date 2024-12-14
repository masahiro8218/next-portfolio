'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import mainImage from '../public/main.png';

const Hero = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
      <section className='min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.4,
            ease: 'easeOut',
          }}
          className='absolute inset-0 z-10'
        >
          <Image
            src={mainImage}
            alt='mainImage'
            fill
            style={{
              objectFit: 'cover',
              transformOrigin: 'center center',
            }}
            priority
            sizes='100vw'
          />
        </motion.div>

        <div className='text-center relative'>
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-6xl font-bold text-red-600 mb-4'
          >
            熱き想いよ!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='text-4xl md:text-6xl font-bold text-red-600 mb-4'
          >
            世界へ
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
