import { useEffect, useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import placeholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <section id="about" className="py-14 sm:py-20 px-4">
      <div className="container-x max-w-4xl">
        <SectionHeading title="About Me" />
        <div
          ref={ref}
          className={`flex flex-col items-center gap-6 sm:gap-8 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl gradient-primary opacity-30 blur-lg group-hover:opacity-60 transition-smooth" />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="View profile photo"
              className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-3xl overflow-hidden shadow-elevated transition-smooth hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <img
                src={placeholder}
                alt="Neelesh K."
                className="w-full h-full object-cover object-top transition-smooth group-hover:scale-110"
              />
            </button>
          </div>

          <div className="text-center max-w-2xl px-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Neelesh K.</h3>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Third-year Computer Science student specializing in full-stack development. Proficient in Java Spring Boot, React (Vite), Vue.js, and Node.js, with hands-on experience building RESTful APIs and working with relational databases.
            </p>
          </div>
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(false); }}
            aria-label="Close"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur text-white flex items-center justify-center transition-smooth focus:outline-none focus:ring-2 focus:ring-white/60"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <img
            src={placeholder}
            alt="Neelesh K."
            onClick={(e) => e.stopPropagation()}
            className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-2xl shadow-elevated animate-scale-in"
          />
        </div>
      )}
    </section>
  );
};

export default About;
