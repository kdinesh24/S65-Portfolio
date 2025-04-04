"use client";

import { useState, useEffect } from "react";
import { Search, Github, ExternalLink } from "lucide-react";
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
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Shoe E-Commerce Platform",
        description:
            "Sleek, interactive e-commerce platform selling Nike shoes with immersive animations, dynamic product visualization, and cutting-edge digital shopping experience.",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        github: "https://github.com/vereoman/ecommerce-follow-along",
        website: "https://ecommerce-client-mauve.vercel.app",
    },
    {
        id: 2,
        title: "Slowest Cafe Wi-Fi",
        description:
            "Discover cafés with slow Wi-Fi! Our site tests and ranks local spots, helping you find the best places for reliable internet or avoid sluggish connections during visits.",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        github: "https://github.com/kalviumcommunity/S65_Slowest_Cafe_Wi-Fi",
        website: "https://s65-slowest-cafe-wi-fi.vercel.app",
    },
    {
        id: 3,
        title: "PawPlay Video Platform",
        description:
            "PawPay lets users upload, share, and comment on hilarious animal videos. Connect with pet lovers and spread joy through amusing clips of furry companions worldwide!",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        github: "https://github.com/kalviumcommunity/S65_The_Funniest_Animal_Videos.git",
        website: "https://pawplay-dinesh1124k-gmailcoms-projects.vercel.app",
    },
    {
        id: 4,
        title: "Recursive Portfolio",
        description:
            "Showcasing Kalvium Squad 65's talent! Explore impressive projects, connect with skilled developers, and witness the innovation born from this dynamic cohort.",
        tech: ["Next.js", "TailwindCSS", "Shadcn-UI", "TypeScript"],
        github: "https://github.com/kdinesh24/S65-Portfolio",
        website: "https://s65-portfolio.vercel.app/",
    },
    {
        id: 5,
        title: "Rant+ Online Chat App",
        description:
            "Chat instantly with friends and groups. Fast, secure, and simple real-time messaging with media sharing, emojis, and notifications—all in one easy-to-use, modern chat app.",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        github: "https://github.com/mohan-bee/Rant-plus",
        website: "https://rant-plus.onrender.com",
    },
    {
        id: 6,
        title: "Fashion E-Commerce Platform",
        description:
            "Chat instantly with friends and groups. Fast, secure, and simple real-time messaging with media sharing, emojis, and notifications—all in one easy-to-use, modern chat app.",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        github: "https://github.com/kdinesh24/Ecommerce-Follow-Along.git",
        website:
            "https://frontend-e-commerce-nine.vercel.app",
    },
];

export default function ProjectsPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

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
            setIsLoaded(true);
        }, 300);

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
                        INNOVATION IN ACTION
                    </span>
                </motion.div>

                <motion.div
                    className="text-center mb-16"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        OUR-PROJECTS
                    </h1>
                </motion.div>

                <motion.div
                    className="mb-10 max-w-md mx-auto"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors h-[320px] flex flex-col">
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="font-mono text-xl mb-2">
                                            {project.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-white/70 font-mono text-sm mt-4">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map((tech) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="bg-white/10 text-white hover:bg-white hover:text-black font-mono text-xs"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
                                    <div></div>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <Button
                                                variant="ghost"
                                                className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                                onClick={() =>
                                                    window.open(
                                                        project.github,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <Github className="h-3 w-3 mr-1" />{" "}
                                                VIEW PROJECT
                                            </Button>
                                        )}
                                        {project.website && (
                                            <Button
                                                variant="ghost"
                                                className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                                onClick={() =>
                                                    window.open(
                                                        project.website,
                                                        "_blank"
                                                    )
                                                }
                                            >
                                                <ExternalLink className="h-3 w-3 mr-1" />{" "}
                                                VISIT SITE
                                            </Button>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                    {filteredProjects.length === 0 && searchTerm && (
                        <motion.div
                            className="md:col-span-2 text-center py-10"
                            variants={fadeIn}
                        >
                            <p className="font-mono text-white/70">
                                No projects found matching &quot;{searchTerm}
                                &quot;.
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
                        @KDINESH24
                    </a>
                </div>
            </motion.footer>
        </div>
    );
}
