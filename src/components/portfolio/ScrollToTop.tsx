import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full gradient-primary text-white flex items-center justify-center shadow-glow hover:scale-110 transition-smooth"
      style={{ animation: "bounce-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
