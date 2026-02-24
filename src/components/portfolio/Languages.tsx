import AnimatedSection from "./AnimatedSection";
import { Languages as LanguagesIcon } from "lucide-react";

const languages = [
  { name: "English", level: "Proficient" },
  { name: "Kannada", level: "Proficient" },
  { name: "Hindi", level: "Proficient" },
  { name: "Telugu", level: "Proficient" },
  { name: "Tamil", level: "Proficient" },
  { name: "Malayalam", level: "Novice" },
];

export default function Languages() {
  return (
    <section
      id="languages"
      className="py-[100px] px-8 relative z-10 bg-portfolio-section-alt"
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">
              Communication
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">
              Spoken Languages
            </h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-5">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="group flex flex-col items-center gap-3 rounded-xl border-2 border-portfolio-border bg-portfolio-card px-5 py-6 text-center transition-[transform,border-color,box-shadow,background] duration-300 hover:-translate-y-1 hover:border-portfolio-gold/60 hover:shadow-[0_8px_24px_rgba(201,168,76,0.15)] hover:bg-gradient-to-br hover:from-portfolio-gold/10 hover:to-transparent"
              >
                <LanguagesIcon size={28} className="text-portfolio-gold" />
                <span className="text-portfolio-text text-[16px] font-medium">
                  {lang.name}
                </span>
                <span className="text-portfolio-muted text-[12px] tracking-widest uppercase">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
