import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = ["About", "Skills", "Projects", "Experience", "Education", "Certifications"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((s) => s.toLowerCase());
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 350) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-100 transition-all duration-400 px-8 border-b",
        scrolled
          ? "bg-[rgba(10,14,26,0.92)] backdrop-blur-md border-portfolio-border"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px]">
        <div className="font-serif text-[22px] font-bold text-portfolio-gold tracking-[1px]">
          GK
        </div>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={cn(
                "text-[14px] font-medium tracking-[0.5px] cursor-pointer transition-colors relative",
                activeSection === link.toLowerCase()
                  ? "text-portfolio-gold"
                  : "text-portfolio-muted hover:text-portfolio-gold"
              )}
            >
              {link}
              {activeSection === link.toLowerCase() && (
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-portfolio-gold rounded-[1px]" />
              )}
            </button>
          ))}
        </div>
        <button
          className="bg-gradient-to-br from-portfolio-gold to-[#e8c96a] text-portfolio-bg px-5 py-2 rounded-md font-semibold text-[13px] hover:opacity-90 transition-opacity transform hover:-translate-y-[1px]"
          onClick={() => scrollTo("Contact")}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
}
