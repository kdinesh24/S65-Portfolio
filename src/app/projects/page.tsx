"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
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

// Sample project data - would come from API/database in real app
const projectsData = [
    {
        id: 1,
        title: "AI Content Generator",
        description:
            "A machine learning tool that creates personalized content based on user preferences.",
        tech: ["React", "Python", "TensorFlow"],
    },
    {
        id: 2,
        title: "Blockchain Voting System",
        description:
            "Secure and transparent voting platform built on blockchain technology.",
        tech: ["Solidity", "Ethereum", "Next.js"],
    },
    {
        id: 3,
        title: "AR Campus Tour",
        description:
            "Augmented reality application for virtual campus exploration.",
        tech: ["Unity", "ARKit", "C#"],
    },
    {
        id: 4,
        title: "Smart Health Monitor",
        description:
            "IoT-based health monitoring system with real-time analytics.",
        tech: ["Node.js", "MongoDB", "Arduino"],
    },
];

export default function ProjectsPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [animationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        // Update time every second
        const updateTime = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, "0");
            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            setCurrentTime(`${hours}:${minutes}:${seconds}`);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        // Trigger animation after component mounts
        setTimeout(() => {
            setAnimationTriggered(true);
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const filteredProjects = projectsData.filter(
        (project) =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            project.tech.some((tech) =>
                tech.toLowerCase().includes(searchTerm.toLowerCase())
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
                        INNOVATION IN ACTION
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        PROJECTS-SHOWCASE
                    </h1>
                </div>

                {/* Search and filter */}
                <div className="mb-10 max-w-md mx-auto">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Search projects..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono"
                        />
                    </div>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors"
                        >
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <CardTitle className="font-mono text-xl">
                                        {project.title}
                                    </CardTitle>
                                </div>
                                <CardDescription className="text-white/70 font-mono">
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.tech.map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-white/10 text-white font-mono text-xs"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
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
