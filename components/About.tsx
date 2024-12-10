'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import owner from '../public/owner.jpg';

const About = () => {
  return (
    <section id='about' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-3xl font-bold text-center text-gray-800 mb-8'
        >
          About Me
        </motion.h2>
        <div className='flex flex-col md:flex-row items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='md:w-1/2 mb-8 md:mb-0'
          >
            <Image
              src={owner}
              alt='Your Name'
              width={250}
              height={250}
              className='rounded-full mx-auto'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='md:w-1/2'
          >
            <p className='text-4xl font-bold text-red-600 mb-8 text-center tracking-widest'>
              熱き想いよ世界へ
            </p>
            <p className='text-xl text-gray-700 mb-4 text-center'>
              フロントエンジニア歴２年と
              <br />
              まだまだ経験は浅いですが、
              <br />
              あなたの色々なことをインターネットを通じて、
              <br />
              世界中の人達へ伝えていきたい
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
