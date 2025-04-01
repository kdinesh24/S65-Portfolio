"use client";
import { useState } from 'react';
import { StarsBackground } from "./ui/stars-background";
import { ShootingStars } from "./ui/shooting-stars";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function DesignerPortfolio() {
    // State to track which FAQ item is open
    const [openIndex, setOpenIndex] = useState(null);
    
    // Toggle function for opening/closing FAQ items
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    // FAQ data
    const faqItems = [
        {
            question: "Respect Each Other",
            answer: "We believe in creating a community where every voice is heard and valued. By respecting each other's ideas, backgrounds, and contributions, we foster an environment of trust and collaboration that allows us to achieve more together than we ever could alone."
        },
        {
            question: "Have a Growth Mindset",
            answer: "We embrace challenges as opportunities to learn and improve. With a growth mindset, we understand that abilities can be developed through dedication and hard work. We view obstacles not as setbacks but as stepping stones toward greater achievement and innovation."
        },
        {
            question: "Learn with Joy",
            answer: "Learning is at the heart of everything we do, and we approach it with enthusiasm and curiosity. We celebrate the excitement of discovery and the satisfaction of mastering new skills. By finding joy in our learning journey, we stay motivated and inspired to push boundaries."
        },
        {
            question: "Make a Difference",
            answer: "Our purpose extends beyond our immediate goals—we strive to create meaningful impact in everything we do. Whether through our projects, our interactions, or our community involvement, we're committed to leaving a positive mark on the world around us."
        },
        {
            question: "What is Squad-65?",
            answer: "Squad-65 is a collective built on a foundation of unity and purpose. We bring together diverse talents and perspectives to create solutions that matter. Our strength comes from our shared values and commitment to excellence in everything we do."
        }
    ];

    return (
        <div className="bg-black text-white font-mono relative overflow-hidden min-h-screen">
            {/* Stars background and shooting stars */}
            <StarsBackground starDensity={0.0002} />
            <ShootingStars />
            
            <section className="py-12 px-4 md:px-24 relative z-10 flex justify-center items-center min-h-screen">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12">
                        WHAT WE STAND FOR?
                    </h2>
                    
                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <div 
                                key={index} 
                                className="border border-gray-700 rounded-md overflow-hidden transition-all duration-300"
                            >
                                <button 
                                    className="w-full px-6 py-4 text-center flex justify-between items-center hover:bg-white hover:text-black transition-colors"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <span className="text-lg font-medium flex-grow">{item.question}</span>
                                    {openIndex === index ? 
                                        <ChevronUp className="w-5 h-5" /> : 
                                        <ChevronDown className="w-5 h-5" />
                                    }
                                </button>
                                
                                <div 
                                    className={`px-6 overflow-hidden transition-all duration-300 ${
                                        openIndex === index ? 'max-h-96 py-4' : 'max-h-0 py-0'
                                    }`}
                                >
                                    <p className="text-gray-300 leading-relaxed tracking-wide text-center">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}