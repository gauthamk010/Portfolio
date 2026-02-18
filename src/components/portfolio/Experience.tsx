import AnimatedSection from "./AnimatedSection";
import { Briefcase, Code } from "lucide-react";

const experiences = [
  {
    period: "July 2025 – Present",
    title: "Junior Software Developer",
    company: "Skillmine Technologies and Consulting Limited",
    location: "Sivakasi, Tamil Nadu",
    description: "Working as a Junior Software Developer, contributing to key projects and enhancing software solutions.",
    icon: <Code size={24} className="text-portfolio-gold" />,
  },
  {
    period: "Feb 2025 – Jul 2025",
    title: "Trainee",
    company: "Skillmine Technologies and Consulting Limited",
    location: "Sivakasi, Tamil Nadu",
    description: "Underwent intensive training in software development methodologies and technologies.",
    icon: <Briefcase size={24} className="text-portfolio-gold" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-[100px] px-8 relative z-10 bg-[rgba(255,255,255,0.015)]">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">Career</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">Work Experience</h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-portfolio-gold to-transparent" />
          
          {experiences.map((exp, i) => (
            <AnimatedSection key={i}>
              <div className="flex gap-10 mb-10 pl-[60px] relative">
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-[6px] w-[22px] h-[22px] rounded-full bg-portfolio-bg border-[3px] border-portfolio-gold z-10" />
                
                <div className="flex-1 bg-portfolio-card border border-portfolio-border rounded-2xl p-8 hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-all duration-300">
                  <div className="flex justify-between items-start flex-wrap gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      {exp.icon}
                      <h3 className="font-serif text-[20px] font-bold text-portfolio-text">
                        {exp.title}
                      </h3>
                    </div>
                    <span className="bg-portfolio-gold/15 text-portfolio-gold px-3.5 py-1 rounded-full text-[13px] font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mb-4">
                    <p className="text-portfolio-gold font-medium text-[15px]">{exp.company}</p>
                    <p className="text-portfolio-muted text-[13px] mb-2">{exp.location}</p>
                  </div>
                  <p className="text-portfolio-muted text-[14px] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
