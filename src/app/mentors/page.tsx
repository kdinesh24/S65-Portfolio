"use client";

import { useState, useEffect } from "react";
import { Search, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

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
        description:
            "Program Manager specializing in team leadership, creative solutions, and effective project communication.",
    },
    {
        id: 2,
        name: "Shashwat Mahendra",
        title: "Technical Mentor",
        expertise: ["Web Development", "Prompt Engineering", "Data Structures"],
        experience: "8+ years",
        projects: "100+",
        avatar: "/images/shashwat.jpg",
        linkedin: "https://www.linkedin.com/in/shashwat-mahendra-214598163",
        github: "https://github.com/Shashwat2104",
        description:
            "Seasoned technical mentor with expertise in full-stack development, prompt engineering, and data structures.",
    },
];

export default function MentorsPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            try {
                setCurrentTime(
                    new Intl.DateTimeFormat("en-GB", {
                        timeZone: "Asia/Kolkata",
                        hour12: false,
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                    }).format(now)
                );
            } catch (e) {
                const hours = String(now.getHours()).padStart(2, "0");
                const minutes = String(now.getMinutes()).padStart(2, "0");
                const seconds = String(now.getSeconds()).padStart(2, "0");
                setCurrentTime(`${hours}:${minutes}:${seconds} (Local)`);
                console.error("Intl formatting failed, using local time:", e);
            }
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        setTimeout(() => {
            setIsLoaded(true);
        }, 300);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const filteredMentors = mentorsData.filter(
        (mentor) =>
            mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            mentor.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden">
            {" "}
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
            <motion.header
                className="flex justify-between items-center p-6"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
            >
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
            </motion.header>
            <motion.main
                className="container mx-auto px-6 py-2"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    className="flex items-center justify-center mb-8"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-mono text-lg tracking-wider">
                        LEARN FROM THE BEST
                    </span>
                </motion.div>

                <motion.div
                    className="text-center mb-16"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        OUR-MENTORS
                    </h1>
                </motion.div>

                <motion.div
                    className="mb-10 flex justify-center"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono rounded-md focus:ring-1 focus:ring-red-400 focus:border-red-400"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    {filteredMentors.map((mentor) => (
                        <motion.div
                            key={mentor.id}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                        >
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Card
                                        className="relative bg-white/5 border border-white/10 text-white hover:border-white/30 hover:bg-white/10 transition-all duration-300 ease-in-out overflow-hidden cursor-pointer group" // group class remains in case needed elsewhere
                                    >
                                        <CardHeader className="pt-6">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center gap-4">
                                                    <Avatar className="h-16 w-16 border-2 border-white/20 group-hover:border-white/40 transition-colors">
                                                        <AvatarImage
                                                            src={mentor.avatar}
                                                            alt={mentor.name}
                                                        />
                                                        <AvatarFallback className="bg-white/10 text-white font-mono text-lg">
                                                            {
                                                                mentor.name.split(
                                                                    " "
                                                                )[0][0]
                                                            }
                                                            {mentor.name.split(
                                                                " "
                                                            ).length > 1
                                                                ? mentor.name.split(
                                                                      " "
                                                                  )[1][0]
                                                                : ""}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <CardTitle className="font-mono text-xl transition-colors">
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
                                                    {mentor.expertise.map(
                                                        (skill) => (
                                                            <Badge
                                                                key={skill}
                                                                variant="secondary"
                                                                className="bg-white/10 text-white hover:bg-white hover:text-black font-mono text-xs transition-colors"
                                                            >
                                                                {skill}
                                                            </Badge>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4 pt-2">
                                                <div className="bg-white/5 p-3 rounded-md border border-white/10">
                                                    <p className="font-mono text-xs text-white/60">
                                                        EXPERIENCE
                                                    </p>
                                                    <p className="font-mono text-lg">
                                                        {mentor.experience}
                                                    </p>
                                                </div>
                                                <div className="bg-white/5 p-3 rounded-md border border-white/10">
                                                    <p className="font-mono text-xs text-white/60">
                                                        PROJECTS
                                                    </p>
                                                    <p className="font-mono text-lg">
                                                        {mentor.projects}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-end border-t border-white/10 pt-4 pb-4">
                                            <div className="flex space-x-3">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="font-mono text-xs text-white/80 hover:text-black border border-white/20 hover:bg-white transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(
                                                            mentor.linkedin,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label={`Connect with ${mentor.name} on LinkedIn`}
                                                >
                                                    <Linkedin className="h-3 w-3 mr-1" />
                                                    CONNECT
                                                </Button>

                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="font-mono text-xs text-white/80 hover:text-black border border-white/20 hover:bg-white transition-colors"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(
                                                            mentor.github,
                                                            "_blank"
                                                        );
                                                    }}
                                                    aria-label={`View ${mentor.name}'s GitHub profile`}
                                                >
                                                    <Github className="h-3 w-3 mr-1" />
                                                    PROFILE
                                                </Button>
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </HoverCardTrigger>

                                <HoverCardContent className="w-96 bg-black border border-white/20 text-white p-4 rounded-lg shadow-xl">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-40 h-40 rounded-md object-cover flex-shrink-0 relative">
                                             <Image
                                                src={mentor.avatar}
                                                alt={`Mentor ${mentor.name}`}
                                                fill
                                                sizes="10rem"
                                                className="rounded-md object-cover"
                                             />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            {mentor.description ? (
                                                <p className="text-sm text-white/80 font-mono">
                                                    {mentor.description}
                                                </p>
                                            ) : (
                                                <p className="text-sm text-white/60 font-mono italic">
                                                    No description available.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </motion.div>
                    ))}
                    {filteredMentors.length === 0 && searchTerm && (
                        <motion.div
                            className="md:col-span-2 text-center py-10"
                            variants={fadeIn}
                        >
                            <p className="font-mono text-white/70">
                                No mentors found matching &quot;{searchTerm}&quot;.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.main>
            <motion.footer
                className="p-6 flex flex-col justify-center items-center border-t border-white/10 mt-20"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <div className="font-mono text-center mb-2">
                    BASED IN LPU, JALANDHAR
                </div>
                <div className="font-mono text-center">
                    DESIGNED AND DEVELOPED BY{" "}
                    <a
                        href="https://github.com/vereoman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-400"
                    >
                        @VEREOMAN
                    </a>{" "}
                    /{" "}
                    <a
                        href="https://github.com/kdinesh24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-400"
                    >
                        @KDINESH
                    </a>
                </div>
            </motion.footer>
        </div>
    );
}
