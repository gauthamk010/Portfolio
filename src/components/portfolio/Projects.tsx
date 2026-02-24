import AnimatedSection from "./AnimatedSection";
import {
  Settings,
  GraduationCap,
  ShoppingCart,
  Brain,
  Search,
  Image,
  Layers,
  Music,
  Briefcase,
} from "lucide-react";

const personalProjects = [
  {
    title: "Student Management System",
    description:
      "A full-stack application for managing student records, built with a modern tech stack and clean architecture.",
    tags: ["React", "TailwindCSS", "NestJS", "MongoDB"],
    icon: <GraduationCap size={40} className="text-portfolio-text" />,
  },
  {
    title: "Library Maintenance System",
    description:
      "A mobile application for managing library inventory and book lending, featuring a native mobile experience.",
    tags: ["React Native", "StyleSheet API", "NestJS", "MongoDB"],
    icon: <Layers size={40} className="text-portfolio-text" />,
  },
  {
    title: "E-Commerce Website",
    description:
      "A scalable and responsive e-commerce UI design with static server data, focusing on modern UI/UX patterns.",
    tags: ["React", "TailwindCSS"],
    icon: <ShoppingCart size={40} className="text-portfolio-text" />,
  },
  {
    title: "Pitch Tracking Algorithms via Python",
    description:
      "Implemented pitch detection using Librosa, Crepe libraries and via Signal Autocorrelation for audio analysis.",
    tags: ["Python", "Librosa", "Crepe", "Signal Processing"],
    icon: <Music size={40} className="text-portfolio-text" />,
  },
  {
    title: "Digital Twin of a DC Motor",
    description:
      "Interlinked hardware components of a DC driven brush motor with a software projection. Arduino IDE drove the hardware while Processing v4.0 rendered sensor outputs on a custom GUI panel enabling two-way hardware communication.",
    tags: ["Arduino", "Processing v4.0", "Hardware", "GUI", "IoT"],
    icon: <Settings size={40} className="text-portfolio-text" />,
  },
  {
    title: "Breast Cancer Tumour Classification Model",
    description:
      "A machine learning model employing Random Forest Classifier for classifying breast cancer tumours.",
    tags: ["Python", "Scikit Learn", "Random Forest"],
    icon: <Brain size={40} className="text-portfolio-text" />,
  },
  {
    title: "Diamond Price Analysis",
    description:
      "Analyzing diamond prices by their salient features using a simple Linear Regression Model.",
    tags: ["Python", "Linear Regression", "Pandas"],
    icon: <Search size={40} className="text-portfolio-text" />,
  },
  {
    title: "Image Colour Cluster Segregation",
    description:
      "Segregating image colour clusters of images using OpenCV2 for visual analysis and processing.",
    tags: ["Python", "OpenCV2", "Image Processing"],
    icon: <Image size={40} className="text-portfolio-text" />,
  },
  {
    title: "Image Segmentation via K-Means",
    description:
      "Performing image segmentation using K-means clustering algorithm for pattern recognition.",
    tags: ["Python", "K-Means", "Image Segmentation"],
    icon: <Image size={40} className="text-portfolio-text" />,
  },
];

