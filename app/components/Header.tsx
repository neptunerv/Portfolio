// app/components/Header.tsx
import { motion } from 'framer-motion'

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <motion.h1
      className="text-6xl font-bold mb-8 text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title}
    </motion.h1>
  )
}
