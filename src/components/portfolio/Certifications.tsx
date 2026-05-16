import { useEffect, useState } from "react";
import { X, ExternalLink, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import js from "@/assets/certs/js.jpeg";
import oops from "@/assets/certs/oops.jpeg";
import dl from "@/assets/certs/dl.jpeg";
import powerbi from "@/assets/certs/powerbi.jpeg";
import aws from "@/assets/certs/aws.jpeg";
import ml from "@/assets/certs/ml.jpeg";
import pds from "@/assets/certs/pds.jpeg";
import mongo from "@/assets/certs/mongo.jpeg";
import ai from "@/assets/certs/ai.jpeg";
import aiethics from "@/assets/certs/aiethics.jpeg";
import introsql from "@/assets/certs/introsql.jpeg";
import javabasics from "@/assets/certs/javabasics.png";
import sqlbasics from "@/assets/certs/sqlbasics.png";

interface Cert {
  title: string;
  provider: string;
  date: string;
  image: string;
  tags: string[];
}

const certifications: Cert[] = [
  { title: "Introduction to SQL", provider: "Simplilearn SkillUp", date: "May 2026", image: introsql, tags: ["SQL", "Database"] },
  { title: "Java Basics - Programming Course (Hands-On)", provider: "SkillRack", date: "May 2026", image: javabasics, tags: ["Java", "Programming"] },
  { title: "SQL - Basics (Standard)", provider: "SkillRack", date: "May 2026", image: sqlbasics, tags: ["SQL", "Database"] },
  { title: "JavaScript for Beginners", provider: "Simplilearn SkillUp", date: "Mar 2026", image: js, tags: ["JavaScript", "Web"] },
  { title: "OOPs in Java", provider: "Simplilearn SkillUp", date: "Mar 2026", image: oops, tags: ["Java", "OOP"] },
  { title: "Intro to Deep Learning", provider: "Kaggle", date: "Mar 2024", image: dl, tags: ["Deep Learning", "AI"] },
  { title: "Power BI Data Modelling Basics", provider: "Microsoft & Simplilearn", date: "Aug 2025", image: powerbi, tags: ["Power BI", "Data"] },
  { title: "AWS VPN — Troubleshooting", provider: "AWS Training & Certification", date: "Aug 2025", image: aws, tags: ["AWS", "Cloud"] },
  { title: "Intro to Machine Learning", provider: "Kaggle", date: "Mar 2024", image: ml, tags: ["ML", "Python"] },
  { title: "Python for Data Science", provider: "Great Learning", date: "Jul 2024", image: pds, tags: ["Python", "Data Science"] },
  { title: "MongoDB Basics for Students", provider: "MongoDB", date: "Jun 2025", image: mongo, tags: ["MongoDB", "Database"] },
  { title: "Introduction to Artificial Intelligence", provider: "Simplilearn SkillUp", date: "Oct 2024", image: ai, tags: ["AI"] },
  { title: "Intro to AI Ethics", provider: "Kaggle", date: "Oct 2024", image: aiethics, tags: ["AI", "Ethics"] },
];

const CertCard = ({ c, idx, onView }: { c: Cert; idx: number; onView: () => void }) => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${idx * 60}ms` }}
      className={`group relative flex flex-col rounded-3xl overflow-hidden border border-border bg-card/70 dark:bg-card/40 backdrop-blur-xl shadow-soft hover:shadow-elevated hover:-translate-y-1.5 transition-smooth ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <button onClick={onView} className="aspect-video overflow-hidden bg-muted block">
        <img
          src={c.image}
          alt={c.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
      </button>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs text-primary font-semibold mb-2">
          <Award className="w-4 h-4" /> {c.provider}
        </div>
        <h3 className="text-base sm:text-lg font-bold leading-snug mb-1">{c.title}</h3>
        <p className="text-xs text-muted-foreground mb-3">{c.date}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {c.tags.map(t => (
            <span key={t} className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-secondary text-secondary-foreground">{t}</span>
          ))}
        </div>
        <button
          onClick={onView}
          className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold gradient-primary text-primary-foreground shadow-soft hover:shadow-glow transition-smooth"
        >
          View Certificate <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [active, setActive] = useState<Cert | null>(null);

  useEffect(() => {
    if (active) {
      const orig = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = orig; };
    }
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certifications" className="py-14 sm:py-20 px-4">
      <div className="container-x max-w-6xl">
        <SectionHeading
          title="My Certifications"
          description="A reflection of my commitment to continuous learning — credentials earned across programming, AI, cloud, and data."
        />
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <CertCard key={c.title} c={c} idx={i} onView={() => setActive(c)} />
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl bg-card border border-border rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated animate-scale-in"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-smooth"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="bg-muted">
              <img
                src={active.image}
                alt={active.title}
                className="w-full h-auto max-h-[75vh] sm:max-h-[80vh] object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 border-t border-border">
              <h3 className="text-base sm:text-xl font-bold">{active.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{active.provider} • {active.date}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
