import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/portfolio/Header";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import HighlightCards from "@/components/portfolio/HighlightCards";
import Journey from "@/components/portfolio/Journey";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import Internship from "@/components/portfolio/Internship";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import ScrollToTop from "@/components/portfolio/ScrollToTop";
import NightBackground from "@/components/portfolio/NightBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neelesh K. — Full Stack Developer Portfolio" },
      { name: "description", content: "Portfolio of Neelesh K. — Full Stack Developer & CSE Student. Java Spring Boot, React, Vue.js, Node.js projects, certifications, and experience." },
      { property: "og:title", content: "Neelesh K. — Full Stack Developer Portfolio" },
      { property: "og:description", content: "Full Stack Developer | CSE Student | Problem Solver" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background dark:bg-transparent relative overflow-x-hidden">
      <NightBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <HighlightCards />
        <Journey />
        <Projects />
        <Certifications />
        <Internship />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 sm:py-8 text-center text-xs sm:text-sm text-muted-foreground border-t border-border px-4">
        © {new Date().getFullYear()} Neelesh K. — Built with React & Tailwind
      </footer>
      <ScrollToTop />
    </div>
  );
}
