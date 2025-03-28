"use client";

import { useState, useEffect } from "react";
import { Search, Linkedin, Github } from "lucide-react";
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const mentorsData = [
    {
        id: 1,
        name: "Riza Yeasmin",
        title: "Program Manager",
        expertise: ["Creative Thinking", "Communication", "Management Skills"],
        experience: "1+ years",
        projects: "2",
        avatar: "/images/riza.jpg",
        linkedin: "https://www.linkedin.com/in/rizayeasmin",
        github: "https://github.com/codewithriza",
    },
    {
        id: 2,
        name: "Shashwat Mahendra",
        title: "Technical Mentor",
        expertise: ["Web Deveeopment", "Prompt Engineering", "Data Structures"],
        experience: "12+ years",
        projects: "100+",
        avatar: "/images/shashwat.jpg",
        linkedin: "https://www.linkedin.com/in/shashwat-mahendra-214598163",
        github: "https://github.com/Shashwat2104",
    },
];

export default function MentorsPage() {
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

    const filteredMentors = mentorsData.filter(
        (mentor) =>
            mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-1 z-10"
                style={{
                    background:
                        "linear-gradient(90deg, #1c1c1c, #4d4d4d, #7f7f7f, #4d4d4d, #1c1c1c)",
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
            `}</style>

            <header className="flex justify-between items-center p-6">
                <div className="flex items-center space-x-4">
                    <span className="font-mono text-lg">
                        LOCAL - <strong>{currentTime}</strong>
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
                            ← BACK TO HOME
                        </button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-2">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="font-mono text-lg tracking-wider">
                        LEARN FROM THE BEST
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        OUR-MENTORS
                    </h1>
                </div>

                <div className="mb-10 flex justify-center">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Search mentors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredMentors.map((mentor) => (
                        <Card
                            key={mentor.id}
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-purple-600"></div>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-16 w-16 border border-white/20">
                                            <AvatarImage
                                                src={mentor.avatar}
                                                alt={mentor.name}
                                            />
                                            <AvatarFallback className="bg-white/10 text-white font-mono text-lg">
                                                {mentor.name.split(" ")[0][0]}
                                                {mentor.name.split(" ")[1][0]}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <CardTitle className="font-mono text-xl">
                                                {mentor.name}
                                            </CardTitle>
                                            <CardDescription className="text-white/70 font-mono">
                                                {mentor.title}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <div className="flex flex-wrap gap-2">
                                        {mentor.expertise.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="bg-white/10 text-white hover:bg-white hover:text-black font-mono text-xs"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div className="bg-white/5 p-3 rounded-md">
                                        <p className="font-mono text-xs text-white/60">
                                            EXPERIENCE
                                        </p>
                                        <p className="font-mono text-lg">
                                            {mentor.experience}
                                        </p>
                                    </div>
                                    <div className="bg-white/5 p-3 rounded-md">
                                        <p className="font-mono text-xs text-white/60">
                                            PROJECTS
                                        </p>
                                        <p className="font-mono text-lg">
                                            {mentor.projects}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end border-t border-white/10 pt-4">
                                <div className="flex space-x-3">
                                    <Button
                                        variant="ghost"
                                        className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                        onClick={() =>
                                            window.open(
                                                mentor.linkedin,
                                                "_blank"
                                            )
                                        }
                                    >
                                        <Linkedin className="h-3 w-3 mr-1" />
                                        CONNECT
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                        onClick={() =>
                                            window.open(mentor.github, "_blank")
                                        }
                                    >
                                        <Github className="h-3 w-3 mr-1" />
                                        PROFILE
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </main>

            <footer className="p-6 flex justify-between items-center border-t border-white/10 mt-20">
                <div className="font-mono">BASED IN LPU, JALANDHAR</div>
                <div className="font-mono">
                    //DIGITAL DESIGNER + FRAMER DEVELOPER
                </div>
            </footer>
        </div>
    );
}
