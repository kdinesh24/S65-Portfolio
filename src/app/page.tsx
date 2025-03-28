import LandingPage from "@/components/hero-section";
import DesignerPortfolio from "@/components/about-section";
import TestimonialCarousel from "@/components/testimonial-carousel";

export default function Home() {
    return (
        <main>
            <LandingPage />
            <TestimonialCarousel />
            <DesignerPortfolio />
        </main>
    );
}
