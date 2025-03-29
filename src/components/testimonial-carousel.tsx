"use client";

import { useEffect, useRef, useState } from "react";
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";

interface Testimonial {
    id: string;
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        id: "t1",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.",
        author: "ABHINAV RAHUL",
    },
    {
        id: "t2",
        quote: "",
        author: "AKSHIT SHARMA",
    },
    {
        id: "t3",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.",
        author: "ANKIT KUMAR",
    },
    {
        id: "t4",
        quote: "",
        author: "ARMAN KAR",
    },
    {
        id: "t5",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.",
        author: "CHAITANYA PAWAR",
    },
    {
        id: "t6",
        quote: "",
        author: "GOURISH CHOUHAN",
    },
    {
        id: "t7",
        quote: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled.",
        author: "GR MONISH",
    },
    {
        id: "t8",
        quote: "",
        author: "HIMANSHU GUPTA",
    },
    {
        id: "t9",
        quote: "",
        author: "HRITHIK VASANTHRAM",
    },
    {
        id: "t10",
        quote: "",
        author: "K DINESH",
    },
    {
        id: "t11",
        quote: "",
        author: "KISHORE J",
    },
    {
        id: "t12",
        quote: "",
        author: "MANTENA NAGA SAI NITIN VARMA",
    },
    {
        id: "t13",
        quote: "",
        author: "MOHANRAJ A",
    },
    {
        id: "t14",
        quote: "",
        author: "NAVANEETH M",
    },
    {
        id: "t15",
        quote: "",
        author: "NIKHIL PAGADALA",
    },
    {
        id: "t16",
        quote: "",
        author: "NISHAT AYUB",
    },
    {
        id: "t17",
        quote: "",
        author: "P PURUSHOTTAM NAIDU",
    },
    {
        id: "t18",
        quote: "",
        author: "ROHIT KUMAR",
    },
    {
        id: "t19",
        quote: "",
        author: "ROHITRAJ K.A",
    },
    {
        id: "t20",
        quote: "",
        author: "SAJIN SAJI GEORGE",
    },
    {
        id: "t21",
        quote: "",
        author: "SANJEEV M.S",
    },
    {
        id: "t22",
        quote: "",
        author: "SHUBH NAWANI",
    },
    {
        id: "t23",
        quote: "",
        author: "SUJAL BHATT",
    },
];

export default function TestimonialCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="relative bg-black text-white font-mono py-32 overflow-hidden">
            {/* Stars background and shooting stars */}
            <StarsBackground starDensity={0.0002} />
            <ShootingStars />
            
            <div className="relative">
                <div className="overflow-hidden">
                    {isClient && (
                        <div
                            ref={scrollRef}
                            className="animate-scroll flex gap-6 items-stretch"
                            style={{
                                width: `${testimonials.length * 450 * 2}px`,
                            }}
                        >
                            {testimonials.map((item) => (
                                <TestimonialCard
                                    key={item.id}
                                    testimonial={item}
                                />
                            ))}

                            {testimonials.map((item) => (
                                <TestimonialCard
                                    key={`${item.id}-dup`}
                                    testimonial={item}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
    return (
        <div className="bg-black rounded-2xl p-6 min-w-[400px] max-w-[400px] flex flex-col relative">
            <div className="bg-black rounded-2xl h-full">
                <div className="text-white font-mono text-base mb-6 flex-grow">
                    "{testimonial.quote}"
                </div>

                <div className="flex items-center mt-4">
                    <div>
                        <div className="text-white font-mono font-semibold">
                            {testimonial.author}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
