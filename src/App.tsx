import Navbar from "./components/portfolio/Navbar";
import Hero from "./components/portfolio/Hero";
import { lazy, Suspense } from "react";

// Lazy load below-the-fold sections to reduce initial JS bundle and improve FCP/LCP
const Skills = lazy(() => import("./components/portfolio/Skills"));
const Projects = lazy(() => import("./components/portfolio/Projects"));
const Experience = lazy(() => import("./components/portfolio/Experience"));
const Education = lazy(() => import("./components/portfolio/Education"));
const Languages = lazy(() => import("./components/portfolio/Languages"));
const Certifications = lazy(
  () => import("./components/portfolio/Certifications"),
);
const Contact = lazy(() => import("./components/portfolio/Contact"));
const Footer = lazy(() => import("./components/portfolio/Footer"));

function App() {
  return (
    <div className="bg-portfolio-bg min-h-screen font-sans text-portfolio-text overflow-x-hidden selection:bg-portfolio-gold selection:text-portfolio-bg transition-colors duration-300">
      {/* Skip to content — keyboard/SR accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-portfolio-gold focus:text-portfolio-bg focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>

      {/* Noise texture overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundSize: "200px",
        }}
      />

      {/* Radial glow — subtle in light, more visible in dark */}
      <div
        aria-hidden="true"
        className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(158,126,42,0.05)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_70%)] pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(30,60,120,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(30,60,120,0.15)_0%,transparent_70%)] pointer-events-none z-0"
      />

      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={null}>
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Languages />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
