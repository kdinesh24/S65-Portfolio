"use client";

import { useEffect, useRef, useState } from "react";
import { StarsBackground } from "./ui/stars-background"; // Assuming these exist
import { ShootingStars } from "./ui/shooting-stars"; // Assuming these exist

interface Testimonial {
    id: string;
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        id: "t1",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.", // Kept original
        author: "ABHINAV RAHUL",
    },
    {
        id: "t2",
        quote: "Blending Python's power with C++ efficiency, and building dynamic web experiences with React and Node.", // Added
        author: "AKSHIT SHARMA",
    },
    {
        id: "t3",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.", // Kept original
        author: "ANKIT KUMAR",
    },
    {
        id: "t4",
        quote: "Crafting robust full-stack solutions with Next.js and TypeScript, backed by Python and SQL.", // Added
        author: "ARMAN KAR",
    },
    {
        id: "t5",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.", // Kept original
        author: "CHAITANYA PAWAR",
    },
    {
        id: "t6",
        quote: "Driven by curiosity, I'm constantly exploring new technologies and seeking opportunities to innovate.", // Added
        author: "GOURISH CHOUHAN",
    },
    {
        id: "t7",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.", // Kept original
        author: "GR MONISH",
    },
    {
        id: "t8",
        quote: "Learning by building. Every line of code on GitHub is a step forward in my tech journey.", // Added
        author: "HIMANSHU GUPTA",
    },
    {
        id: "t9",
        quote: "Passionate about understanding how technology shapes our world and eager to contribute.", // Added
        author: "HRITHIK VASANTHRAM",
    },
    {
        id: "t10",
        quote: "Building seamless full-stack applications is my passion, leveraging Python, Next.js, and TypeScript.", // Added
        author: "K DINESH",
    },
    {
        id: "t11",
        quote: "Always eager to learn, adapt, and apply new technological concepts to solve problems.", // Added
        author: "KISHORE J",
    },
    {
        id: "t12",
        quote: "From system-level C++ to dynamic web apps with React/Node, I embrace diverse coding challenges.", // Added
        author: "MANTENA NAGA SAI NITIN VARMA",
    },
    {
        id: "t13",
        quote: "Combining strong fundamentals in Python/C++ with modern web tech like React and Node.", // Added
        author: "MOHANRAJ A",
    },
    {
        id: "t14",
        quote: "My focus lies in leveraging Python/C++ alongside creating engaging frontends with React/JS.", // Added
        author: "NAVANEETH M",
    },
    {
        id: "t15",
        quote: "Dedicated to creating intuitive and visually appealing user interfaces with React and modern web standards.", // Added
        author: "NIKHIL PAGADALA",
    },
    {
        id: "t16",
        quote: "Exploring the breadth of programming with Python, C++, Java, and React to build versatile solutions.", // Added
        author: "NISHAT AYUB",
    },
    {
        id: "t17",
        quote: "Mastering the MERN stack to deliver end-to-end web applications with efficiency and scalability.", // Added
        author: "P PURUSHOTTAM NAIDU",
    },
    {
        id: "t18",
        quote: "Building a solid foundation in web development, focusing on Python and core frontend technologies.", // Added
        author: "ROHIT KUMAR",
    },
    {
        id: "t19",
        quote: "Proficient across multiple languages like Python, C++, Java, and applying them to React development.", // Added
        author: "ROHITRAJ K.A",
    },
    {
        id: "t20",
        quote: "Bridging the gap between powerful backend languages like C++/Python and interactive React frontends.", // Added
        author: "SAJIN SAJI GEORGE",
    },
    {
        id: "t21",
        quote: "Engaging with the tech community and continuously learning is key to my growth as a developer.", // Added
        author: "SANJEEV M.S",
    },
    {
        id: "t22",
        quote: "Developing full-stack solutions with a blend of Python, Java, React, and Node.js expertise.", // Added
        author: "SHUBH NAWANI",
    },
    {
        id: "t23",
        quote: "Specializing in backend development using Python and the robust Node.js ecosystem (Express, MongoDB).", // Added
        author: "SUJAL BHATT",
    },
];


export default function TestimonialCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Calculate total width for seamless scrolling
    const itemWidth = 400; // Corresponds to min/max-width of TestimonialCard
    const gap = 24; // Corresponds to gap-6 (6 * 4px)
    const totalWidth = (itemWidth + gap) * testimonials.length;

    return (
        <div className="relative bg-black text-white font-mono py-32 overflow-hidden">
            {/* Stars background and shooting stars */}
            <StarsBackground starDensity={0.0002} />
            <ShootingStars />
            
            <div className="relative">
                {/* Apply mask for fading edges */}
                <div 
                    className="overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    }}
                >
                    {isClient && (
                        <div
                            ref={scrollRef}
                            className="flex gap-6 items-stretch" // items-stretch ensures cards take full height
                            style={{
                                // Duplicate the content for seamless looping
                                width: `${totalWidth * 2}px`, 
                                // Animation definition
                                animation: `scroll ${testimonials.length * 5}s linear infinite`, 
                            }}
                        >
                            {/* Render testimonials twice for seamless loop */}
                            {[...testimonials, ...testimonials].map((item, index) => (
                                <TestimonialCard
                                    // Ensure unique keys even for duplicates
                                    key={`${item.id}-${index}`} 
                                    testimonial={item}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
            
            {/* Add the keyframes CSS */}
            <style jsx global>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-${totalWidth}px); } 
                }
                .animate-scroll {
                    /* This class is now just a marker, animation is applied via style */
                }
            `}</style>

            <footer className="relative z-10 p-6 flex flex-col justify-center items-center border-t border-white/10 mt-20">
                <div className="font-mono text-center mb-2">BASED IN LPU, JALANDHAR</div>
                <div className="font-mono text-center">
                    DESIGNED AND DEVELOPED BY{" "}
                    <a href="https://github.com/vereoman" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-400">@VEREOMAN</a>
                    {" "}/{" "}
                    <a href="https://github.com/kdinesh24" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-400">@KDINESH24</a>
                </div>
            </footer>
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        // Removed outer div, applied styles directly here
        <div className="bg-black/60 backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-[400px] flex flex-col relative flex-shrink-0"> 
            <div className="text-white font-mono text-base mb-6 flex-grow min-h-[100px]"> {/* Added min-height */}
                "{testimonial.quote || "Passionate student exploring the world of technology."}" {/* Added default quote */}
            </div>

            <div className="flex items-center mt-auto"> {/* Use mt-auto to push author to bottom */}
                <div>
                    <div className="text-white font-mono font-semibold">
                        {testimonial.author}
                    </div>
                </div>
            </div>
        </div>
    );
}