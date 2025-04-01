import LandingPage from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Home() {
    return (
        <main className="relative min-h-screen bg-black">
            <div className="absolute inset-0 z-0">
                <StarsBackground starDensity={0.0002} />
                <ShootingStars />
            </div>

            <div className="relative z-10">
                <LandingPage />
                <AboutSection />
                <TestimonialCarousel />
            </div>
        </main>
    );
}
