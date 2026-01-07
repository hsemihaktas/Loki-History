"use client";

import React, { useRef, useEffect } from "react";
import { Story } from "@/types";
import { Reveal } from "./Reveal";

interface StoriesSectionProps {
  images: {
    storySif: string | null;
    storyBuilder: string | null;
    storyPunishment: string | null;
  };
}

const STORIES: Story[] = [
  {
    id: "sif",
    title: "The Golden Harvest",
    myth: "The Theft of Sif’s Hair",
    description:
      "In a fit of malice or perhaps drunkenness, Loki sheared the golden hair of Sif, Thor’s wife. To save his life from Thor’s wrath, he ventured to Svartalfheim. There, he tricked the dwarves not only into forging new hair of spun gold but also Mjolnir itself. Chaos birthed the gods’ greatest weapons.",
    imageKey: "storySif",
  },
  {
    id: "builder",
    title: "The Price of a Wall",
    myth: "Sleipnir’s Origin",
    description:
      "When a giant builder wagered the sun and moon to build Asgard’s wall, the gods agreed, thinking it impossible. When the builder neared success, Loki shapeshifted into a white mare to seduce the builder’s stallion. The result was not just a saved wager, but the birth of Sleipnir, the eight-legged steed.",
    imageKey: "storyBuilder",
  },
  {
    id: "punishment",
    title: "The Final Bind",
    myth: "The Cave of Venom",
    description:
      "For his role in Baldur’s death, the gods bound Loki with the entrails of his own son. A serpent was placed above him, dripping burning venom. His wife Sigyn catches the drops in a bowl, but when she must empty it, the venom strikes Loki’s face, causing him to writhe—the origin of earthquakes.",
    imageKey: "storyPunishment",
  },
];

const StoryItem: React.FC<{
  story: Story;
  index: number;
  imageUrl: string | null;
}> = ({ story, index, imageUrl }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  useEffect(() => {
    let animationFrameId: number;

    const animateParallax = () => {
      if (containerRef.current && imageRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Only animate if in view (with some buffer)
        if (rect.top < windowHeight + 100 && rect.bottom > -100) {
          const center = windowHeight / 2;
          const elementCenter = rect.top + rect.height / 2;
          const distance = elementCenter - center;

          // Move image slightly against the scroll direction (parallax effect)
          // 0.15 is the speed factor
          const translateY = distance * 0.15;
          imageRef.current.style.transform = `scale(1.2) translateY(${translateY}px)`;
        }
      }
      animationFrameId = requestAnimationFrame(animateParallax);
    };

    animationFrameId = requestAnimationFrame(animateParallax);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      {/* Image Block with Parallax */}
      <div className="w-full md:w-1/2 z-10">
        <Reveal width="100%" delay={1}>
          <div
            ref={containerRef}
            className="relative group aspect-[4/3] overflow-hidden border border-white/5 rounded-sm bg-black shadow-2xl"
          >
            <div className="absolute inset-0 bg-loki-gold/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {imageUrl ? (
              <img
                ref={imageRef}
                src={imageUrl}
                alt={story.title}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 will-change-transform"
                style={{ transform: "scale(1.2)" }}
              />
            ) : (
              <div className="w-full h-full bg-loki-dark flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-loki-stone/20 border-t-loki-gold rounded-full animate-spin" />
              </div>
            )}

            {/* Overlay Frame */}
            <div className="absolute inset-4 border border-white/10 pointer-events-none transition-all duration-500 group-hover:inset-6 group-hover:border-loki-gold/40 z-20" />
          </div>
        </Reveal>
      </div>

      {/* Text Block with Staggered Fade */}
      <div className="w-full md:w-1/2 space-y-8 z-10">
        <div>
          <Reveal delay={2}>
            <span className="font-sans text-loki-gold tracking-[0.3em] text-xs uppercase block mb-3">
              Myth No. {index + 1}
            </span>
          </Reveal>
          <Reveal delay={3}>
            <h3 className="font-display text-4xl md:text-5xl text-white mb-3 leading-tight">
              {story.myth}
            </h3>
          </Reveal>
          <Reveal delay={4}>
            <h4 className="font-serif text-xl text-loki-stone italic">
              "{story.title}"
            </h4>
          </Reveal>
        </div>

        <Reveal delay={5}>
          <p className="font-sans text-lg text-white/70 leading-relaxed border-l-2 border-loki-teal/30 pl-6">
            {story.description}
          </p>
        </Reveal>
      </div>
    </div>
  );
};

export const StoriesSection: React.FC<StoriesSectionProps> = ({ images }) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    const animateLine = () => {
      if (lineRef.current) {
        const scrollPos = window.scrollY;
        // Move the line slowly to create depth (parallax)
        // It needs to move slower than the scroll to feel "behind"
        lineRef.current.style.transform = `translateX(-50%) translateY(${
          scrollPos * 0.1
        }px)`;
      }
      rafId = requestAnimationFrame(animateLine);
    };

    rafId = requestAnimationFrame(animateLine);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="stories"
      className="relative py-32 bg-loki-dark overflow-hidden min-h-screen"
    >
      <div className="container mx-auto px-6 mb-24 relative z-10">
        <Reveal className="text-center" width="100%">
          <h2 className="font-display text-4xl md:text-6xl text-white mb-4">
            Chronicles of{" "}
            <span className="text-loki-gold italic">Mischief</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-loki-teal to-transparent mx-auto mt-6" />
        </Reveal>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col gap-40">
        {STORIES.map((story, index) => (
          <StoryItem
            key={story.id}
            story={story}
            index={index}
            imageUrl={images[story.imageKey as keyof typeof images]}
          />
        ))}
      </div>

      {/* Background Decorative Line with Parallax */}
      <div
        ref={lineRef}
        className="absolute left-1/2 top-[-20%] w-px bg-gradient-to-b from-transparent via-loki-gold/10 to-transparent -translate-x-1/2 z-0 hidden md:block will-change-transform"
        style={{ height: "200vh" }}
      />
    </section>
  );
};
