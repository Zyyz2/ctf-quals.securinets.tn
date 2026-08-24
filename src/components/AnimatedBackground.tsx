import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-luminosity">
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.25),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Hero gradient wash (slightly stronger) */}
      <div className="absolute -inset-8 opacity-90">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsla(0,72%,51%,0.18)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,hsla(0,72%,51%,.28),transparent),radial-gradient(500px_300px_at_80%_10%,hsla(0,68%,40%,.22),transparent)]" />
      </div>

      {/* Animated blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[hsla(0,72%,51%,.25)] blur-3xl animate-float [animation-duration:7s]" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-[hsla(0,68%,40%,.25)] blur-3xl animate-float [animation-delay:800ms] [animation-duration:8s]" />
      <div className="absolute top-1/4 right-1/3 h-56 w-56 rounded-full bg-[hsla(0,72%,51%,.18)] blur-2xl animate-float [animation-duration:6s]" />

      {/* Subtle particles layer */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <radialGradient id="g" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(255,80,80)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="rgb(255,80,80)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {Array.from({ length: 36 }).map((_, i) => (
            <circle
              key={i}
              cx={`${(i * 37) % 100}%`}
              cy={`${(i * 53) % 100}%`}
              r={Math.max(1.8, (i % 5) + 1.2)}
              fill="url(#g)"
              className="animate-float"
              style={{ animationDuration: `${6 + (i % 5)}s`, animationDelay: `${i * 120}ms` }}
            />
          ))}
        </svg>
      </div>

      {/* Light sweep */}
      <div
        className="absolute inset-0 opacity-[0.12] animate-pan-slow"
        style={{
          backgroundImage:
            "linear-gradient(120deg, transparent 0%, hsla(0,72%,51%,.24) 35%, transparent 65%)",
          backgroundSize: "200% 100%",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
