// app/components/Nav.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Home, PenTool, Camera, Briefcase, Linkedin, Dribbble } from 'lucide-react'

export default function Nav() {
  const [activePage, setActivePage] = useState('home')

  const pages = {
    home: { title: 'Home', icon: Home },
    projects: { title: 'Projects', icon: PenTool },
    photography: { title: 'Photography', icon: Camera },
    work: { title: 'Work', icon: Briefcase },
  }

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <motion.div
        className="flex flex-col items-center space-y-6 bg-[#1E1E1E] rounded-full py-4 px-3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.entries(pages).map(([key, { icon: Icon }]) => (
          <motion.button
            key={key}
            className={`p-2 rounded-full ${activePage === key ? 'bg-[#2A2A2A]' : 'bg-transparent'}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage(key)}
          >
            <Icon className="w-5 h-5 text-gray-400" />
          </motion.button>
        ))}
        <div className="w-6 h-px bg-gray-700 my-2" />
        <motion.button className="p-2 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Linkedin className="w-5 h-5 text-gray-400" />
        </motion.button>
        <motion.button className="p-2 rounded-full" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Dribbble className="w-5 h-5 text-gray-400" />
        </motion.button>
      </motion.div>
    </nav>
  )
}
