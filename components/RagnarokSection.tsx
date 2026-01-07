"use client";

import React from "react";
import { Reveal } from "./Reveal";

interface Ember {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

interface RagnarokSectionProps {
  sceneNaglfar: string;
  embers: Ember[];
}

export const RagnarokSection: React.FC<RagnarokSectionProps> = ({
  sceneNaglfar,
  embers,
}) => {
  return (
    <section
      id="ragnarok"
      className="relative py-32 px-6 bg-black z-10 overflow-hidden min-h-screen flex items-center"
    >
      {/* ATMOSPHERIC LAYERS */}
      {/* 1. Distant Lightning Overlay */}
      <div className="absolute inset-0 bg-white mix-blend-overlay opacity-0 animate-lightning pointer-events-none z-0" />

      {/* 2. Animated Rain */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover animate-rain rain-texture opacity-50"
          style={{ transform: "scale(1.2)" }}
        ></div>
      </div>

      {/* 3. Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 via-loki-dark/80 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-20">
        <Reveal className="text-center mb-16 max-w-3xl">
          <span className="font-sans text-red-500/70 tracking-[0.3em] text-xs uppercase block mb-4 animate-pulse">
            Prophecy
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
            Naglfar{" "}
            <span className="text-loki-gold italic font-serif">Sails</span>
          </h2>
          <p className="font-serif text-xl text-loki-stone italic">
            "Brothers shall fight and fell each other... An axe-age, a
            sword-age, shields shall be cloven."
          </p>
        </Reveal>

        <Reveal
          width="100%"
          className="w-full aspect-video border border-red-900/20 relative overflow-hidden group shadow-[0_0_100px_rgba(50,0,0,0.3)]"
        >
          {/* 4. Ship Container with Heaving Animation */}
          <div className="relative w-full h-full animate-heave origin-bottom">
            {sceneNaglfar ? (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear scale-110 group-hover:scale-125"
                style={{ backgroundImage: `url(${sceneNaglfar})` }}
              />
            ) : (
              <div className="absolute inset-0 bg-loki-dark animate-pulse" />
            )}

            {/* 5. Glowing Particles/Embers from the Ship */}
            <div className="absolute inset-0 pointer-events-none">
              {embers.map((ember) => (
                <div
                  key={ember.id}
                  className="absolute bottom-0 bg-orange-500 rounded-full blur-[1px] animate-ember"
                  style={{
                    width: "3px",
                    height: "3px",
                    left: `${ember.left}%`,
                    animationDelay: `${ember.delay}s`,
                    animationDuration: `${ember.duration}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Foreground Overlay within the frame */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-display text-3xl text-white/90 mb-2">
              The Twilight of Gods
            </p>
            <p className="font-sans text-sm text-loki-stone max-w-xl">
              At the end of time, Loki breaks his bonds. He steers the ship made
              of dead men's nails, leading the giants to the field of Vigrid to
              war against the Aesir. It is his ultimate act of defiance—the
              complete dismantling of the order he helped build.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
