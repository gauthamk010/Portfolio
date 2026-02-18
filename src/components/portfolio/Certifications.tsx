import AnimatedSection from "./AnimatedSection";
import { ShieldCheck, Code, Bot, Cloud } from "lucide-react";

const certifications = [
  { title: "Cyber Security Basics", issuer: "CORIZO Labs", year: "2023", icon: <ShieldCheck size={40} /> },
  { title: "Python Programming", issuer: "In Progress", year: "2024", icon: <Code size={40} /> },
  { title: "Machine Learning", issuer: "In Progress", year: "2024", icon: <Bot size={40} /> },
  { title: "Cloud Computing (Python)", issuer: "In Progress", year: "2024", icon: <Cloud size={40} /> },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-[100px] px-8 relative z-10 bg-[rgba(255,255,255,0.015)]">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">Credentials</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">Certifications</h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
          {certifications.map((cert) => (
            <AnimatedSection key={cert.title}>
              <div className="bg-portfolio-card border border-portfolio-border rounded-2xl p-7 text-center hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-all duration-300 h-full flex flex-col items-center">
                <div className="mb-4 text-portfolio-text">{cert.icon}</div>
                <h3 className="font-serif text-[17px] font-semibold text-portfolio-text mb-2">
                  {cert.title}
                </h3>
                <p className="text-portfolio-muted text-[13px] mb-3">{cert.issuer}</p>
                <span className="bg-portfolio-gold/10 text-portfolio-gold px-3 py-1 rounded-full text-[12px] mt-auto">
                  {cert.year}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
