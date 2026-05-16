import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ITEMS = [
  { icon: Mail, gradient: "gradient-blue", label: "Email", value: "neeleshkannan30@gmail.com", href: "mailto:neeleshkannan30@gmail.com" },
  { icon: Phone, gradient: "gradient-purple", label: "Phone", value: "+91 8939111426", href: "tel:+918939111426" },
  { icon: MapPin, gradient: "gradient-green", label: "Location", value: "Chennai, India" },
];

const SOCIALS = [
  { icon: Github, label: "GitHub", href: "https://github.com/NeeleshK10" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/neeleshk1011" },
];

const Contact = () => {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  return (
    <section id="contact" className="py-14 sm:py-20 px-4">
      <div className="container-x max-w-3xl">
        <SectionHeading
          title="Contact"
          description="Open to opportunities, collaborations, and meaningful conversations. Reach out for projects, internships, or any tech-related discussions."
        />
        <div
          ref={ref}
          className={`bg-card border border-border rounded-3xl p-5 sm:p-6 md:p-8 shadow-card transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
            {ITEMS.map(it => {
              const Icon = it.icon;
              const inner = (
                <div className="flex flex-col items-center text-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-2xl hover:bg-secondary/50 transition-smooth h-full">
                  <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${it.gradient} flex items-center justify-center shadow-soft`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 w-full">
                    <p className="text-[10px] sm:text-xs uppercase tracking-wide text-muted-foreground font-semibold">{it.label}</p>
                    <p className="text-xs sm:text-sm font-medium break-all">{it.value}</p>
                  </div>
                </div>
              );
              return it.href
                ? <a key={it.label} href={it.href} className="block">{inner}</a>
                : <div key={it.label}>{inner}</div>;
            })}
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-border">
            {SOCIALS.map(s => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-secondary flex items-center justify-center shadow-soft hover:gradient-primary hover:scale-110 transition-smooth"
                >
                  <Icon className="w-5 h-5 group-hover:text-white transition-smooth" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
