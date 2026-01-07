"use client";

import React from "react";
import { Reveal } from "./Reveal";

export const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 border-t border-white/5 text-center bg-[#05070a] relative z-10">
      <Reveal width="100%">
        <div className="font-display text-2xl text-white tracking-widest mb-6">
          LOKI
        </div>
        <p className="font-sans text-loki-stone text-sm tracking-wider uppercase mb-8">
          The Myth Is Alive
        </p>
        <div className="flex justify-center gap-6">
          <div className="w-2 h-2 rounded-full bg-loki-gold/50" />
          <div className="w-2 h-2 rounded-full bg-loki-teal/50" />
          <div className="w-2 h-2 rounded-full bg-loki-stone/50" />
        </div>
      </Reveal>
    </footer>
  );
};
