"use client";

import { useState, useEffect } from "react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Github, Linkedin } from "lucide-react";

const studentsData = [
    {
        id: 1,
        name: "ABHINAV RAHUL",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 2,
        name: "AKSHIT SHARMA",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 3,
        name: "ANKIT KUMAR",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 4,
        name: "ARMAN KAR",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 5,
        name: "CHAITANYA PAWAR",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 6,
        name: "GOURISH CHOUHAN",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 7,
        name: "GR MONISH",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 8,
        name: "HIMANSHU GUPTA",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 9,
        name: "HRITHIK VASANTHRAM",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 10,
        name: "K DINESH",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 11,
        name: "KISHORE J",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 12,
        name: "MANTENA NAGA SAI NITIN VARMA",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 13,
        name: "MOHANRAJ A",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 14,
        name: "NAVANEETH M",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 15,
        name: "NIKHIL PAGADALA",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 16,
        name: "NISHAT AYUB",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 17,
        name: "P PURUSHOTTAM NAIDU",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 18,
        name: "ROHIT KUMAR",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 19,
        name: "ROHITRAJ K.A",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 20,
        name: "SAJIN SAJI GEORGE",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 21,
        name: "SANJEEV M.S",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 22,
        name: "SHUBH NAWANI",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
    },
    {
        id: 23,
        name: "SUJAL BHATT",
        skills: [],
        avatar: "",
        github: "",
        linkedin: "",
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
            student.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-1 z-10"
                style={{
                    background:
                        "linear-gradient(90deg, #f87171, #a855f7, #3b82f6, #a855f7, #f87171)",
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
                        MEET OUR TALENTED
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        OUR-STUDENTS
                    </h1>
                </div>

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredStudents.map((student) => (
                        <Card
                            key={student.id}
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors overflow-hidden relative flex flex-col justify-between h-[300px]"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-10 w-10 border border-white/20">
                                    <AvatarFallback className="bg-white/10 text-white font-mono text-sm">
                                        {student.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="font-mono text-base">
                                        {student.name}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {student.skills.map(
                                        (skill, index) =>
                                            index < 4 && (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="bg-white/10 text-white hover:bg-white hover:text-black font-mono text-xs"
                                                >
                                                    {skill}
                                                </Badge>
                                            )
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
                                <div></div>
                                <div className="flex gap-3">
                                    <Button
                                        variant="ghost"
                                        className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                        onClick={() =>
                                            window.open(
                                                student.linkedin,
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
                                            window.open(
                                                student.github,
                                                "_blank"
                                            )
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
