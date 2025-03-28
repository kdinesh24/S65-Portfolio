"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
    id: string;
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        id: "t1",
        quote: "DAVID'S WORK SPEAKS FOR ITSELF—METICULOUSLY CRAFTED, VISUALLY CAPTIVATING, AND SEAMLESSLY INTEGRATED WITH OUR BRAND'S ETHOS. THEY ARE A TRUE ASSET, CONSISTENTLY DELIVERS EXPERIENCE AND ENGAGEMENT.",
        author: "MICHAEL VASIEN",
    },
    {
        id: "t2",
        quote: "STRONGLY SUGGESTED! GUETABERT DAVIDSON EXCEEDED EXPECTATIONS. STRIKING WEBSITE AND ALSO OFFERED PRICELESS ADVICE FOR ENHANCING INTERNET VISIBILITY.",
        author: "RICK O'CONNELL",
    },
    {
        id: "t3",
        quote: "ENOUGH GOOD THINGS ABOUT. HAVE AN INCREDIBLE TRANSFORMING IDEAS INTO STUNNING DESIGNS.",
        author: "MACKIE",
    },
    {
        id: "t4",
        quote: "PROFESSIONAL FROM START TO FINISH. THE SITE DESIGN CAPTURED EXACTLY WHAT WE WERE LOOKING FOR AND THE ONGOING SUPPORT HAS BEEN EXCEPTIONAL.",
        author: "SARAH CHEN",
    },
    {
        id: "t5",
        quote: "WHAT IMPRESSED ME MOST WAS THE SPEED AND EFFICIENCY WITHOUT COMPROMISING ON QUALITY. THE PROJECT WAS DELIVERED AHEAD OF SCHEDULE WITH ALL REQUIREMENTS MET.",
        author: "JAMES WATSON",
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
            {/* Section title */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20 text-center">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-3">
                    SOMETHING ABOUT US
                </h2>
            </div>

            {/* Single row testimonial carousel */}
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
                            {/* First set of cards */}
                            {testimonials.map((item) => (
                                <TestimonialCard
                                    key={item.id}
                                    testimonial={item}
                                />
                            ))}

                            {/* Duplicate set for continuous scrolling */}
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
                {/* Quote */}
                <div className="text-white font-mono text-base mb-6 flex-grow">
                    "{testimonial.quote}"
                </div>

                {/* Author info */}
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
