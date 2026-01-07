"use client";

import React from "react";
import { Reveal } from "./Reveal";
import { Wind, Brain, Flame } from "lucide-react";

interface PhilosophySectionProps {
  philosophyImage: string;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({
  philosophyImage,
}) => {
  return (
    <section
      id="philosophy"
      className="relative py-32 px-6 md:px-12 bg-loki-dark/80 backdrop-blur-sm border-t border-loki-gold/10 z-10"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="font-sans text-loki-gold tracking-[0.3em] text-xs uppercase block mb-2">
            The Archetype
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
            The God of{" "}
            <span className="text-loki-gold italic font-serif">Outsiders</span>
          </h2>
          <div className="w-12 h-1 bg-loki-teal mb-8" />
          <p className="font-sans text-loki-stone text-lg leading-relaxed mb-6">
            Loki is not merely a villain. He is the complexity of the human
            condition manifested. He represents the chaotic variable that forces
            systems to evolve.
          </p>
          <p className="font-sans text-loki-stone text-lg leading-relaxed mb-8">
            In the Eddas, he is the solver of problems he himself creates. A
            blood-brother to Odin, a companion to Thor, and yet, the architect
            of their doom. He is the fire that burns the old world to make way
            for the new.
          </p>
          <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
            {[
              { icon: Brain, label: "Cunning" },
              { icon: Wind, label: "Change" },
              { icon: Flame, label: "Destruction" },
            ].map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-loki-stone/50 hover:text-loki-gold transition-colors"
              >
                <t.icon size={20} />
                <span className="text-[10px] tracking-widest uppercase">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          delay={2}
          width="100%"
          className="relative aspect-[3/4] md:aspect-square bg-loki-accent/5 overflow-hidden flex items-center justify-center group border border-white/5"
        >
          {philosophyImage ? (
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
              style={{ backgroundImage: `url(${philosophyImage})` }}
            />
          ) : (
            <div className="animate-pulse bg-loki-dark/50 w-full h-full" />
          )}

          <div className="absolute bottom-0 left-0 p-8 pointer-events-none">
            <span className="font-serif text-6xl text-loki-gold/20 block absolute -top-10 left-4">
              I
            </span>
            <h3 className="relative font-display text-2xl text-white">
              The Necessary Void
            </h3>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
