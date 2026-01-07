"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowDown } from "lucide-react";

interface HeroProps {
  imageUrl: string;
}

export const Hero: React.FC<HeroProps> = ({ imageUrl }) => {
  const [offset, setOffset] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother parallax performance
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setOffset(window.scrollY);
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-loki-dark">
      {/* Layer 1: Deep Background (The Illustration) 
          Moves slowly (0.5 speed) to simulate distance.
      */}
      <div
        className="absolute inset-0 z-0 w-full h-[120%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${imageUrl})`,
          transform: `translateY(${offset * 0.5}px) scale(1.1)`,
        }}
      >
        {/* Darkening overlay for contrast */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </div>

      {/* Layer 2: Atmospheric Mist (Mid-ground) 
          Moves slightly faster than background (0.35 speed).
      */}
      <div
        className="absolute inset-0 z-0 opacity-40 mix-blend-overlay pointer-events-none will-change-transform"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(136, 146, 153, 0.4) 0%, transparent 70%)",
          transform: `translateY(${offset * 0.35}px)`,
        }}
      />

      {/* Layer 3: Floating Dust Particles (Foreground) 
          Moves significantly differently (0.15 speed) to create a foreground plane.
      */}
      <div
        className="absolute inset-0 z-1 pointer-events-none opacity-20 will-change-transform"
        style={{
          backgroundImage:
            "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 100px",
          transform: `translateY(${offset * 0.15}px)`,
        }}
      />

      {/* Layer 4: Vignette & Color Grading (Static relative to container) */}
      <div className="absolute inset-0 z-1 pointer-events-none bg-gradient-to-b from-loki-dark/40 via-transparent to-loki-dark/90" />
      <div className="absolute inset-0 z-1 pointer-events-none bg-loki-teal/10 mix-blend-color-dodge" />

      {/* Layer 5: Hero Content (Text) 
          Moves at a unique speed (0.25) to detach from background.
      */}
      <div
        className="relative z-10 text-center max-w-5xl px-6 will-change-transform"
        style={{
          transform: `translateY(${offset * 0.25}px)`,
          opacity: Math.max(0, 1 - offset / 600),
        }}
      >
        <h2 className="text-loki-gold font-serif tracking-[0.3em] text-sm md:text-base mb-6 animate-float uppercase">
          The Architect of Chaos
        </h2>
        <div className="relative inline-block">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white font-bold tracking-tighter mb-8 text-glow leading-none relative z-10">
            LOKI
          </h1>
          {/* Subtle bloom effect */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-loki-gold/20 font-bold tracking-tighter absolute inset-0 blur-lg z-0 select-none">
            LOKI
          </h1>
        </div>
        <p className="font-sans text-loki-stone text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Beyond the villainy lies the philosophy. Discover the Greek
          interpretation of the God of Mischief, where chaos is the prerequisite
          for transformation.
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-12 left-1/2 z-20 text-loki-gold animate-pulse-slow flex flex-col items-center gap-2 will-change-transform"
        style={{
          opacity: Math.max(0, 1 - offset / 300),
          transform: `translate(-50%, ${offset * -0.5}px)`,
        }}
      >
        <span className="text-[10px] uppercase tracking-widest font-sans">
          Discover the Myth
        </span>
        <ArrowDown size={20} className="stroke-1" />
      </div>
    </div>
  );
};
