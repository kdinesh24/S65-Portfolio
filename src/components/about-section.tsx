"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";
import {
    Rocket,
    Target,
    Users,
    Heart,
    Lightbulb,
    Building,
} from "lucide-react";

const aboutSubsections = [
    {
        id: "mission",
        triggerTitle: "Mission",
        triggerIcon: <Target className="h-6 w-6 mb-2 text-white" />,
        hoverTitle: "Driving Innovation Forward",
        hoverContent:
            "Our mission is to leverage cutting-edge technology to create solutions that solve real-world problems and drive significant progress in our industry.",
    },
    {
        id: "vision",
        triggerTitle: "Vision",
        triggerIcon: <Rocket className="h-6 w-6 mb-2 text-white" />,
        hoverTitle: "Shaping the Future",
        hoverContent:
            "We envision a future where technology seamlessly integrates with daily life, empowering individuals and communities globally. We strive to be at the forefront of this transformation.",
    },
    {
        id: "values",
        triggerTitle: "Values",
        triggerIcon: <Heart className="h-6 w-6 mb-2 text-white" />,
        hoverTitle: "What We Stand For",
        hoverContent: (
            <ul className="space-y-1 text-sm">
                <li>Integrity: Doing what's right.</li>
                <li>Collaboration: Stronger together.</li>
                <li>Innovation: Always improving.</li>
                <li>Impact: Making a difference.</li>
            </ul>
        ),
    },
    {
        id: "team",
        triggerTitle: "Team",
        triggerIcon: <Users className="h-6 w-6 mb-2 text-white" />,
        hoverTitle: "The People Behind",
        hoverContent:
            "Our diverse team consists of passionate experts, creative thinkers, and dedicated professionals committed to achieving excellence together.",
    },
    {
        id: "culture",
        triggerTitle: "Culture",
        triggerIcon: <Lightbulb className="h-6 w-6 mb-2 text-white" />,
        hoverTitle: "How We Work",
        hoverContent:
            "We foster a culture of continuous learning, mutual respect, and open communication, creating an environment where ideas flourish.",
    },
    {
        id: "history",
        triggerTitle: "History",
        triggerIcon: <Building className="h-6 w-6 mb-2 text-white" />,
        hoverTitle: "Our Journey",
        hoverContent: `Founded in ${new Date().getFullYear() - 2}, Squad-65 started with a small team and a big idea. Discover the milestones that shaped us.`,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.15,
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15,
        },
    },
};

export function AboutSection() {
    return (
        <Card className="font-mono w-full max-w-3xl mx-auto my-10 bg-transparent text-white border border-white/10 shadow-lg rounded-md">
            <CardHeader className="text-center pb-2 bg-transparent">
                <CardTitle className="text-2xl font-normal text-white tracking-wider">
                    SQUAD-65
                </CardTitle>
                <CardDescription className="text-sm text-white/70 mt-1">
                    Hover over any section below to explore
                </CardDescription>
            </CardHeader>
            <CardContent className="p-4 md:p-6 bg-transparent">
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {aboutSubsections.map((section) => (
                        <HoverCard
                            key={section.id}
                            openDelay={150}
                            closeDelay={75}
                        >
                            <HoverCardTrigger asChild>
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col items-center justify-center p-3 md:p-4 border border-white/10 rounded-md cursor-pointer bg-transparent hover:bg-white/5 hover:border-white/20 transition-all duration-200 aspect-square"
                                >
                                    {section.triggerIcon}
                                    <p className="font-mono text-center text-xs md:text-sm text-white/80">
                                        {section.triggerTitle}
                                    </p>
                                </motion.div>
                            </HoverCardTrigger>
                            <HoverCardContent
                                className="w-96 z-50 bg-black/80 backdrop-blur-sm border border-white/10 text-white rounded-md shadow-md font-mono"
                                side="top"
                                align="center"
                            >
                                <div className="space-y-4 p-5">
                                    <h4 className="text-lg font-mono tracking-wide uppercase text-white">
                                        {section.hoverTitle}
                                    </h4>
                                    <div className="text-base text-white/90 leading-relaxed">
                                        {section.hoverContent}
                                    </div>
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                    ))}
                </motion.div>
            </CardContent>
        </Card>
    );
}
