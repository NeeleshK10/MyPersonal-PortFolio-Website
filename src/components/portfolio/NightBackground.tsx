import bg from "@/assets/portfolio-night-bg.jpg";

const NightBackground = () => (
  <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 hidden dark:block overflow-hidden">
    <div className="absolute inset-0 bg-background" />
    <div
      className="absolute inset-0 bg-center bg-cover animate-bg-drift"
      style={{ backgroundImage: `url(${bg})`, filter: "brightness(0.7) saturate(0.95) blur(1px)" }}
    />
    <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-amber-400/20 blur-3xl animate-lamp-flicker" />
    <div className="absolute top-1/3 left-1/4 w-[380px] h-[380px] rounded-full bg-sky-500/15 blur-3xl animate-bokeh-pulse" />
    <div className="absolute top-1/2 left-1/3 w-[220px] h-[220px] rounded-full bg-fuchsia-500/10 blur-3xl animate-bokeh-pulse-delay" />
    <div className="absolute bottom-[34%] right-[22%] w-10 h-40 opacity-40">
      <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full animate-steam" />
      <div className="absolute inset-0 bg-white/15 blur-2xl rounded-full animate-steam-delay" />
    </div>
    <div className="absolute inset-0 bg-background/45" />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--background) / 0.55) 0%, hsl(var(--background) / 0.2) 45%, transparent 85%)",
      }}
    />
  </div>
);

export default NightBackground;
