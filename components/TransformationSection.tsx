"use client";

import React from "react";
import { Reveal } from "./Reveal";

interface TransformationImages {
  transformation: string;
  transFly: string;
  transSalmon: string;
  transMare: string;
  transBird: string;
}

interface TransformationSectionProps {
  images: TransformationImages;
}

export const TransformationSection: React.FC<TransformationSectionProps> = ({
  images,
}) => {
  const transformations = [
    {
      key: "transFly",
      title: "The Fly",
      desc: "Loki transformed into a fly to sting the dwarf Brokkr, sabotaging the creation of Mjolnir, proving that even a small irritant can change destiny.",
      img: images.transFly,
    },
    {
      key: "transSalmon",
      title: "The Salmon",
      desc: "Fleeing the wrath of the Aesir, he became a salmon in Franangr Falls. Thor caught him by the tail, explaining why salmon tails taper today.",
      img: images.transSalmon,
    },
    {
      key: "transMare",
      title: "The Mare",
      desc: "To distract the builder's stallion Svaðilfari, Loki became a mare. This act of seduction birthed Sleipnir, Odin's eight-legged steed.",
      img: images.transMare,
    },
    {
      key: "transBird",
      title: "The Falcon",
      desc: "Donning Freya's feather cloak, Loki often flew as a falcon to Jotunheim, acting as a spy and thief between worlds.",
      img: images.transBird,
    },
  ];

  return (
    <section
      id="transformation"
      className="py-32 px-6 bg-gradient-to-b from-black to-[#05070a] relative overflow-hidden z-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Intro Text */}
        <div className="flex flex-col md:flex-row items-center gap-16 mb-24">
          <Reveal className="flex-1 order-2 md:order-1 relative aspect-square md:aspect-[4/5] h-[500px] flex items-center justify-center bg-loki-accent/5 overflow-hidden group border border-white/5">
            <div className="absolute -inset-4 border border-loki-gold/20 rotate-3 z-20 pointer-events-none transition-transform duration-700 group-hover:rotate-6" />
            <div className="absolute -inset-4 border border-loki-stone/20 -rotate-3 z-20 pointer-events-none transition-transform duration-700 group-hover:-rotate-6" />

            {images.transformation ? (
              <img
                src={images.transformation}
                alt="Abstract Transformation"
                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              />
            ) : (
              <div className="w-full h-full bg-loki-dark animate-pulse" />
            )}
          </Reveal>

          <Reveal
            className="flex-1 order-1 md:order-2 text-right md:text-left"
            delay={2}
          >
            <span className="font-sans text-loki-gold tracking-[0.3em] text-xs uppercase block mb-2">
              Final Form
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8">
              Fluid Identity
            </h2>
            <p className="font-serif text-xl text-loki-gold mb-8 italic">
              "I am not what I am. I am what the moment requires."
            </p>
            <p className="font-sans text-loki-stone leading-relaxed">
              Identity is a prison. Loki teaches us that the self is a construct
              that can be dismantled and rebuilt at will. In a world of rigid
              statues, he is the river that flows around them.
            </p>
          </Reveal>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, i) => (
            <Reveal
              key={item.key}
              delay={i + 2}
              className="flex items-center gap-6 p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
            >
              <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border border-loki-gold/20 relative">
                {item.img ? (
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-loki-dark animate-pulse" />
                )}
              </div>
              <div>
                <h4 className="font-display text-loki-gold text-lg mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-sm text-loki-stone leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
