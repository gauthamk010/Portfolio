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

function SectionLoader() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      {/* Section heading skeleton */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-1.5 h-7 bg-portfolio-gold/40 rounded-sm animate-pulse" />
        <div className="h-6 w-52 bg-portfolio-gold/10 rounded-lg animate-pulse" />
      </div>

      {/* Card skeletons */}
      <div className="grid md:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="bg-portfolio-card border border-portfolio-border rounded-2xl p-8 animate-pulse"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className="w-10 h-10 rounded-xl bg-portfolio-gold/10 mb-5" />
            <div className="h-4 w-3/4 bg-portfolio-gold/10 rounded-md mb-4" />
            <div className="space-y-2.5">
              <div className="h-3 w-full bg-portfolio-border/50 rounded-md" />
              <div className="h-3 w-5/6 bg-portfolio-border/50 rounded-md" />
              <div className="h-3 w-2/3 bg-portfolio-border/50 rounded-md" />
            </div>
            <div className="flex gap-2 mt-6">
              <div className="h-5 w-14 bg-portfolio-gold/10 rounded-full" />
              <div className="h-5 w-16 bg-portfolio-gold/10 rounded-full" />
              <div className="h-5 w-12 bg-portfolio-gold/10 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Loading text */}
      <div className="flex items-center justify-center gap-3 mt-14">
        <div className="w-5 h-5 rounded-full border-2 border-portfolio-border border-t-portfolio-gold animate-spin" />
        <p className="text-sm text-portfolio-muted tracking-wide">
          Gathering information…
        </p>
      </div>
    </div>
  );
}

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
        <Suspense fallback={<SectionLoader />}>
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
