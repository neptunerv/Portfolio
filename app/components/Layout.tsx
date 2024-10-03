// app/components/Layout.tsx
import { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-[#121212] text-gray-400 overflow-hidden">
      <Nav />
      <main className="flex-1 p-12 overflow-auto">{children}</main>
      <Footer />
    </div>
  )
}
