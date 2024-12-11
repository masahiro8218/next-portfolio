'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 初期化時にチェック
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        type: 'spring',
        bounce: 0.6,
      }}
      className='fixed w-full top-0 z-50 bg-opacity-70 backdrop-blur-md bg-white shadow-sm'
    >
      <nav className='container mx-auto px-6 py-3'>
        <div className='flex justify-between items-center'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className='text-2xl font-bold tracking-widest bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text'
          >
            Mesluz Portfolio
          </motion.div>

          {/* ハンバーガーメニューボタン */}
          {isMobile && (
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className='flex flex-col justify-center items-center w-8 h-8 space-y-1.5'
            >
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-gray-600 transform transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </motion.button>
          )}

          {/* デスクトップメニュー */}
          {!isMobile && (
            <ul className='flex space-x-4'>
              {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.2 }}
                >
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-gray-600 hover:text-blue-600 relative group transition-colors duration-300 tracking-wider cursor-pointer'
                  >
                    {item}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300' />
                  </Link>
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* モバイルメニュー */}
        {isMobile && (
          <motion.ul
            variants={menuVariants}
            initial='closed'
            animate={isOpen ? 'open' : 'closed'}
            className='flex flex-col items-center space-y-2 overflow-hidden mt-2'
          >
            {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className='w-full text-center'
              >
                <div className='inline-block relative'>
                  <Link
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='block py-1 text-gray-600 hover:text-blue-600 group transition-colors duration-300 tracking-wider cursor-pointer'
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                    <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300' />
                  </Link>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
