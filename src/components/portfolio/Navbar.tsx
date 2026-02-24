import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Certifications",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const rafRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);

        // If scrolled to bottom of page, highlight Contact
        const atBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 50;
        if (atBottom) {
          setActiveSection("contact");
          return;
        }

        const sections = [...navLinks.map((s) => s.toLowerCase()), "contact"];
        for (const section of sections.reverse()) {
          const el = document.getElementById(section);
          if (el && window.scrollY >= el.offsetTop - 350) {
            setActiveSection(section);
            break;
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-100 transition-all duration-400 px-8 border-b-4",
          scrolled
            ? "bg-portfolio-nav-bg backdrop-blur-md border-portfolio-border"
            : "bg-transparent border-transparent",
        )}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-[68px]">
          <div className="font-serif text-[20px] font-bold text-portfolio-gold tracking-[1px] border-2 border-portfolio-gold rounded-full w-[44px] h-[44px] flex items-center justify-center">
            GK
          </div>

          {/* Desktop nav links */}
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={cn(
                  "text-[14px] font-medium tracking-[0.5px] cursor-pointer transition-colors relative",
                  activeSection === link.toLowerCase()
                    ? "text-portfolio-gold"
                    : "text-portfolio-muted hover:text-portfolio-gold",
                )}
              >
                {link}
                {activeSection === link.toLowerCase() && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-portfolio-gold rounded-[1px]" />
                )}
              </button>
            ))}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-portfolio-border text-portfolio-muted hover:text-portfolio-gold hover:border-portfolio-gold/50 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="hidden lg:block bg-gradient-to-br from-portfolio-gold to-[#e8c96a] text-portfolio-bg px-5 py-2 rounded-md font-semibold text-[13px] hover:opacity-90 transition-opacity transform hover:-translate-y-[1px]"
              onClick={() => scrollTo("Contact")}
            >
              Contact Me
            </button>

            {/* Hamburger button — mobile & tablet only */}
            <button
              className="lg:hidden p-2 rounded-lg border border-portfolio-border text-portfolio-muted hover:text-portfolio-gold hover:border-portfolio-gold/50 transition-all duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet slide-down menu */}
      <div
        className={cn(
          "fixed inset-0 z-90 lg:hidden transition-all duration-300",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={cn(
            "absolute top-[68px] left-0 right-0 bg-portfolio-nav-bg backdrop-blur-md border-b-4 border-portfolio-border shadow-xl transition-transform duration-300 origin-top",
            menuOpen ? "translate-y-0" : "-translate-y-4",
          )}
        >
          <div className="max-w-[1200px] mx-auto px-8 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className={cn(
                  "text-left text-[16px] font-medium py-3 px-4 rounded-lg transition-all duration-200",
                  activeSection === link.toLowerCase()
                    ? "text-portfolio-gold bg-portfolio-gold/10"
                    : "text-portfolio-muted hover:text-portfolio-gold hover:bg-portfolio-gold/5",
                )}
              >
                {link}
              </button>
            ))}
            <div className="border-t border-portfolio-border mt-3 pt-4">
              <button
                className="w-full bg-gradient-to-br from-portfolio-gold to-[#e8c96a] text-portfolio-bg px-5 py-3 rounded-md font-semibold text-[14px] hover:opacity-90 transition-opacity"
                onClick={() => scrollTo("Contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
