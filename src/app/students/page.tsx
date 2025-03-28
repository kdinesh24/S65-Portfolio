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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

// Sample student data - would come from API/database in real app
const studentsData = [
  {
    id: 1,
    name: "Aisha Patel",
    course: "Computer Science",
    year: 3,
    skills: ["React", "Node.js", "UI/UX"],
    projects: 2,
    avatar: ""
  },
  {
    id: 2,
    name: "Dev Sharma",
    course: "AI & Machine Learning",
    year: 4,
    skills: ["Python", "TensorFlow", "Data Analysis"],
    projects: 3,
    avatar: ""
  },
  {
    id: 3,
    name: "Priya Singh",
    course: "Information Technology",
    year: 2,
    skills: ["JavaScript", "React", "Firebase"],
    projects: 1,
    avatar: ""
  },
  {
    id: 4,
    name: "Raj Kumar",
    course: "Software Engineering",
    year: 3,
    skills: ["Java", "Spring Boot", "MySQL"],
    projects: 2,
    avatar: ""
  },
  {
    id: 5,
    name: "Ananya Gupta",
    course: "Data Science",
    year: 4,
    skills: ["Python", "R", "Tableau"],
    projects: 4,
    avatar: ""
  },
  {
    id: 6,
    name: "Vikram Reddy",
    course: "Cybersecurity",
    year: 3,
    skills: ["Network Security", "Ethical Hacking", "Cryptography"],
    projects: 2,
    avatar: ""
  },
]

export default function StudentsPage() {
  const [currentTime, setCurrentTime] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [animationTriggered, setAnimationTriggered] = useState(false)
  const [activeView, setActiveView] = useState("grid")

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

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
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
          <span className="font-mono text-lg tracking-wider">MEET OUR TALENTED</span>
        </div>

        <div className="text-center mb-16">
          <h1
            className={cn(
              "font-mono text-7xl font-bold tracking-tighter transform translate-y-full transition-transform duration-1000",
              animationTriggered && "translate-y-0",
            )}
          >
            STUDENTS•DIRECTORY
          </h1>
        </div>

        {/* Search and view options */}
        <div className="mb-10 max-w-md mx-auto">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
            <Input 
              type="text" 
              placeholder="Search by name, course, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/5 border-white/10 text-white pl-10 font-mono"
            />
          </div>
          
          <Tabs defaultValue="grid" className="w-full" onValueChange={setActiveView}>
            <TabsList className="grid w-full grid-cols-2 bg-white/5">
              <TabsTrigger value="grid" className="font-mono">GRID VIEW</TabsTrigger>
              <TabsTrigger value="list" className="font-mono">LIST VIEW</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Students display */}
        {activeView === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredStudents.map(student => (
              <Card key={student.id} className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Avatar className="h-12 w-12 border border-white/20">
                    <AvatarFallback className="bg-white/10 text-white font-mono">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="font-mono text-lg">{student.name}</CardTitle>
                    <CardDescription className="text-white/70 font-mono">
                      {student.course}, Year {student.year}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {student.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-white/10 text-white font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="font-mono text-sm text-white/70">Projects: {student.projects}</span>
                  <Button variant="ghost" className="font-mono text-xs text-white/80 hover:text-white">VIEW PROFILE</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredStudents.map(student => (
              <div key={student.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-md hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 border border-white/20">
                    <AvatarFallback className="bg-white/10 text-white font-mono">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-mono text-md">{student.name}</h3>
                    <p className="text-white/70 font-mono text-sm">{student.course}, Year {student.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="hidden md:flex gap-2">
                    {student.skills.slice(0, 2).map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-white/10 text-white font-mono text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {student.skills.length > 2 && (
                      <Badge variant="secondary" className="bg-white/10 text-white font-mono text-xs">
                        +{student.skills.length - 2}
                      </Badge>
                    )}
                  </div>
                  <span className="font-mono text-sm text-white/70 mr-4">Projects: {student.projects}</span>
                  <Button variant="ghost" size="sm" className="font-mono text-xs">VIEW</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="p-6 flex justify-between items-center border-t border-white/10 mt-20">
        <div className="font-mono">BASED IN LPU, JALANDHAR</div>
        <div className="font-mono">//DIGITAL DESIGNER + FRAMER DEVELOPER</div>
      </footer>
    </div>
  )
} 