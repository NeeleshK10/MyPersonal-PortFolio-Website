import { Building2, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TECH = ["Java", "JavaScript", "Spring Boot", "MySQL", "React", "Vue.js", "Git"];
const BULLETS = [
  "Gained hands-on experience in full stack development using Java and JavaScript.",
  "Worked with Spring Boot and MySQL to build and manage backend services.",
  "Developed interactive frontend components using React and Vue.js.",
  "Used Git for version control and collaborated on project workflows.",
];

const Internship = () => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section id="experience" className="py-14 sm:py-20 px-4">
      <div className="container-x max-w-3xl">
        <SectionHeading title="Internship Experience" />
        <div
          ref={ref}
          className={`bg-card border border-border rounded-3xl p-5 sm:p-6 md:p-8 shadow-soft hover:shadow-elevated transition-smooth ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-start gap-3 sm:gap-4 mb-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl gradient-primary flex items-center justify-center shadow-soft shrink-0">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-xl font-bold leading-tight">Full Stack Development Intern</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Precision Informatic Private Limited · Chennai</p>
              <p className="text-xs sm:text-sm text-primary font-medium inline-flex items-center gap-1 mt-1">
                <Calendar className="w-3.5 h-3.5" /> January 2026 – March 2026
              </p>
            </div>
          </div>
          <ul className="space-y-2 mb-5">
            {BULLETS.map(b => (
              <li key={b} className="flex gap-2 text-xs sm:text-sm text-muted-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-1.5">
            {TECH.map(t => (
              <span key={t} className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-secondary">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
