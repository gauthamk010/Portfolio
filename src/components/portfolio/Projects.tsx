import AnimatedSection from "./AnimatedSection";
import { Settings, Globe } from "lucide-react";

const projects = [
  {
    title: "Digital Twin of a DC Motor",
    description:
      "Interlinked hardware components of a DC driven brush motor with a software projection. Arduino IDE drove the hardware while Processing v4.0 rendered sensor outputs on a custom GUI panel enabling two-way hardware communication.",
    tags: ["Arduino", "Processing v4.0", "Hardware", "GUI", "IoT"],
    icon: <Settings size={48} className="text-portfolio-text" />,
  },
  {
    title: "Full-Stack Web Applications",
    description:
      "Building scalable web applications using React/Next.js on the frontend and NestJS/Express with MongoDB on the backend. Focused on clean architecture, RESTful APIs, and modern UI/UX patterns.",
    tags: ["React", "Next.js", "NestJS", "MongoDB", "Express"],
    icon: <Globe size={48} className="text-portfolio-text" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-[100px] px-8 relative z-10 bg-[rgba(255,255,255,0.015)]">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">Work</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">Featured Projects</h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(480px,1fr))] gap-7">
          {projects.map((p) => (
            <AnimatedSection key={p.title}>
              <div className="bg-portfolio-card border border-portfolio-border rounded-[20px] p-9 h-full hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-all duration-300">
                <div className="mb-5">{p.icon}</div>
                <h3 className="font-serif text-[22px] font-bold mb-3.5 text-portfolio-text">{p.title}</h3>
                <p className="text-[15px] leading-[1.75] text-portfolio-muted mb-6">{p.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-portfolio-gold/10 text-portfolio-gold border border-portfolio-gold/25 px-3 py-1 rounded-full text-[12px] font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
