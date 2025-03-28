import './globals.css'
import React, { ReactNode } from 'react'
import LandingPage from '../components/hereo-section'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        
        <main>
        <LandingPage />
          {children}
        </main>
        <footer style={{textAlign: "center", padding: "2rem 0", color: "rgba(255,255,255,0.6)", fontSize: "0.875rem"}}>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </body>
    </html>
  )
}