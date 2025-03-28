"use client";

export default function DesignerPortfolio() {
  const sections = [
    {
      id: "about",
      title: "ABOUT SQUAD-65",
      description: "I'm on the cutting edge of no-code tools that allow me to bring my creative visions to life. Though my methods may be unconventional, my dedication to the craft is unparalleled. I thrive on finding 'unexpected solutions' and believe that with the right perspective, anything is possible."
    }
  ];

  return (
    <div className="bg-black text-white font-mono">
      {/* About Section */}
      <section
        id="about"
        className="py-12 px-4 md:px-24 relative"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-12">{sections[0].title}</h2>
          <p className="text-lg leading-relaxed tracking-wide">
            {sections[0].description}
          </p>
        </div>
      </section>
    </div>
  );
}
