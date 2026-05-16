import { ReactNode } from "react";

const SectionHeading = ({ title, description }: { title: string; description?: ReactNode }) => (
  <div className="text-center mb-10 sm:mb-12 px-2">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">{title}</h2>
    <div className="mx-auto h-1 w-20 sm:w-24 rounded-full gradient-primary mb-4 sm:mb-5" />
    {description && (
      <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base lg:text-lg leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
