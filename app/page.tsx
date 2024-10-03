// app/page.tsx
'use client'

import Header from './components/Header'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Layout from './components/Layout'

export default function HomePage() {
  const [activeProject, setActiveProject] = useState('project1')

  return (
    <Layout>
      <Header title="Home" />
      <motion.div
        className="text-gray-400 leading-relaxed max-w-3xl text-lg space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>
          Product design is a dynamic and multifaceted discipline that blends aesthetics,
          functionality, and innovation to <span className="text-white">create products</span> that enhance users' lives and experiences.
          Through a meticulous process of <span className="text-white">research, ideation, prototyping,</span> and <span className="text-white">iteration,</span> product
          designers transform concepts into tangible <span className="text-white">solutions,</span> addressing both practical needs and
          emotional desires.
        </p>
        <p>
          Striking a delicate balance between <span className="text-white">form</span> and <span className="text-white">function,</span> product design continually evolves
          to adapt to emerging technologies, societal trends, and user preferences, <span className="text-white">shaping the way</span>
          we interact with the world around us and defining the landscape of our everyday lives.
        </p>
      </motion.div>
      <div className="mt-12 flex space-x-4">
        {['Project 1', 'Project 2', 'Project 3'].map((project, index) => (
          <button
            key={index}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeProject === `project${index + 1}`
                ? 'bg-[#2A2A2A] text-white'
                : 'bg-[#1E1E1E] text-gray-400 hover:bg-[#252525]'
            }`}
            onClick={() => setActiveProject(`project${index + 1}`)}
          >
            {project}
          </button>
        ))}
      </div>
    </Layout>
  )
}
