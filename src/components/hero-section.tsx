"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

declare global {
    interface Window {
        VANTA?: any;
        vantaEffect?: any;
    }
}

export default function LandingPage() {
    const [currentTime, setCurrentTime] = useState("");
    const heroRef = useRef(null);

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

        const timer = setTimeout(() => {
            if (heroRef.current && window.VANTA && !window.vantaEffect) {
                window.vantaEffect = window.VANTA.CLOUDS({
                    el: heroRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    skyColor: 0x0,
                    cloudColor: 0x0,
                    cloudShadowColor: 0x0,
                    sunColor: 0x0,
                    sunGlareColor: 0x818181,
                    sunlightColor: 0xffffff,
                    speed: 1.4,
                });
            }
        }, 100);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            if (window.vantaEffect) {
                window.vantaEffect.destroy();
            }
        };
    }, []);

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
                strategy="beforeInteractive"
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"
                strategy="beforeInteractive"
            />

            {/* Hero Section Container */}
            <div
                ref={heroRef}
                id="your-element-selector"
                className="relative w-full h-screen bg-black text-white overflow-hidden"
            >
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

                {/* Main Content */}
                <main className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                        <span className="font-mono text-lg tracking-wider">
                            ENGAGE YOUR SENSES WITH
                        </span>
                    </div>
                    <div className="text-center">
                        <h1 className="font-mono text-9xl font-bold tracking-tighter mb-4">
                            KALVIUM-SQUAD-65
                        </h1>
                    </div>
                </main>

                {/* Footer */}
                <footer className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-center">
                    <div className="font-mono">BASED IN LPU, JALANDHAR</div>
                    <div className="font-mono">
                        //DIGITAL DESIGNER + FRAMER DEVELOPER
                    </div>
                </footer>
            </div>
        </>
    );
}
