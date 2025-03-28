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

const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
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
        github: "",
        website: "",
    },
    {
        id: 4,
        title: "Rant+ Online Chat App",
        description:
            "Chat instantly with friends and groups. Fast, secure, and simple real-time messaging with media sharing, emojis, and notifications—all in one easy-to-use, modern chat app.",
        tech: ["React", "TailwindCSS", "Node.js", "MongoDB"],
        github: "https://github.com/mohan-bee/Rant-plus",
        website: "https://rant-plus.onrender.com",
    },
];

export default function ProjectsPage() {
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
                        LOCAL - {currentTime}
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">
                            ← BACK TO HOME
                        </button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-2">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="font-mono text-lg tracking-wider">
                        INNOVATION IN ACTION
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        THE-PROJECTS
                    </h1>
                </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredProjects.map((project) => (
                        <Card
                            key={project.id}
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors h-[320px] flex flex-col"
                        >
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
                                        <Github className="h-3 w-3 mr-1" /> VIEW
                                        PROJECT
                                    </Button>
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
