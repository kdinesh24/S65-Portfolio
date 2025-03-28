"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Search, Filter } from "lucide-react";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const studentsData = [
    {
        id: 1,
        name: "Aisha Patel",
        course: "Computer Science",
        year: 3,
        skills: ["React", "Node.js", "UI/UX"],
        projects: 2,
        avatar: "",
    },
    {
        id: 2,
        name: "Dev Sharma",
        course: "AI & Machine Learning",
        year: 4,
        skills: ["Python", "TensorFlow", "Data Analysis"],
        projects: 3,
        avatar: "",
    },
    {
        id: 3,
        name: "Priya Singh",
        course: "Information Technology",
        year: 2,
        skills: ["JavaScript", "React", "Firebase"],
        projects: 1,
        avatar: "",
    },
    {
        id: 4,
        name: "Raj Kumar",
        course: "Software Engineering",
        year: 3,
        skills: ["Java", "Spring Boot", "MySQL"],
        projects: 2,
        avatar: "",
    },
    {
        id: 5,
        name: "Ananya Gupta",
        course: "Data Science",
        year: 4,
        skills: ["Python", "R", "Tableau"],
        projects: 4,
        avatar: "",
    },
    {
        id: 6,
        name: "Vikram Reddy",
        course: "Cybersecurity",
        year: 3,
        skills: ["Network Security", "Ethical Hacking", "Cryptography"],
        projects: 2,
        avatar: "",
    },
];

export default function StudentsPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        setTimeout(() => {
            setAnimationTriggered(true);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const filteredStudents = studentsData.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
            {/* Animated gradient line */}
            <div
                className="absolute top-0 left-0 w-full h-1 z-10"
                style={{
                    background:
                        "linear-gradient(90deg, #f87171, #a855f7, #3b82f6, #a855f7, #f87171)",
                    backgroundSize: "200% 100%",
                    animation: "gradientMove 8s linear infinite",
                }}
            />

            {/* Add this style block for the animation */}
            <style jsx>{`
                @keyframes gradientMove {
                    0% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 200% 50%;
                    }
                }
            `}</style>

            {/* Header */}
            <header className="flex justify-between items-center p-6">
                <div className="flex items-center space-x-4">
                    <span className="font-mono text-lg">
                        LOCAL - {currentTime}
                    </span>
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
                    <span className="font-mono text-lg tracking-wider">
                        MEET OUR TALENTED
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        STUDENTS-ROSTER
                    </h1>
                </div>

                {/* Search - removed view options */}
                <div className="mb-10 max-w-md mx-auto">
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Search students..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono"
                        />
                    </div>

                    {/* Removed Tabs component */}
                </div>

                {/* Students display - only grid view now */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredStudents.map((student) => (
                        <Card
                            key={student.id}
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors overflow-hidden relative"
                        >
                            {/* Removed gradient line from individual cards */}

                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-12 w-12 border border-white/20">
                                    <AvatarFallback className="bg-white/10 text-white font-mono">
                                        {student.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="font-mono text-lg">
                                        {student.name}
                                    </CardTitle>
                                    <CardDescription className="text-white/70 font-mono">
                                        {student.course}, Year {student.year}
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {student.skills.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="bg-white/10 text-white font-mono text-xs"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <span className="font-mono text-sm text-white/70">
                                    Projects: {student.projects}
                                </span>
                                <Button
                                    variant="ghost"
                                    className="font-mono text-xs text-white/80 hover:text-white"
                                >
                                    VIEW PROFILE
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="p-6 flex justify-between items-center border-t border-white/10 mt-20">
                <div className="font-mono">BASED IN LPU, JALANDHAR</div>
                <div className="font-mono">
                    //DIGITAL DESIGNER + FRAMER DEVELOPER
                </div>
            </footer>
        </div>
    );
}
