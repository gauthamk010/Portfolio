import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Database, Server, Code, Layers } from "lucide-react"; // Taking a guess at icons for tech stack

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["Full-Stack Developer", "React Enthusiast", "ML/AI Explorer", "ECE Graduate"];
  const roleRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const role = roles[roleRef.current];
      if (!deletingRef.current) {
        if (charRef.current < role.length) {
          setTypedText(role.slice(0, ++charRef.current));
        } else {
          setTimeout(() => {
            deletingRef.current = true;
          }, 1800);
        }
      } else {
        if (charRef.current > 0) {
          setTypedText(role.slice(0, --charRef.current));
        } else {
          deletingRef.current = false;
          roleRef.current = (roleRef.current + 1) % roles.length;
        }
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-[100px] px-8 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-portfolio-gold/10 border border-portfolio-border rounded-full px-4 py-1.5 mb-7">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[13px] text-portfolio-gold font-medium">
              {/* Available for opportunities */}
              Actively learning and working
            </span>
          </div>
          <h1 className="font-serif text-[clamp(42px,6vw,72px)] font-black leading-[1.1] mb-5">
            Gautham<br />
            <span className="text-portfolio-gold">Keshav</span>
          </h1>
          <div className="text-[20px] text-portfolio-muted mb-6 h-8 flex items-center">
            <span className="text-portfolio-text">{typedText}</span>
            <span className="animate-blink ml-1 text-portfolio-gold">|</span>
          </div>
          <p className="text-base leading-[1.8] text-portfolio-muted max-w-[460px] mb-10">
            ECE graduate from PES University with a passion for building modern web applications and an interest in ML/AI applications.
            Skilled in full-stack development with React, Next.js, NestJS, and MongoDB — bridging hardware intuition with software creativity.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button
              className="bg-gradient-to-br from-portfolio-gold to-[#e8c96a] text-portfolio-bg px-7 py-3 rounded-md font-semibold text-[14px] hover:opacity-90 transition-transform transform hover:-translate-y-px"
              onClick={() => scrollTo("Projects")}
            >
              View Projects
            </button>
            <button
              className="bg-transparent text-portfolio-gold border border-portfolio-gold px-7 py-3 rounded-md font-semibold text-[14px] hover:bg-portfolio-gold/10 transition-colors"
              onClick={() => scrollTo("Contact")}
            >
              Get in Touch
            </button>
          </div>
          <div className="flex gap-8 mt-12">
            {[["7.01", "CGPA"], ["2+", "Projects"], ["1+", "Certifications"]].map(
              ([val, label]) => (
                <div key={label}>
                  <div className="font-serif text-[28px] font-bold text-portfolio-gold">
                    {val}
                  </div>
                  <div className="text-[12px] text-portfolio-muted tracking-widest uppercase">
                    {label}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="relative animate-float">
            <div className="w-[320px] h-[320px] rounded-full bg-gradient-to-br from-portfolio-gold/15 to-[#1e3c78]/30 border-2 border-portfolio-border flex items-center justify-center relative">
              <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#1a2035] to-[#0d1220] border border-portfolio-gold/15 flex items-center justify-center text-[100px]">
                👨‍💻
              </div>
              {/* Orbiting dots */}
              {[0, 72, 144, 216, 288].map((deg, i) => (
                <div
                  key={i}
                  className={cn(
                    "absolute w-2.5 h-2.5 rounded-full",
                    i % 2 === 0 ? "bg-portfolio-gold" : "bg-portfolio-gold/40"
                  )}
                  style={{
                    top: `${50 - 50 * Math.cos((deg * Math.PI) / 180)}%`,
                    left: `${50 + 50 * Math.sin((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
            
            {/* Floating tech badges */}
            <TechBadge label="React" top="10%" right="-20%" icon={<Code size={14} />} />
            <TechBadge label="MongoDB" bottom="15%" right="-18%" icon={<Database size={14} />} />
            <TechBadge label="Next.js" top="20%" left="-20%" icon={<Layers size={14} />} />
            <TechBadge label="NestJS" bottom="10%" left="-15%" icon={<Server size={14} />} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TechBadgeProps {
  label: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  icon: React.ReactNode;
}

function TechBadge({ label, top, bottom, left, right, icon }: TechBadgeProps) {
  return (
    <div
      className="absolute bg-[#0a0e1a]/90 border border-portfolio-border rounded-lg px-3.5 py-2 text-[13px] font-semibold text-portfolio-gold backdrop-blur-md whitespace-nowrap flex items-center gap-2"
      style={{ top, bottom, left, right }}
    >
      {icon}
      {label}
    </div>
  );
}

