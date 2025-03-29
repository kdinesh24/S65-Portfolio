"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Github, Linkedin } from "lucide-react";

const studentsData = [
    {
        id: 1,
        name: "ABHINAV RAHUL",
        skills: ["Python", "React", "Node.js", "Express.js"],
        avatar: "/images/rahul.jpg",
        github: "https://github.com/Rahul-Abhinav1707",
        linkedin: "https://www.linkedin.com/in/abhinav-rahul-41735831b",
    },
    {
        id: 2,
        name: "AKSHIT SHARMA",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/akshit.jpg",
        github: "https://github.com/axceee",
        linkedin: "https://www.linkedin.com/in/akshit-sharma-05b610339",
    },
    {
        id: 3,
        name: "ANKIT KUMAR",
        skills: ["C", "C++", "React", "JavaScript"],
        avatar: "/images/ankit.jpg",
        github: "https://github.com/Ankitkr000",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-1124a9286",
    },
    {
        id: 4,
        name: "ARMAN KAR",
        skills: ["Python", "Next.js", "TypeScript", "MySQL"],
        avatar: "/images/arman.jpg",
        github: "https://github.com/vereoman",
        linkedin: "https://www.linkedin.com/in/vereoman",
    },
    {
        id: 5,
        name: "CHAITANYA PAWAR",
        skills: ["Python", "Java", "React"],
        avatar: "/images/chaitanya.jpg",
        github: "https://github.com/chazpawar",
        linkedin: "https://www.linkedin.com/in/chaitanya-pawar-675306329",
    },
    {
        id: 6,
        name: "GOURISH CHOUHAN",
        skills: [],
        avatar: "/images/gourish.jpg",
        github: "https://github.com/gourishchouhan",
        linkedin: "",
    },
    {
        id: 7,
        name: "GR MONISH",
        skills: ["React"],
        avatar: "/images/monish.jpg",
        github: "https://github.com/Monish892",
        linkedin: "http://www.linkedin.com/in/gr-monish-291006359",
    },
    {
        id: 8,
        name: "HEMASRI GUTHULA",
        skills: ["Python", "Node.js", "Express.js", "MongoDB"],
        avatar: "/images/hemasri.jpg",
        github: "https://www.linkedin.com/in/hemasri-guthula-56a791325",
        linkedin: "https://www.linkedin.com/in/hemasri-guthula-56a791325",
    },
    {
        id: 9,
        name: "HIMANSHU GUPTA",
        skills: [],
        avatar: "/images/himanshu.jpg",
        github: "https://github.com/itzzhimanshugt",
        linkedin: "",
    },
    {
        id: 10,
        name: "HRITHIK VASANTHRAM",
        skills: [],
        avatar: "/images/hrithik.jpg",
        github: "",
        linkedin: "",
    },
    {
        id: 11,
        name: "K DINESH",
        skills: ["Python", "Next.js", "TypeScript", "MySQL"],
        avatar: "/images/dinesh.jpg",
        github: "https://github.com/kdinesh24",
        linkedin: "https://www.linkedin.com/in/kdinesh24/",
    },
    {
        id: 12,
        name: "KISHORE J",
        skills: [],
        avatar: "/images/kishore.jpg",
        github: "",
        linkedin: "",
    },
    {
        id: 13,
        name: "MANTENA NAGA SAI NITIN VARMA",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/nithin.jpg",
        github: "https://github.com/nithinvarma411",
        linkedin: "https://www.linkedin.com/in/nithin-varma-58a605326",
    },
    {
        id: 14,
        name: "MOHANRAJ A",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/mohanraj.jpg",
        github: "https://github.com/mohan-bee",
        linkedin: "https://www.linkedin.com/in/mohan-a-88b655318",
    },
    {
        id: 15,
        name: "NAVANEETH M",
        skills: ["Python", "C++", "React", "JavaScript"],
        avatar: "/images/navaneeth.jpg",
        github: "https://github.com/NavaneethKSD",
        linkedin: "http://www.linkedin.com/in/navaneeth-m-m-b26337320",
    },
    {
        id: 16,
        name: "NIKHIL PAGADALA",
        skills: [],
        avatar: "/images/nikhil.jpg",
        github: "",
        linkedin: "",
    },
    {
        id: 17,
        name: "NISHAT AYUB",
        skills: ["Python", "C++", "Java", "React"],
        avatar: "/images/nishat.jpg",
        github: "https://github.com/nishatayub",
        linkedin: "https://www.linkedin.com/in/nishat-ayub-a931a330b",
    },
    {
        id: 18,
        name: "P PURUSHOTTAM NAIDU",
        skills: [],
        avatar: "/images/purushottam.jpg",
        github: "",
        linkedin: "",
    },
    {
        id: 19,
        name: "ROHIT KUMAR",
        skills: [],
        avatar: "/images/rohit.jpg",
        github: "https://github.com/itisrohit",
        linkedin: "https://www.linkedin.com/in/ayorohit/",
    },
    {
        id: 20,
        name: "ROHITRAJ K.A",
        skills: ["Python", "C++", "Java", "React"],
        avatar: "/images/rohitraj.jpg",
        github: "https://github.com/rohit-xo21",
        linkedin: "https://www.linkedin.com/in/rohithraj-k-a-96a011320",
    },
    {
        id: 21,
        name: "SAJIN SAJI GEORGE",
        skills: ["C++", "Python", "React"],
        avatar: "/images/sajin.jpg",
        github: "https://github.com/ArKQuee",
        linkedin: "http://www.linkedin.com/in/sajin-saji-george-732975320",
    },
    {
        id: 22,
        name: "SANJEEV M.S",
        skills: [],
        avatar: "/images/sanjeev.jpg",
        github: "",
        linkedin: "",
    },
    {
        id: 23,
        name: "SHUBH NAWANI",
        skills: ["Python", "Java", "React", "Node.js"],
        avatar: "/images/nawani.jpg",
        github: "https://github.com/Shubh-Nawani",
        linkedin: "https://www.linkedin.com/in/shubhnawani",
    },
    {
        id: 24,
        name: "SUJAL BHATT",
        skills: ["Python", "Node.js", "Express.js", "MongoDB"],
        avatar: "/images/sujal.jpg",
        github: "https://github.com/SujalBhatt",
        linkedin: "https://www.linkedin.com/in/sujal-bhatt-168020306",
    },
];

