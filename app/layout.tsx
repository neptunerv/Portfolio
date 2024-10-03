// app/layout.tsx
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="bg-[#121212] flex-1 p-12 overflow-auto pl-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
