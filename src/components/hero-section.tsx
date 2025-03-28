"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function LandingPage() {
    const [currentTime, setCurrentTime] = useState("");
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

    return (
        <div className="relative w-full h-screen bg-black text-white overflow-hidden">
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
                    <Link href="/projects">
                        <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">
                            PROJECTS
                        </button>
                    </Link>
                    <Link href="/students">
                        <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">
                            STUDENTS
                        </button>
                    </Link>
                    <Link href="/mentors">
                        <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white/10 transition-colors">
                            MENTORS
                        </button>
                    </Link>
                </div>
            </header>

            <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="font-mono text-lg tracking-wider">
                        ENGAGE YOUR SENSES WITH
                    </span>
                </div>

                <div className="text-center">
                    <h1 className="font-mono text-9xl font-bold tracking-tighter mb-8">
                        SQUAD-65
                    </h1>
                    <p className="font-mono text-lg mt-2">
                        CRAFTED TO PROVE WE KNOW WHAT WE'RE DOING. A LITTLE FLEX{" "}
                        <br />
                        ON DESIGN, A LOT OF SKILL IN EXECUTION.
                    </p>
                </div>
            </main>

            <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
                <div className="font-mono">BASED IN LPU, JALANDHAR</div>
                <div className="font-mono">
                    //DIGITAL DESIGNER + FRAMER DEVELOPER
                </div>
            </footer>
        </div>
    );
}