export default function StudentsPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [imageError, setImageError] = useState<Record<number, boolean>>({});

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

    const filteredStudents = studentsData.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    // Handle image error
    const handleImageError = (studentId: number) => {
        setImageError(prev => ({
            ...prev,
            [studentId]: true
        }));
    };

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
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
            `}</style>

            <header className="flex justify-between items-center p-6">
                <div className="flex items-center space-x-4">
                    <span className="font-mono text-lg">
                        LOCAL - <strong>{currentTime}</strong>
                    </span>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/">
                        <button className="font-mono text-white px-4 py-1 rounded-full hover:bg-white hover:text-black transition-colors">
                            ← BACK TO HOME
                        </button>
                    </Link>
                </div>
            </header>

            <main className="container mx-auto px-6 py-2">
                <div className="flex items-center justify-center mb-8">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    <span className="font-mono text-lg tracking-wider">
                        MEET OUR TALENTED
                    </span>
                </div>

                <div className="text-center mb-16">
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        OUR-STUDENTS
                    </h1>
                </div>

                <div className="mb-10 max-w-md mx-auto">
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            placeholder="Search students..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredStudents.map((student) => (
                        <Card
                            key={student.id}
                            className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors overflow-hidden relative flex flex-col justify-between h-[300px]"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar className="h-10 w-10 border border-white/20">
                                    {!imageError[student.id] ? (
                                        <AvatarImage 
                                            src={student.avatar} 
                                            alt={student.name}
                                            onError={() => handleImageError(student.id)}
                                        />
                                    ) : null}
                                    <AvatarFallback className="bg-white/10 text-white font-mono text-sm">
                                        {student.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle className="font-mono text-base">
                                        {student.name}
                                    </CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {student.skills.map(
                                        (skill, index) =>
                                            index < 4 && (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="bg-white/10 text-white hover:bg-white hover:text-black font-mono text-xs"
                                                >
                                                    {skill}
                                                </Badge>
                                            )
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4">
                                <div></div>
                                <div className="flex gap-3">
                                    {student.linkedin && (
                                        <Button
                                            variant="ghost"
                                            className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                            onClick={() =>
                                                window.open(
                                                    student.linkedin,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <Linkedin className="h-3 w-3 mr-1" />
                                            CONNECT
                                        </Button>
                                    )}
                                    {student.github && (
                                        <Button
                                            variant="ghost"
                                            className="font-mono text-xs text-white/80 hover:text-black border border-white/20"
                                            onClick={() =>
                                                window.open(
                                                    student.github,
                                                    "_blank"
                                                )
                                            }
                                        >
                                            <Github className="h-3 w-3 mr-1" />
                                            PROFILE
                                        </Button>
                                    )}
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