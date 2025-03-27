import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tagline: string;
  category: string;
}

const projects: Project[] = [
  {
    id: "soft-synt",
    title: "Soft Synt",
    description: "SaaS Landing Page",
    image: "https://framerusercontent.com/images/mmsDRM0UkcMRfIWG4r4YKOuAKJ0.jpg?scale-down-to=1024",
    tagline: "",
    category: ""
  },
  {
    id: "saas-synt",
    title: "SaaS Synt",
    description: "SaaS Landing Page",
    image: "https://framerusercontent.com/images/z2njJFDbA9NvXdnLhEWynjbjk.jpg?scale-down-to=1024",
    tagline: "",
    category: ""
  }
];

export default function MyProjects() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <div className="text-indigo-500 font-medium">My Work</div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-14 z-10">
            <Navbar />
          </div>
        </div>
        
        <div className="mt-16 mb-12">
          <h1 className="text-5xl font-bold mb-6 text-white">View my projects</h1>
          <p className="text-gray-400 text-lg">
            My skill reflects itself! Premier style in each distinct task
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              {/* Image container with rounded corners */}
              <div className="relative rounded-xl overflow-hidden shadow-xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  {project.category && (
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                      {project.category}
                    </div>
                  )}
                  <div className="text-lg font-medium text-white">{project.tagline}</div>
                </div>
              </div>
              
              {/* Title and description below the image */}
              <div className="mt-4 pl-1">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="fixed bottom-6 right-6">
          <div className="bg-white text-black rounded-full px-4 py-2 flex items-center text-sm font-medium">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Made in Framer
          </div>
        </div>
      </div>
    </div>
  );
}
