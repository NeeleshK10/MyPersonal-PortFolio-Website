import { Calendar, ExternalLink, Github } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import airquality from "@/assets/project-airquality.jpg";
import expense from "@/assets/project-expense.jpg";

interface Project {
  title: string;
  description: string;
  duration: string;
  image: string;
  github_url?: string;
  tech_stack: string[];
}

const projects: Project[] = [
  {
    title: "Air Quality Monitoring",
    description: "Real-time air quality dashboard pulling live sensor data, visualizing AQI trends, and surfacing actionable health insights.",
    duration: "Aug 2025",
    image: airquality,
    github_url: "https://github.com/NeeleshK10",
    tech_stack: ["React", "Node.js", "MongoDB", "Chart.js"],
  },
  {
    title: "Expense Tracker",
    description: "Full-stack expense management app with category analytics, budgeting, and secure auth.",
    duration: "Jun 2025",
    image: expense,
    github_url: "https://github.com/NeeleshK10",
    tech_stack: ["Spring Boot", "MySQL", "React", "Tailwind"],
  },
];

const ProjectCard = ({ p, idx }: { p: Project; idx: number }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 100}ms` }}
      className={`group bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-smooth ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-3">{p.title}</h3>
        <div className="flex flex-wrap items-center gap-3 mb-3 text-xs sm:text-sm">
          {p.github_url && (
            <a
              href={p.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              <Github className="w-4 h-4" /> GitHub <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <span className="inline-flex items-center gap-1 text-muted-foreground">
            <Calendar className="w-4 h-4" /> {p.duration}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech_stack.map(t => (
            <span key={t} className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-secondary text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="py-14 sm:py-20 px-4">
    <div className="container-x max-w-5xl">
      <SectionHeading
        title="Projects"
        description="Real-world applications combining backend engineering, data analysis, and modern frontend technologies."
      />
      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {projects.map((p, i) => <ProjectCard key={p.title} p={p} idx={i} />)}
      </div>
    </div>
  </section>
);

export default Projects;
