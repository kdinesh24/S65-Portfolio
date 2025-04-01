import LandingPage from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import TestimonialCarousel from "@/components/testimonial-carousel";

export default function Home() {
    return (
        <main>
            <LandingPage />
            <AboutSection />
            <TestimonialCarousel />
        </main>
    );
}
