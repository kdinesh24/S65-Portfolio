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
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";
import { motion } from "framer-motion";

const studentsData = [
    {
        id: 1,
        name: "ABHINAV RAHUL",
        skills: ["Python", "React", "Node.js", "Express.js"],
        avatar: "/images/rahul.jpg",
        github: "https://github.com/Rahul-Abhinav1707",
        linkedin: "https://www.linkedin.com/in/abhinav-rahul-41735831b",
        description:
            "A skilled developer with expertise in full-stack web development using MERN stack.",
        shortDescription:
            "MERN stack developer focusing on full-stack web applications.",
    },
    {
        id: 2,
        name: "AKSHIT SHARMA",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/akshit.jpg",
        github: "https://github.com/axceee",
        linkedin: "https://www.linkedin.com/in/akshit-sharma-05b610339",
        description:
            "Passionate about programming with strong skills in Python, C++ and web development.",
        shortDescription:
            "Programmer skilled in Python, C++, and web development (React/Node).",
    },
    {
        id: 3,
        name: "ANKIT KUMAR",
        skills: ["C", "C++", "React", "JavaScript"],
        avatar: "/images/ankit.jpeg",
        github: "https://github.com/Ankitkr000",
        linkedin: "https://www.linkedin.com/in/ankit-kumar-1124a9286",
        description:
            "Frontend developer focused on creating beautiful UI/UX with React and JavaScript.",
        shortDescription:
            "Frontend developer crafting UI/UX with React and JavaScript.",
    },
    {
        id: 4,
        name: "ARMAN KAR",
        skills: ["Python", "Next.js", "TypeScript", "MySQL"],
        avatar: "/images/arman.jpg",
        github: "https://github.com/vereoman",
        linkedin: "https://www.linkedin.com/in/vereoman",
        description:
            "Full-stack developer with experience in Next.js, TypeScript and database management.",
        shortDescription:
            "Full-stack developer using Next.js, TypeScript, and Python.",
    },
    {
        id: 5,
        name: "CHAITANYA PAWAR",
        skills: ["Python", "Java", "React"],
        avatar: "/images/chaitanya.jpg",
        github: "https://github.com/chazpawar",
        linkedin: "https://www.linkedin.com/in/chaitanya-pawar-675306329",
        description:
            "A versatile developer with experience in Python, Java, and React.",
        shortDescription:
            "Versatile developer experienced in Python, Java, and React.",
    },
    {
        id: 6,
        name: "GOURISH CHOUHAN",
        skills: ["Python", "React", "Prompt Engineer"],
        avatar: "/images/gourish.jpeg",
        github: "https://github.com/gourishchouhan",
        linkedin: "https://www.linkedin.com/in/gourishchouhan",
        description:
            "An aspiring technologist exploring various facets of innovation and development, active on GitHub and LinkedIn.",
        shortDescription:
            "Aspiring technologist exploring innovation. Active on GitHub/LinkedIn.",
    },
    {
        id: 7,
        name: "GR MONISH",
        skills: ["React"],
        avatar: "/images/monish.jpg",
        github: "https://github.com/Monish892",
        linkedin: "http://www.linkedin.com/in/gr-monish-291006359",
        description:
            "Focused on front-end development with React, eager to contribute to innovative tech projects.",
        shortDescription:
            "Frontend developer specializing in React for innovative projects.",
    },
    {
        id: 8,
        name: "HEMASRI GUTHULA",
        skills: ["Python", "Node.js", "Express.js", "MongoDB"],
        avatar: "/images/hemasri.jpg",
        github: "https://www.linkedin.com/in/hemasri-guthula-56a791325",
        linkedin: "https://www.linkedin.com/in/hemasri-guthula-56a791325",
        description:
            "Backend-focused developer experienced with the Node.js ecosystem (Express, MongoDB) and Python.",
        shortDescription:
            "Backend developer using Node.js (Express, MongoDB) and Python.",
    },
    {
        id: 9,
        name: "HIMANSHU GUPTA",
        skills: [],
        avatar: "/images/himanshu.jpg",
        github: "https://github.com/itzzhimanshugt",
        linkedin: "",
        description:
            "A technology enthusiast building foundational skills, showcasing progress on GitHub.",
        shortDescription:
            "Technology enthusiast building skills. Active on GitHub.",
    },
    {
        id: 10,
        name: "HRITHIK VASANTHRAM",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/hrithik.jpg",
        github: "https://github.com/hrithik18k",
        linkedin: "https://www.linkedin.com/in/hrithik-vasanthram-8ba509323",
        description:
            "A dedicated student actively exploring the field of technology and its potential applications.",
        shortDescription:
            "Dedicated student exploring technology and its applications.",
    },
    {
        id: 11,
        name: "DINESH K",
        skills: ["Python", "Next.js", "TypeScript", "MySQL"],
        avatar: "/images/dinesh.jpg",
        github: "https://github.com/kdinesh24",
        linkedin: "https://www.linkedin.com/in/kdinesh24/",
        description:
            "Developing full-stack applications using Python, Next.js, TypeScript, and MySQL.",
        shortDescription:
            "Full-stack dev using Python, Next.js, TypeScript, and MySQL.",
    },
    {
        id: 12,
        name: "KISHORE J",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/kishore.jpg",
        github: "https://github.com/Jk2006k",
        linkedin: "https://www.linkedin.com/in/kishoore-j-9081b5349",
        description:
            "An inquisitive student passionate about learning and applying new technologies.",
        shortDescription:
            "Inquisitive student passionate about learning new technologies.",
    },
    {
        id: 13,
        name: "MANTENA NAGA SAI NITIN VARMA",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/nithin.jpg",
        github: "https://github.com/nithinvarma411",
        linkedin: "https://www.linkedin.com/in/nithin-varma-58a605326",
        description:
            "Versatile programmer skilled in Python, C++, and building web applications with React and Node.js.",
        shortDescription:
            "Programmer skilled in Python, C++, React, and Node.js.",
    },
    {
        id: 14,
        name: "MOHANRAJ A",
        skills: ["Python", "C++", "React", "Node.js"],
        avatar: "/images/mohanraj.jpg",
        github: "https://github.com/mohan-bee",
        linkedin: "https://www.linkedin.com/in/mohan-a-88b655318",
        description:
            "Skilled in core programming languages like Python and C++, with experience in web technologies like React and Node.js.",
        shortDescription:
            "Skilled in Python, C++, React, and Node.js development.",
    },
    {
        id: 15,
        name: "NAVANEETH M",
        skills: ["Python", "C++", "React", "JavaScript"],
        avatar: "/images/navaneeth.jpg",
        github: "https://github.com/NavaneethKSD",
        linkedin: "http://www.linkedin.com/in/navaneeth-m-m-b26337320",
        description:
            "Proficient in Python and C++, with a focus on front-end development using React and JavaScript.",
        shortDescription:
            "Proficient in Python/C++, focusing on React/JavaScript frontend.",
    },
    {
        id: 16,
        name: "NIKHIL PAGADALA",
        skills: ["HTML", "CSS", "JavaScript", "React"],
        avatar: "/images/nikhil.jpg",
        github: "https://github.com/nikhilpagadala",
        linkedin: "https://www.linkedin.com/in/nikhil-pagadala-b20000320",
        description:
            "Frontend developer focused on crafting web interfaces using HTML, CSS, JavaScript, and React.",
        shortDescription:
            "Frontend developer using HTML, CSS, JavaScript, and React.",
    },
    {
        id: 17,
        name: "NISHAT AYUB",
        skills: ["Python", "C++", "Java", "React"],
        avatar: "/images/nishat.jpg",
        github: "https://github.com/nishatayub",
        linkedin: "https://www.linkedin.com/in/nishat-ayub-a931a330b",
        description:
            "A developer with a diverse skill set including Python, C++, Java, and React, exploring various programming paradigms.",
        shortDescription:
            "Developer with diverse skills: Python, C++, Java, and React.",
    },
    {
        id: 18,
        name: "P PURUSHOTTAM NAIDU",
        skills: ["React", "Node.js", "Express.js", "MongoDB"],
        avatar: "/images/purushottam.jpg",
        github: "https://github.com/Purushottam-html",
        linkedin: "https://www.linkedin.com/in/purushottam-naidu-80009128a/",
        description:
            "Specializing in the MERN stack (MongoDB, Express.js, React, Node.js) for full-stack web development.",
        shortDescription:
            "Full-stack developer specializing in the MERN stack.",
    },
    {
        id: 19,
        name: "ROHIT KUMAR",
        skills: ["Python", "HTML", "CSS", "JavaScript"],
        avatar: "/images/rohit.jpg",
        github: "https://github.com/itisrohit",
        linkedin: "https://www.linkedin.com/in/ayorohit/",
        description:
            "Building foundational web development skills with Python, HTML, CSS, and JavaScript.",
        shortDescription:
            "Building web skills with Python, HTML, CSS, and JavaScript.",
    },
    {
        id: 20,
        name: "ROHITRAJ K.A",
        skills: ["Python", "C++", "Java", "React"],
        avatar: "/images/rohitraj.jpg",
        github: "https://github.com/rohit-xo21",
        linkedin: "https://www.linkedin.com/in/rohithraj-k-a-96a011320",
        description:
            "Experienced in multiple programming languages like Python, C++, and Java, with additional skills in React development.",
        shortDescription:
            "Experienced in Python, C++, Java, and React development.",
    },
    {
        id: 21,
        name: "SAJIN SAJI GEORGE",
        skills: ["C++", "Python", "React"],
        avatar: "/images/sajin.jpg",
        github: "https://github.com/ArKQuee",
        linkedin: "http://www.linkedin.com/in/sajin-saji-george-732975320",
        description:
            "Developer with expertise in C++ and Python, and experience building interfaces with React.",
        shortDescription:
            "Developer skilled in C++, Python, and building UI with React.",
    },
    {
        id: 22,
        name: "SANJEEV M.S",
        skills: [],
        avatar: "/images/sanjeev.jpeg",
        github: "https://github.com/Sanjeev-Chakaravarthy",
        linkedin: "https://www.linkedin.com/in/sanjeev-m-s-908188325/",
        description:
            "An enthusiastic learner in the tech space, actively engaging with the community via GitHub and LinkedIn.",
        shortDescription:
            "Enthusiastic tech learner active on GitHub and LinkedIn.",
    },
    {
        id: 23,
        name: "SHUBH NAWANI",
        skills: ["Python", "Java", "React", "Node.js"],
        avatar: "/images/shubh.jpg",
        github: "https://github.com/Shubh-Nawani",
        linkedin: "https://www.linkedin.com/in/shubhnawani",
        description:
            "Full-stack developer proficient in Python, Java, React, and Node.js, bridging backend and frontend technologies.",
        shortDescription:
            "Full-stack developer skilled in Python, Java, React, and Node.js.",
    },
    {
        id: 24,
        name: "SUJAL BHATT",
        skills: ["Python", "Node.js", "Express.js", "MongoDB"],
        avatar: "/images/sujal.jpg",
        github: "https://github.com/SujalBhatt",
        linkedin: "https://www.linkedin.com/in/sujal-bhatt-168020306",
        description:
            "Backend developer skilled in Python and the Node.js environment, including Express.js and MongoDB.",
        shortDescription:
            "Backend developer using Python, Node.js, Express, and MongoDB.",
    },
];

