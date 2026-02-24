import AnimatedSection from "./AnimatedSection";
import { GraduationCap, School } from "lucide-react";

const education = [
  {
    period: "2019 – 2023",
    title: "B.Tech — Electronics & Communications",
    place: "PES University, Ring Road Campus",
    detail: "CGPA: 7.01",
    courses: [
      "Signals and Systems",
      "Digital Signal Processing",
      "Information Theory & Coding",
      "Wireless Networking",
      "Concepts of TCP/IP Architecture",
      "Machine Learning",
      "Cryptography",
      "Cyber Security",
    ],
    icon: <GraduationCap size={24} className="text-portfolio-gold" />,
  },
  {
    period: "2016 – 2018",
    title: "ISC — Class XII",
    place: "Frank Anthony Public School, Bengaluru",
    courses: ["Physics", "Chemistry", "Mathematics", "Biology"],
    detail: "Aggregate: 87.6%",
    icon: <School size={24} className="text-portfolio-gold" />,
  },
  {
    period: "2004 – 2016",
    title: "ICSE — Class X",
    place: "Frank Anthony Public School, Bengaluru",
    detail: "Aggregate: 91.8%",
    description:
      "Acquired General Proficiency in 2nd Language Kannada (2004–2014)",
    icon: <School size={24} className="text-portfolio-gold" />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-[100px] px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">
              Background
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">
              Education
            </h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[24px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-portfolio-gold to-transparent" />

          {education.map((edu, i) => (
            <AnimatedSection key={i}>
              <div className="flex gap-10 mb-10 pl-[60px] relative">
                {/* Timeline Dot */}
                <div className="absolute left-[14px] top-[6px] w-[22px] h-[22px] rounded-full bg-portfolio-bg border-[3px] border-portfolio-gold z-10" />

                <div className="flex-1 bg-portfolio-card border border-portfolio-border rounded-2xl p-8 hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-[transform,border-color,box-shadow] duration-300">
                  <div className="flex justify-between items-start flex-wrap gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      {edu.icon}
                      <h3 className="font-serif text-[20px] font-bold text-portfolio-text">
                        {edu.title}
                      </h3>
                    </div>
                    <span className="bg-portfolio-gold/15 text-portfolio-gold px-3.5 py-1 rounded-full text-[13px] font-medium">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-portfolio-muted text-[14px] mb-2">
                    {edu.place}
                  </p>
                  <p className="text-portfolio-gold font-semibold text-[15px] mb-4">
                    {edu.detail}
                  </p>
                  {edu.description && (
                    <p className="text-portfolio-muted text-[14px] italic mb-4">
                      {edu.description}
                    </p>
                  )}
                  {edu.courses && (
                    <div className="flex gap-2 flex-wrap">
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="bg-portfolio-gold/10 text-portfolio-gold border border-portfolio-gold/25 px-3 py-1 rounded-full text-[12px] font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
