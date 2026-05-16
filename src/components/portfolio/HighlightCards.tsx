import { GraduationCap, Code2, Lightbulb, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CARDS = [
  { icon: GraduationCap, gradient: "gradient-blue", title: "Education", desc: "Computer Science Engineering student at RIT Chennai, building a strong foundation in software development, data structures, and system design." },
  { icon: Code2, gradient: "gradient-purple", title: "Specialization", desc: "Backend-Frontend full stack development with expertise in Java Spring Boot, REST APIs, and modern frontend technologies." },
  { icon: Lightbulb, gradient: "gradient-green", title: "Interest", desc: "Passionate about building scalable, efficient, and maintainable software systems that solve real-world problems." },
  { icon: Rocket, gradient: "gradient-orange", title: "Goal", desc: "Aspiring to become a proficient software engineer, creating high-performance applications and continuously learning new technologies." },
];

const Card = ({ card, idx }: { card: typeof CARDS[0]; idx: number }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const Icon = card.icon;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 100}ms` }}
      className={`group bg-card border border-border rounded-3xl p-5 sm:p-6 shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-smooth ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${card.gradient} flex items-center justify-center shadow-soft mb-3 sm:mb-4`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-2">{card.title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
    </div>
  );
};

const HighlightCards = () => (
  <section className="py-12 sm:py-16 px-4">
    <div className="container-x max-w-5xl grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((c, i) => <Card key={c.title} card={c} idx={i} />)}
    </div>
  </section>
);

export default HighlightCards;
