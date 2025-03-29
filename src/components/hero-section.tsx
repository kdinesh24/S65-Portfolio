"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { ShootingStars } from "./ui/shooting-stars"
import { StarsBackground } from "./ui/stars-background"
import { motion } from "framer-motion"

export default function LandingPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [showIntro, setShowIntro] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [showSpotlight, setShowSpotlight] = useState(false)
  const [startCounting, setStartCounting] = useState(false)
  const [counter, setCounter] = useState(0)
  const counterRef = useRef(null)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, "0")
      const minutes = String(now.getMinutes()).padStart(2, "0")
      const seconds = String(now.getSeconds()).padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    // Animation sequence with intro text first
    setTimeout(() => {
      setShowIntro(true)
      
      // Then show spotlight and main content
      setTimeout(() => {
        setShowSpotlight(true)
        setShowContent(true)
        
        // Start counting after the content has appeared
        setTimeout(() => {
          setStartCounting(true)
        }, 1500) // Delay for counter start
      }, 1200)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  // Counter animation effect
  useEffect(() => {
    if (startCounting && counter < 65) {
      const speed = Math.max(1, Math.floor((65 - counter) / 10))
      const timer = setTimeout(() => {
        setCounter((prev) => Math.min(prev + speed, 65))
      }, 30)
      return () => clearTimeout(timer)
    }
  }, [counter, startCounting])

  // Format counter to always show two digits
  const formattedCounter = counter.toString().padStart(2, "0")

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* Stars background */}
      <StarsBackground starDensity={0.0002} />
      <ShootingStars />

      {/* Gradient line at top */}
      <div
        className="absolute top-0 left-0 w-full h-1 z-10"
        style={{
          background: "linear-gradient(90deg, #1c1c1c, #4d4d4d, #7f7f7f, #4d4d4d, #1c1c1c)",
          backgroundSize: "200% 100%",
          animation: "gradientMove 8s linear infinite",
        }}
      />

      <style jsx>{`
                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 200% 50%;
                    }
                }
                
                @keyframes shadowReveal {
                    0% {
                        opacity: 0;
                        text-shadow: 0 0 40px rgba(255,255,255,0.8), 0 0 80px rgba(255,255,255,0.5);
                        filter: blur(10px);
                        transform: scale(0.9);
                    }
                    50% {
                        opacity: 0.7;
                        text-shadow: 0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2);
                        filter: blur(3px);
                    }
                    100% {
                        opacity: 1;
                        text-shadow: 0 0 0 rgba(255,255,255,0);
                        filter: blur(0);
                        transform: scale(1);
                    }
                }
                
                @keyframes glitchText {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px);
                        letter-spacing: -5px;
                        clip-path: inset(0 100% 0 0);
                    }
                    10% {
                        opacity: 0.3;
                        transform: translateY(2px);
                        letter-spacing: 2px;
                        clip-path: inset(0 75% 0 0);
                    }
                    20% {
                        opacity: 0.5;
                        transform: translateY(-2px);
                        letter-spacing: 0px;
                        clip-path: inset(0 50% 0 0);
                    }
                    30% {
                        opacity: 0.8;
                        transform: translateY(1px);
                        clip-path: inset(0 25% 0 0);
                    }
                    40% {
                        opacity: 1;
                        transform: translateY(0);
                        letter-spacing: normal;
                        clip-path: inset(0 0 0 0);
                    }
                    43% {
                        opacity: 0.9;
                        transform: translateY(1px) skewX(3deg);
                    }
                    46% {
                        opacity: 1;
                        transform: translateY(0) skewX(0deg);
                    }
                    85% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 0.9;
                        transform: translateY(-1px) skewX(-1deg);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) skewX(0deg);
                    }
                }
                
                .shadow-reveal {
                    animation: shadowReveal 1.8s ease-out forwards;
                }
                
                .glitch-text {
                    animation: glitchText 1.5s ease-out forwards;
                }
            `}</style>

      <header className="flex justify-between items-center p-6 relative z-20">
        <div className="flex items-center space-x-4">
          <span className="font-mono text-lg">
            LOCAL - <strong>{currentTime}</strong>
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/projects">
            <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
              PROJECTS
            </button>
          </Link>
          <Link href="/students">
            <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
              STUDENTS
            </button>
          </Link>
          <Link href="/mentors">
            <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
              MENTORS
            </button>
          </Link>
        </div>
      </header>

      <main className="relative flex flex-col items-center justify-center h-[calc(100vh-200px)] z-20">
        {showSpotlight && <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />}

        <div className="flex items-center justify-center mb-8">
          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
          <motion.span 
            className="font-mono text-lg tracking-wider"
            initial={{ opacity: 0 }}
            animate={{
              opacity: showIntro ? 1 : 0,
            }}
            transition={{ duration: 1 }}
          >
            ENGAGE YOUR SENSES WITH
          </motion.span>
        </div>

        <div className="relative z-10 text-center">
          <div className={`font-mono text-9xl font-bold tracking-tighter mb-8 whitespace-nowrap ${showContent ? 'shadow-reveal' : 'opacity-0'}`}>
            <span>KALVIUM-SQUAD-</span>
            <span className="number-animation">{formattedCounter}</span>
          </div>
          <motion.p
            className="font-mono text-lg mt-2"
            initial={{ opacity: 0 }}
            animate={{
              opacity: showContent ? 1 : 0,
            }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            CRAFTED TO PROVE WE KNOW WHAT WE'RE DOING. A LITTLE FLEX <br />
            ON DESIGN, A LOT OF SKILL IN EXECUTION.
          </motion.p>
        </div>
      </main>
    </div>
  )
}