export default function StudentsPage() {
    const [currentTime, setCurrentTime] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
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
            setIsLoaded(true);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const filteredStudents = studentsData.filter(
        (student) =>
            student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.skills.some((skill) =>
                skill.toLowerCase().includes(searchTerm.toLowerCase())
            )
    );

    const handleImageError = (studentId: number) => {
        setImageError((prev) => ({
            ...prev,
            [studentId]: true,
        }));
    };

    const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            `}</style>

            <motion.header
                className="flex justify-between items-center p-6"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
            >
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
            </motion.header>

            <motion.main
                className="container mx-auto px-6 py-2"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.div
                    className="flex items-center justify-center mb-8"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></div>
                    <span className="font-mono text-lg tracking-wider">
                        MEET OUR TALENTED
                    </span>
                </motion.div>
                <motion.div
                    className="text-center mb-16"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h1 className="font-mono text-7xl font-bold tracking-tighter">
                        OUR-STUDENTS
                    </h1>
                </motion.div>

                <motion.div
                    className="mb-10 max-w-md mx-auto"
                    variants={fadeIn}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 w-4 h-4" />
                        <Input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white/5 border-white/10 text-white pl-10 font-mono"
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    {filteredStudents.map((student) => (
                        <motion.div
                            key={student.id}
                            variants={fadeIn}
                            transition={{ duration: 0.6 }}
                        >
                            <HoverCard>
                                <HoverCardTrigger asChild>
                                    <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors overflow-hidden relative flex flex-col justify-between h-[270px] cursor-pointer">
                                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                            <Avatar className="h-10 w-10 border border-white/20">
                                                {!imageError[student.id] ? (
                                                    <AvatarImage
                                                        src={student.avatar}
                                                        alt={student.name}
                                                        onError={() =>
                                                            handleImageError(
                                                                student.id
                                                            )
                                                        }
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

                                        <CardContent className="flex-grow flex flex-col gap-3 pt-2 pb-2 overflow-hidden">
                                            <div className="flex flex-wrap gap-2">
                                                {student.skills
                                                    .slice(0, 4)
                                                    .map((skill) => (
                                                        <Badge
                                                            key={skill}
                                                            variant="secondary"
                                                            className="bg-white/10 text-white hover:bg-white hover:text-black font-mono text-xs"
                                                        >
                                                            {skill}
                                                        </Badge>
                                                    ))}
                                            </div>

                                            <p className="font-mono text-xs text-white/70 line-clamp-2">
                                                {student.shortDescription ||
                                                    student.description}
                                            </p>
                                        </CardContent>

                                        <CardFooter className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                                            <div></div>
                                            <div className="flex gap-3">
                                                {student.linkedin && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="font-mono text-xs text-white/80 hover:text-black border border-white/20 px-2 py-1 h-auto"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(
                                                                student.linkedin,
                                                                "_blank"
                                                            );
                                                        }}
                                                    >
                                                        <Linkedin className="h-3 w-3 mr-1" />
                                                        CONNECT
                                                    </Button>
                                                )}
                                                {student.github && (
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        className="font-mono text-xs text-white/80 hover:text-black border border-white/20 px-2 py-1 h-auto"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.open(
                                                                student.github,
                                                                "_blank"
                                                            );
                                                        }}
                                                    >
                                                        <Github className="h-3 w-3 mr-1" />
                                                        PROFILE
                                                    </Button>
                                                )}
                                            </div>
                                        </CardFooter>
                                    </Card>
                                </HoverCardTrigger>

                                <HoverCardContent className="w-96 bg-black border border-white/20 text-white p-4 rounded-lg shadow-xl">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-40 h-40 rounded-md object-cover flex-shrink-0 relative">
                                            <Image
                                                src={student.avatar}
                                                alt={`Student ${student.name}`}
                                                fill
                                                sizes="10rem"
                                                className="rounded-md object-cover"
                                                onError={() => {
                                                    console.error(
                                                        `Failed to load image for ${student.name}`
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            {student.description ? (
                                                <p className="text-sm text-white/80 font-mono">
                                                    {student.description}
                                                </p>
                                            ) : (
                                                <p className="text-sm text-white/60 font-mono italic">
                                                    LPU student with a passion
                                                    for technology and
                                                    innovation.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </HoverCardContent>
                            </HoverCard>
                        </motion.div>
                    ))}
                    {filteredStudents.length === 0 && searchTerm && (
                        <motion.div
                            className="md:col-span-3 text-center py-10"
                            variants={fadeIn}
                        >
                            <p className="font-mono text-white/70">
                                No students found matching &quot;{searchTerm}
                                &quot;.
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </motion.main>

            <motion.footer
                className="p-6 flex flex-col justify-center items-center border-t border-white/10 mt-20"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.7 }}
            >
                <div className="font-mono text-center mb-2">
                    BASED IN LPU, JALANDHAR
                </div>
                <div className="font-mono text-center">
                    DESIGNED AND DEVELOPED BY{" "}
                    <a
                        href="https://github.com/vereoman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-400"
                    >
                        @VEREOMAN
                    </a>{" "}
                    /{" "}
                    <a
                        href="https://github.com/kdinesh24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-400"
                    >
                        @KDINESH24
                    </a>
                </div>
            </motion.footer>
        </div>
    );
}
