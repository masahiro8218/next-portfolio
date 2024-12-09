'use client'

import { motion } from 'framer-motion'

const Header = () => {

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white shadow-md z-10"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-800"
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
              <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-gray-900">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

