"use client";

import React from "react";
import { Reveal } from "./Reveal";
import { GenealogyTree } from "./GenealogyTree";

interface LineageSectionProps {
  images: Record<string, string>;
}

export const LineageSection: React.FC<LineageSectionProps> = ({ images }) => {
  return (
    <section
      id="lineage"
      className="relative py-32 px-6 bg-[#0E1219] z-10 overflow-hidden border-t border-white/5"
    >
      {/* Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-loki-gold/5 rounded-full animate-[spin_120s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-loki-gold/5 rounded-full animate-[spin_80s_linear_infinite_reverse]" />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-12" width="100%">
          <span className="font-sans text-loki-stone/50 tracking-[0.3em] text-xs uppercase block mb-4">
            Origin
          </span>
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            The Blood of{" "}
            <span className="text-loki-gold italic font-serif">Giants</span>
          </h2>
          <p className="font-serif text-loki-stone italic">
            From the Ironwood to the Throne of Asgard
          </p>
        </Reveal>

        <GenealogyTree customImages={images} />
      </div>
    </section>
  );
};
