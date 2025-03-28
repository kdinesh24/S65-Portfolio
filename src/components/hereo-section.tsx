"use client"

import { useState, useEffect } from "react"
import { Phone, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function LandingPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [animationTriggered, setAnimationTriggered] = useState(false)

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      const seconds = String(now.getSeconds()).padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimationTriggered(true)
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <span className="font-mono text-lg">LOCAL - {currentTime}</span>
        </div>
        <div className="flex items-center space-x-4">
            <Link href="/projects">
              <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">PROJECTS</button>
            </Link>
            <Link href="/students">
              <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">STUDENTS</button>
            </Link>
            <Link href="/mentors">
              <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">MENTORS</button>
            </Link>
            <Link href="/about">
              <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">ABOUT</button>
            </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <div className="flex items-center justify-center mb-8">
          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
          <span className="font-mono text-lg tracking-wider">ENGAGE YOUR SENSES WITH</span>
        </div>

        <div className="text-center">
          <h1
            className={cn(
              "font-mono text-9xl font-bold tracking-tighter mb-4 transform translate-y-full transition-transform duration-1000",
              animationTriggered && "translate-y-0",
            )}
          >
            KALVIUM•SQUAD65
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="font-mono">BASED IN LPU, JALANDHAR</div>
        <div className="font-mono">//DIGITAL DESIGNER + FRAMER DEVELOPER</div>
      </footer>
    </div>
  )
}
