import { Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TIMELINE = [
  { year: "2025 - 2026", title: "Advanced Scalable Systems", desc: "Developing scalable, production-ready applications with optimized databases, clean architecture, and modern deployment practices like Docker." },
  { year: "2024 - 2025", title: "Full Stack Development Growth", desc: "Expanded into full stack development using React and Vue.js. Built dynamic applications integrating frontend with backend APIs and improved system design skills." },
  { year: "2023 - 2024", title: "Backend Development Foundation", desc: "Started backend development by building RESTful APIs using Spring Boot, Node.js, Flask, and FastAPI. Learned database integration, authentication, and core backend concepts." },
];

const Item = ({ entry, idx }: { entry: typeof TIMELINE[0]; idx: number }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 120}ms` }}
      className={`relative pl-10 sm:pl-12 pb-8 sm:pb-10 transition-all duration-700 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      <div className="absolute left-3 top-2 w-4 h-4 rounded-full gradient-primary shadow-glow ring-4 ring-background" />
      <div className="bg-card border border-border rounded-2xl p-4 sm:p-5 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-smooth">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary mb-2">
          <Calendar className="w-4 h-4" /> {entry.year}
        </div>
        <h3 className="text-base sm:text-lg font-bold mb-2">{entry.title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{entry.desc}</p>
      </div>
    </div>
  );
};

const Journey = () => (
  <section id="journey" className="py-14 sm:py-20 px-4">
    <div className="container-x max-w-3xl">
      <SectionHeading title="My Journey" />
      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-0.5 gradient-primary rounded-full" />
        {TIMELINE.map((e, i) => <Item key={e.year} entry={e} idx={i} />)}
      </div>
    </div>
  </section>
);

export default Journey;