const workProjects = [
  {
    title: "Skillmine - Project HR360",
    description:
      "Building and maintaining applications used for HROps improvement and productivity.",
    tags: [
      "React",
      "Mantine v7",
      "BootstrapCSS",
      "SCSS",
      "React Native",
      "Stylesheet API",
      "NestJS",
      "MongoDB",
      "Python",
      "OpenAI API microservices",
      "AI Prompt Engineering",
    ],
    icon: <Briefcase size={40} className="text-portfolio-text" />,
    subProjects: [
      {
        name: "Spotlight",
        detail:
          "Employee Management application — coordinated with a team to build the UI and server-side logic for the Rewards and Recognition Module.",
        icon: (
          <img
            src="/spotlight.png"
            alt="Spotlight"
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        ),
      },
      {
        name: "Questlight",
        detail:
          "Talent Acquisition, Recruitment and Onboarding application — coordinated with a team to improve application stability and product reliability.",
        icon: (
          <img
            src="/questlight"
            alt="Questlight"
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        ),
      },
      {
        name: "FaceAuth",
        detail:
          "Employee attendance tracking system — built two UIs - for Mobile view and for Tablet view. Allowed for mobile view to be used by employees working at client locations or WFH for marking attendance and for tablet view to be used by employees who are WFO, along with implementation of personal and organization-wide audit logs.",
        icon: (
          <img
            src="/faceAuth.png"
            alt="FaceAuth"
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        ),
      },
    ],
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof personalProjects)[number];
}) {
  return (
    <AnimatedSection>
      <div className="bg-portfolio-card border border-portfolio-border rounded-[20px] p-9 h-full hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-[transform,border-color,box-shadow] duration-300">
        <div className="mb-5">{project.icon}</div>
        <h3 className="font-serif text-[20px] font-bold mb-3 text-portfolio-text">
          {project.title}
        </h3>
        <p className="text-[14px] leading-[1.75] text-portfolio-muted mb-5">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((t) => (
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
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-[100px] px-8 relative z-10 bg-portfolio-section-alt"
    >
      <div className="max-w-[1200px] mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-portfolio-gold text-[13px] tracking-[3px] uppercase mb-3">
              Work
            </p>
            <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-bold">
              Featured Projects
            </h2>
            <div className="w-[60px] h-[3px] bg-portfolio-gold mx-auto mt-5 rounded-sm" />
          </div>
        </AnimatedSection>

        {/* Work Projects */}
        <AnimatedSection className="mb-14">
          <h3 className="font-serif text-[22px] text-portfolio-gold mb-8 flex items-center gap-2.5">
            <span className="w-1 h-6 bg-portfolio-gold rounded-sm inline-block" />
            Real-World Projects
          </h3>
        </AnimatedSection>
        {workProjects.map((project) => (
          <AnimatedSection key={project.title} className="mb-10">
            <div className="bg-portfolio-card border border-portfolio-border rounded-[20px] p-9 hover:-translate-y-1 hover:border-portfolio-gold/50 hover:shadow-[0_16px_40px_rgba(201,168,76,0.12)] transition-[transform,border-color,box-shadow] duration-300">
              <div className="mb-5">{project.icon}</div>
              <h3 className="font-serif text-[22px] font-bold mb-2 text-portfolio-text">
                {project.title}
              </h3>
              <p className="text-[15px] leading-[1.75] text-portfolio-muted mb-6">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-portfolio-gold/10 text-portfolio-gold border border-portfolio-gold/25 px-3 py-1 rounded-full text-[12px] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Sub-projects */}
              <div className="grid md:grid-cols-3 gap-5">
                {project.subProjects.map((sub) => (
                  <div
                    key={sub.name}
                    className="border border-portfolio-border rounded-xl p-5 bg-portfolio-bg/50 hover:border-portfolio-gold/40 transition-[transform,border-color,box-shadow] duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-14 h-14 rounded-xl bg-stone-400 dark:bg-white/10 border border-portfolio-border shadow-sm flex items-center justify-center shrink-0">
                        {sub.icon}
                      </div>
                      <h4 className="font-serif text-[16px] font-semibold text-portfolio-text">
                        {sub.name}
                      </h4>
                    </div>
                    <p className="text-[13px] leading-[1.7] text-portfolio-muted">
                      {sub.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}

        {/* Personal Projects */}
        <AnimatedSection className="mb-8 mt-14">
          <h3 className="font-serif text-[22px] text-portfolio-gold mb-0 flex items-center gap-2.5">
            <span className="w-1 h-6 bg-portfolio-gold rounded-sm inline-block" />
            Personal Projects
          </h3>
        </AnimatedSection>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(340px,1fr))] gap-7">
          {personalProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
