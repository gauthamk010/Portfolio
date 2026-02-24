import AnimatedSection from "./AnimatedSection";
import {
  Database,
  Cpu,
  Shield,
  Network,
  Palette,
  Component,
  Brain,
  BarChart3,
} from "lucide-react";

const skills = [
  {
    name: "React",
    category: "Frontend",
    icon: "devicon-react-original colored",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "devicon-nextjs-plain text-portfolio-text",
  },
  {
    name: "TailwindCSS",
    category: "Frontend",
    icon: "devicon-tailwindcss-original colored",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "devicon-bootstrap-plain colored",
  },
  {
    name: "Mantine",
    category: "Frontend",
    icon: <Palette size={28} className="text-portfolio-gold" />,
  },
  {
    name: "ShadCN",
    category: "Frontend",
    icon: <Component size={28} className="text-portfolio-gold" />,
  },
  {
    name: "React Native",
    category: "Frontend",
    icon: "devicon-react-original colored",
  },
  { name: "HTML5", category: "Languages", icon: "devicon-html5-plain colored" },
  { name: "CSS3", category: "Languages", icon: "devicon-css3-plain colored" },
  {
    name: "JavaScript",
    category: "Languages",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "TypeScript",
    category: "Languages",
    icon: "devicon-typescript-plain colored",
  },
  {
    name: "NestJS",
    category: "Backend",
    icon: "devicon-nestjs-original colored",
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: "devicon-express-original text-portfolio-text",
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "devicon-mongodb-plain colored",
  },
  {
    name: "SQL / DBMS Basics",
    category: "Database",
    icon: <Database size={28} className="text-portfolio-gold" />,
  },
  {
    name: "Python",
    category: "Languages",
    icon: "devicon-python-plain colored",
  },
  { name: "Java", category: "Languages", icon: "devicon-java-plain colored" },
  { name: "C", category: "Languages", icon: "devicon-c-plain colored" },
  {
    name: "Arduino",
    category: "Languages",
    icon: "devicon-arduino-plain colored",
  },
  { name: "R", category: "Languages", icon: "devicon-r-plain colored" },
  {
    name: "Verilog",
    category: "Languages",
    icon: <Cpu size={28} className="text-portfolio-gold" />,
  },
  {
    name: "SystemVerilog",
    category: "Languages",
    icon: <Cpu size={28} className="text-portfolio-gold" />,
  },
  { name: "MATLAB", category: "Tools", icon: "devicon-matlab-plain colored" },
  { name: "VS Code", category: "Tools", icon: "devicon-vscode-plain colored" },
  { name: "Postman", category: "Tools", icon: "devicon-postman-plain colored" },
  { name: "Git", category: "Tools", icon: "devicon-git-plain colored" },
  {
    name: "GitHub",
    category: "Tools",
    icon: "devicon-github-original text-portfolio-text",
  },
  { name: "GitLab", category: "Tools", icon: "devicon-gitlab-plain colored" },
  {
    name: "Wireshark",
    category: "Tools",
    icon: <Shield size={28} className="text-portfolio-gold" />,
  },
  {
    name: "GNS3",
    category: "Tools",
    icon: <Network size={28} className="text-portfolio-gold" />,
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    icon: <Brain size={28} className="text-portfolio-gold" />,
  },
  {
    name: "Scikit Learn",
    category: "AI/ML",
    icon: "devicon-scikitlearn-plain colored",
  },
  {
    name: "Pandas",
    category: "AI/ML",
    icon: "devicon-pandas-plain text-portfolio-text",
  },
  { name: "NumPy", category: "AI/ML", icon: "devicon-numpy-plain colored" },
  {
    name: "Matplotlib",
    category: "AI/ML",
    icon: "devicon-matplotlib-plain colored",
  },
  {
    name: "Seaborn",
    category: "AI/ML",
    icon: <BarChart3 size={28} className="text-portfolio-gold" />,
  },
];

function SkillCard({
  name,
  icon,
}: {
  name: string;
  icon: React.ReactNode | string;
}) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border-2 border-portfolio-border bg-portfolio-card px-5 py-5 text-center transition-[transform,border-color,box-shadow,background] duration-300 hover:-translate-y-1 hover:border-portfolio-gold/60 hover:shadow-[0_8px_24px_rgba(201,168,76,0.15)] hover:bg-gradient-to-br hover:from-portfolio-gold/10 hover:to-transparent">
      {typeof icon === "string" ? (
        <i className={`${icon} text-[28px]`} aria-hidden="true" />
      ) : (
        icon
      )}
      <span className="text-portfolio-text text-[16px] font-medium">
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const categories = [
    "Frontend",
    "Backend",
    "Database",
    "Languages",
    "AI/ML",
    "Tools",
  ];

  return (
    <section id="skills" className="py-[100px] px-8 relative z-10">
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">
              Expertise
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">
              Skills & Technologies
            </h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          if (!catSkills.length) return null;
          return (
            <AnimatedSection key={cat} className="mb-10">
              <div className="bg-portfolio-card border border-portfolio-border rounded-2xl p-8 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-[border-color,box-shadow] duration-300">
                <h3 className="font-serif text-[18px] text-portfolio-gold mb-6 flex items-center gap-2.5">
                  <span className="w-1 h-5 bg-portfolio-gold rounded-sm inline-block" />
                  {cat}
                </h3>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4">
                  {catSkills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                    />
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
