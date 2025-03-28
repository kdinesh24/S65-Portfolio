"use client"

import { useState, useEffect } from "react"
import { Phone, Search } from "lucide-react"
import { cn } from "@/lib/utils"

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
          <span className="font-mono text-lg">LOCAL/{currentTime}</span>
          <Phone size={20} className="text-white" />
        </div>
        <div className="flex items-center space-x-4">
          <Search size={24} className="text-white" />
          <button className="bg-white text-black px-4 py-1 rounded-full font-bold">MENU</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <div className="flex items-center justify-center mb-8">
          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
          <span className="font-mono text-lg tracking-wider">AVAILABLE FOR FREELANCE</span>
        </div>

        <div className="text-center">
          <h1
            className={cn(
              "text-8xl font-bold tracking-tighter mb-4 transform translate-y-full transition-transform duration-1000",
              animationTriggered && "translate-y-0",
            )}
          >
            KALVIUM
          </h1>
          <div className="relative h-[90px] overflow-hidden">
            <h1
              className={cn(
                "text-8xl font-bold tracking-tighter absolute w-full transform translate-y-full transition-transform duration-1000",
                animationTriggered && "translate-y-0",
              )}
            >
              SQUAD65
            </h1>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
        <div className="font-mono">BASED IN LA, CALIFORNIA</div>
        <div className="font-mono">//DIGITAL DESIGNER + FRAMER DEVELOPER</div>
      </footer>



    </div>
  )
}

