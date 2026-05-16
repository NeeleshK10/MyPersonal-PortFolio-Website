import { Server, Monitor, Database, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CATEGORIES = [
  { icon: Server, gradient: "gradient-blue", title: "Backend & Frameworks", skills: ["Spring Boot", "Node.js", "REST APIs"] },
  { icon: Monitor, gradient: "gradient-purple", title: "Frontend Technologies", skills: ["React.js", "Vue.js", "Tailwind CSS"] },
  { icon: Database, gradient: "gradient-green", title: "Databases", skills: ["MySQL", "MongoDB"] },
  { icon: Wrench, gradient: "gradient-orange", title: "Tools & Technologies", skills: ["Git", "GitHub", "GitLab", "Docker", "VS Code"] },
];

const Card = ({ cat, idx }: { cat: typeof CATEGORIES[0]; idx: number }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const Icon = cat.icon;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 100}ms` }}
      className={`bg-card border border-border rounded-3xl p-5 sm:p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-smooth ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${cat.gradient} flex items-center justify-center shadow-soft mb-3 sm:mb-4`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">{cat.title}</h3>
      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map(s => (
          <span key={s} className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-secondary border border-border hover:scale-105 transition-smooth">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="py-14 sm:py-20 px-4">
    <div className="container-x max-w-5xl">
      <SectionHeading title="Technical Skills" description="Tools and technologies I work with to design, build and ship reliable applications." />
      <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
        {CATEGORIES.map((c, i) => <Card key={c.title} cat={c} idx={i} />)}
      </div>
    </div>
  </section>
);

export default Skills;
