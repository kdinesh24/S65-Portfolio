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
        quote: "",
        author: "ABHINAV RAHUL",
    },
    {
        id: "t2",
        quote: "",
        author: "AKSHIT SHARMA",
    },
    {
        id: "t3",
        quote: "",
        author: "ANKIT KUMAR",
    },
    {
        id: "t4",
        quote: "",
        author: "ARMAN KAR",
    },
    {
        id: "t5",
        quote: "",
        author: "CHAITANYA PAWAR",
    },
    {
        id: "t6",
        quote: "",
        author: "GOURISH CHOUHAN",
    },
    {
        id: "t7",
        quote: "",
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
