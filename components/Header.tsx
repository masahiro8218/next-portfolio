'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const Header = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-10"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-800 dark:text-white"
        >
          YourName
        </motion.div>
        <ul className="flex space-x-4">
          {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
                {item}
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

