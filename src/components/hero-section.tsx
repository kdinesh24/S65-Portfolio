"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [showContent, setShowContent] = useState(false);

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
            setShowContent(true);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen bg-transparent text-white overflow-hidden">
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

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                .fade-in {
                    opacity: 0;
                    animation: fadeIn 1s ease-out forwards;
                }
            `}</style>

            <motion.header
                className="flex justify-between items-center p-6 relative z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <span className="font-mono text-lg">
                        LOCAL - <strong>{currentTime}</strong>
                    </span>
                </motion.div>

                <motion.div
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Link href="/projects">
                        <motion.button
                            className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showContent ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            PROJECTS
                        </motion.button>
                    </Link>
                    <Link href="/students">
                        <motion.button
                            className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showContent ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            STUDENTS
                        </motion.button>
                    </Link>
                    <Link href="/mentors">
                        <motion.button
                            className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: showContent ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            MENTORS
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.header>

            <motion.main
                className="relative flex flex-col items-center justify-center h-[calc(100vh-200px)] z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: showContent ? 1 : 0 }}
                transition={{ duration: 1 }}
            >
                <div className="flex items-center justify-center mb-8">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="font-mono text-lg tracking-wider">
                        ENGAGE YOUR SENSES WITH
                    </span>
                </div>

                <div className="relative z-10 text-center">
                    <div className="font-mono text-9xl font-bold tracking-tighter mb-8 whitespace-nowrap">
                        <span>KALVIUM-SQUAD-</span>
                        <span>65</span>
                    </div>
                    <p className="font-mono text-lg mt-2">
                        CRAFTED TO PROVE WE KNOW WHAT WE&apos;RE DOING. A LITTLE
                        FLEX <br />
                        ON DESIGN, A LOT OF SKILL IN EXECUTION.
                    </p>
                </div>
            </motion.main>
        </div>
    );
}
