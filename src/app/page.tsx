import LandingPage from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black">
            <div className="fixed inset-0" style={{ zIndex: 0 }}>
                <StarsBackground starDensity={0.0002} />
            </div>
            
            <div className="fixed inset-0" style={{ zIndex: 1 }}>
                <ShootingStars />
            </div>

            <div className="relative" style={{ zIndex: 2 }}>
                <LandingPage />
                <AboutSection />
                <TestimonialCarousel />
            </div>
        </main>
    );
}
