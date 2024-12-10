'use client';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-gray-600 mb-4 md:mb-0'
          >
            © {new Date().getFullYear()} Mesluz. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
