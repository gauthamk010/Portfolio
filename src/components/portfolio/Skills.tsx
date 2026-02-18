import { useRef, useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { Brain, Database } from "lucide-react";

const skills = [
  { name: "React", level: 90, category: "Frontend", icon: "devicon-react-original colored" },
  { name: "Next.js", level: 88, category: "Frontend", icon: "devicon-nextjs-plain colored text-white" },
  { name: "HTML & CSS", level: 85, category: "Frontend", icon: "devicon-html5-plain colored" },
  { name: "NestJS", level: 82, category: "Backend", icon: "devicon-nestjs-original colored" },
  { name: "Express.js", level: 85, category: "Backend", icon: "devicon-express-original text-white" },
  { name: "Node.js", level: 83, category: "Backend", icon: "devicon-nodejs-plain colored" },
  { name: "MongoDB", level: 80, category: "Database", icon: "devicon-mongodb-plain colored" },
  { name: "SQL / DBMS", level: 72, category: "Database", icon: <Database size={20} className="text-portfolio-gold" /> },
  { name: "Python", level: 80, category: "Languages", icon: "devicon-python-plain colored" },
  { name: "Java", level: 65, category: "Languages", icon: "devicon-java-plain colored" },
  { name: "C", level: 65, category: "Languages", icon: "devicon-c-plain colored" },
  { name: "Arduino", level: 75, category: "Languages", icon: "devicon-arduino-plain colored" },
  { name: "R", level: 60, category: "Languages", icon: "devicon-r-plain colored" },
  { name: "MATLAB", level: 70, category: "Tools", icon: "devicon-matlab-plain colored" },
  { name: "Machine Learning", level: 75, category: "AI/ML", icon: <Brain size={20} className="text-portfolio-gold" /> },
];

function SkillBar({ name, level, delay = 0, icon }: { name: string; level: number; delay?: number; icon?: React.ReactNode | string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2.5">
          {typeof icon === "string" ? (
            <i className={`${icon} text-[18px]`} />
          ) : (
            icon
          )}
          <span className="text-portfolio-text text-[14px] font-sans">{name}</span>
        </div>
        <span className="text-portfolio-gold text-[13px] font-semibold">{level}%</span>
      </div>
      <div className="bg-white/10 rounded overflow-hidden h-1.5">
        <div
          className="h-full rounded bg-gradient-to-r from-portfolio-gold to-[#e8c96a] transition-all duration-1000 ease-out"
          style={{ width: inView ? `${level}%` : "0%", transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = ["Frontend", "Backend", "Database", "Languages", "AI/ML", "Tools", "Security"];

  return (
    <section id="skills" className="py-[100px] px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">Expertise</p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">Skills & Technologies</h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          if (!catSkills.length) return null;
          return (
            <AnimatedSection key={cat} className="mb-10">
              <div className="bg-portfolio-card border border-portfolio-border rounded-2xl p-8 hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-all duration-300">
                <h3 className="font-serif text-[18px] text-portfolio-gold mb-6 flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-portfolio-gold rounded-sm inline-block" />
                  {cat}
                </h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-x-10 gap-y-2">
                  {catSkills.map((skill, i) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 100} icon={skill.icon} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
}
