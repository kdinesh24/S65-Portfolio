"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Search, Filter } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample project data - would come from API/database in real app
const projectsData = [
  {
    id: 1,
    title: "AI Content Generator",
    description: "A machine learning tool that creates personalized content based on user preferences.",
    tech: ["React", "Python", "TensorFlow"],
    students: 4,
    status: "Active"
  },
  {
    id: 2,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology.",
    tech: ["Solidity", "Ethereum", "Next.js"],
    students: 3,
    status: "Active"
  },
  {
    id: 3,
    title: "AR Campus Tour",
    description: "Augmented reality application for virtual campus exploration.",
    tech: ["Unity", "ARKit", "C#"],
    students: 5,
    status: "Completed"
  },
  {
    id: 4,
    title: "Smart Health Monitor",
    description: "IoT-based health monitoring system with real-time analytics.",
    tech: ["Node.js", "MongoDB", "Arduino"],
    students: 4,
    status: "Active"
  },
]

export default function ProjectsPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
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

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-4">
          <span className="font-mono text-lg">LOCAL - {currentTime}</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <button className="font-mono text-white px-4 py-1 rounded-full border border-white/20">
              <ArrowLeft className="w-4 h-4 mr-2 inline" />
              BACK
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center mb-8">
          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
          <span className="font-mono text-lg tracking-wider">INNOVATION IN ACTION</span>
        </div>

        <div className="text-center mb-16">
          <h1
            className={cn(
              "font-mono text-7xl font-bold tracking-tighter transform translate-y-full transition-transform duration-1000",
              animationTriggered && "translate-y-0",
            )}
          >
            PROJECTS•SHOWCASE
          </h1>
        </div>

        {/* Search and filter */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <Input 
              type="text" 
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/5 border-white/10 text-white pl-10 font-mono"
            />
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map(project => (
            <Card key={project.id} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-mono text-xl">{project.title}</CardTitle>
                  <Badge variant="outline" className={cn(
                    "font-mono text-xs",
                    project.status === "Active" ? "border-green-500 text-green-500" : "border-blue-500 text-blue-500"
                  )}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-white/70 font-mono">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="secondary" className="bg-white/10 text-white font-mono text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="font-mono text-sm text-white/70">
                <div>Students: {project.students}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6 flex justify-between items-center border-t border-white/10 mt-20">
        <div className="font-mono">BASED IN LPU, JALANDHAR</div>
        <div className="font-mono">//DIGITAL DESIGNER + FRAMER DEVELOPER</div>
      </footer>
    </div>
  )
} 

