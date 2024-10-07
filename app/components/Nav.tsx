// app/components/Nav.tsx
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation
import { motion } from 'framer-motion'
import { Home, PenTool, Camera, Briefcase, Linkedin, Dribbble } from 'lucide-react'
import Link from 'next/link';

export default function Nav() {
  const pathname = usePathname(); // Get the current path
  const [activePage, setActivePage] = useState('home')

  const pages = {
    home: { title: 'Home', icon: Home, path: '/' },
    work: { title: 'Work', icon: Briefcase, path: '/Experience' },
    projects: { title: 'Projects', icon: PenTool, path: '/Projects' },
  }

  // Set activePage based on the current route
  useEffect(() => {
    const currentPage = Object.keys(pages).find(key => pages[key].path === pathname);
    if (currentPage) {
      setActivePage(currentPage);
    }
  }, [pathname]); // Listen for path changes

  return (
    <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col items-center space-y-6 bg-[#1E1E1E] rounded-full py-4 px-3">
        {Object.entries(pages).map(([key, { icon: Icon, path }]) => (
          <Link key={key} href={path} passHref>
            <button
              className={`p-2 rounded-full ${activePage === key ? 'bg-[#2A2A2A]' : 'bg-transparent'}`}
              onClick={() => setActivePage(key)}
            >
              <Icon className="w-5 h-5 text-gray-400" />
            </button>
          </Link>
        ))}
        <div className="w-6 h-px bg-gray-700 my-2" />
        <button className="p-2 rounded-full">
          <Linkedin className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-2 rounded-full">
          <Dribbble className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </nav>
  )
}
