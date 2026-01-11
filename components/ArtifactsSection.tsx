"use client";

import React from "react";
import Image from "next/image";
import { Artifact } from "@/types";
import { Reveal } from "./Reveal";

interface ArtifactsSectionProps {
  images: {
    artifactMjolnir: string | null;
    artifactGungnir: string | null;
    artifactDraupnir: string | null;
  };
}

const ARTIFACTS: Artifact[] = [
  {
    id: "mjolnir",
    name: "Mjölnir",
    description:
      "The Crusher. Forged by Brokkr and Sindri due to Loki’s wager. Its handle is short because Loki bit the dwarf in the form of a fly.",
    imageKey: "artifactMjolnir",
  },
  {
    id: "gungnir",
    name: "Gungnir",
    description:
      "The Swaying One. Odin’s spear that never misses its mark. Acquired by Loki from the Sons of Ivaldi to appease Odin.",
    imageKey: "artifactGungnir",
  },
  {
    id: "draupnir",
    name: "Draupnir",
    description:
      "The Dripper. A gold ring that produces eight copies of itself every ninth night. A source of endless wealth for the Allfather.",
    imageKey: "artifactDraupnir",
  },
];

export const ArtifactsSection: React.FC<ArtifactsSectionProps> = ({
  images,
}) => {
  return (
    <section className="relative py-32 bg-[#080a0f] border-t border-white/5">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-20" width="100%">
          <span className="font-sans text-loki-stone/50 tracking-[0.3em] text-xs uppercase block mb-4">
            The Wager
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Gifts of <span className="text-loki-gold italic">Chaos</span>
          </h2>
          <p className="font-sans text-loki-stone max-w-2xl mx-auto leading-relaxed">
            Loki is the architect of Asgard's power. Without his mischief, the
            gods would be unarmed. These treasures were forged not out of
            goodwill, but out of his desperate need to save his own skin.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTIFACTS.map((artifact, index) => {
            const imageUrl = images[artifact.imageKey as keyof typeof images];

            return (
              <Reveal
                key={artifact.id}
                delay={index * 2}
                className="group relative"
              >
                {/* Card Container */}
                <div className="bg-loki-dark/50 border border-white/5 p-2 h-full transition-all duration-500 hover:border-loki-gold/30 hover:bg-loki-dark">
                  {/* Image Frame */}
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-black">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={artifact.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#050505]">
                        <div className="w-6 h-6 border border-loki-stone/30 border-t-loki-gold rounded-full animate-spin" />
                      </div>
                    )}
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80 opacity-60" />
                  </div>

                  {/* Text Content */}
                  <div className="px-4 pb-6 text-center">
                    <h3 className="font-display text-2xl text-loki-gold mb-3">
                      {artifact.name}
                    </h3>
                    <p className="font-sans text-sm text-loki-stone leading-relaxed">
                      {artifact.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
