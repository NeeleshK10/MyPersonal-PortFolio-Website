import { Download, Mail } from "lucide-react";
import lightHero from "@/assets/hero-light.png";
import darkHero from "@/assets/hero-dark.png";
import ToolsTechnologies from "./ToolsTechnologies";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen bg-background text-foreground pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden"
  >
    <div className="container-x">
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center min-h-[60vh] lg:min-h-[700px]">
        {/* LEFT */}
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-3 sm:space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Hi, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent break-words">
              Neelesh K
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Full Stack Developer | CSE Student | Problem Solver
            </p>
            <p className="text-sm sm:text-base md:text-lg font-mono border-l-4 border-primary pl-3 sm:pl-4 text-left mx-auto lg:mx-0 max-w-xs sm:max-w-none">
              I build things for the web
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition-smooth"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl border border-border bg-card text-foreground text-sm sm:text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-smooth inline-flex items-center"
            >
              <Download className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Resume
            </a>
            <a
              href="#contact"
              className="px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-2xl border border-border bg-card text-foreground text-sm sm:text-base font-semibold hover:bg-accent hover:text-accent-foreground transition-smooth inline-flex items-center"
            >
              <Mail className="inline w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-2xl rounded-3xl border border-border overflow-hidden bg-card shadow-2xl p-3 sm:p-4">
            <img
              src={lightHero}
              alt="Hero illustration"
              className="block dark:hidden w-full h-auto object-contain rounded-2xl"
            />
            <img
              src={darkHero}
              alt="Hero illustration"
              className="hidden dark:block w-full h-auto object-contain rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 sm:mt-20">
        <ToolsTechnologies />
      </div>
    </div>
  </section>
);

export default Hero;
