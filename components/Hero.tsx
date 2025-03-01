'use client';

import { motion } from 'framer-motion';
import mainImage from '../public/main.png';
import ParticleImage from './ParticleImage';

const Hero = () => {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-black">
      <section className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 z-10">
          <ParticleImage imageUrl={mainImage.src} />
        </div>

        <div className="text-center relative">
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-red-600 mb-4"
          >
            熱き想いよ
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-red-600 mb-4"
          >
            世界へ
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
