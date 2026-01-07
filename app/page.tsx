"use client";

import React, { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { GenealogyTree } from "@/components/GenealogyTree";
import { StoriesSection } from "@/components/StoriesSection";
import { ArtifactsSection } from "@/components/ArtifactsSection";
import { Wind, Brain, Flame, RefreshCcw } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [embers, setEmbers] = useState<
    { id: number; left: number; delay: number; duration: number }[]
  >([]);

  // State for all images - Initialized with Static Assets directly
  const [images] = useState({
    hero: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2574&auto=format&fit=crop", // Dark stormy cliff
    philosophy:
      "https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=2574&auto=format&fit=crop", // Chaos/Storm
    transformation:
      "https://images.unsplash.com/photo-1597176116047-876a32798fcc?q=80&w=2574&auto=format&fit=crop", // Smoke/Abstract
    observer:
      "https://images.unsplash.com/photo-1535581652167-3d6b98e0eb64?q=80&w=2670&auto=format&fit=crop", // Dark texture

    // Genealogy
    farbauti:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2022&auto=format&fit=crop", // Space/Nebula/Giant
    laufey:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2562&auto=format&fit=crop", // Dark Forest
    loki: "https://images.unsplash.com/photo-1505672675380-41225e4c83e5?q=80&w=2600&auto=format&fit=crop", // Ruined statue
    angrboda:
      "https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?q=80&w=2687&auto=format&fit=crop", // Witchy/Dark
    fenrir:
      "https://images.unsplash.com/photo-1565158623547-22d79047b31d?q=80&w=2670&auto=format&fit=crop", // Wolf
    jormungandr:
      "https://images.unsplash.com/photo-1551065780-f2038670d583?q=80&w=2574&auto=format&fit=crop", // Sea/Waves
    hel: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop", // Skeleton/Dark

    // Artifacts
    artifactMjolnir:
      "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=2669&auto=format&fit=crop", // Metal/Forging
    artifactGungnir:
      "https://images.unsplash.com/photo-1625888247076-24df9dc84523?q=80&w=2574&auto=format&fit=crop", // Sharp metal/Abstract
    artifactDraupnir:
      "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2670&auto=format&fit=crop", // Gold

    // Stories
    storySif:
      "https://images.unsplash.com/photo-1605218457336-9271649646b8?q=80&w=2574&auto=format&fit=crop", // Gold texture
    storyBuilder:
      "https://images.unsplash.com/photo-1508144753681-9986d4df99b3?q=80&w=2670&auto=format&fit=crop", // White Horse
    storyPunishment:
      "https://images.unsplash.com/photo-1504333638930-c8787321eee0?q=80&w=2670&auto=format&fit=crop", // Cave/Dark

    // Ragnarok
    sceneNaglfar:
      "https://images.unsplash.com/photo-1552560230-01e4a93c72b5?q=80&w=2532&auto=format&fit=crop", // Ship in storm

    // Transformation Forms
    transFly:
      "https://images.unsplash.com/photo-1550993175-1e34552b02e7?q=80&w=2670&auto=format&fit=crop", // Fly/Insect Macro
    transSalmon:
      "https://images.unsplash.com/photo-1516684669134-de6d7c47743d?q=80&w=2574&auto=format&fit=crop", // Fish under water
    transMare:
      "https://images.unsplash.com/photo-1598974357801-cbca100e65d3?q=80&w=2574&auto=format&fit=crop", // White horse
    transBird:
      "https://images.unsplash.com/photo-1552718752-c6e00ca32b2b?q=80&w=2574&auto=format&fit=crop", // Falcon
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Generate static embers on mount
    const newEmbers = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 2 + 3, // 3-5s
    }));
    setEmbers(newEmbers);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Main Content
  return (
    <div className="bg-loki-dark min-h-screen selection:bg-loki-gold selection:text-loki-dark overflow-hidden">
      <CustomCursor />

      {/* PERSISTENT LOKI OBSERVER */}
      {images.observer && (
        <div
          className="fixed top-0 right-0 h-screen w-1/2 pointer-events-none z-0 mix-blend-screen opacity-10 transition-all duration-1000 ease-out hidden md:block"
          style={{
            opacity: Math.max(0.1, 0.4 - scrollY * 0.0005),
            filter: `blur(${Math.min(10, scrollY * 0.005)}px) grayscale(100%)`,
            transform: `translateY(${scrollY * 0.05}px) scale(${
              1 + scrollY * 0.0001
            })`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-loki-dark" />
          <img
            src={images.observer}
            alt="Loki Watching"
            className="w-full h-full object-cover object-left mask-image-gradient"
          />
        </div>
      )}

      {/* Navigation (Minimal) */}
      <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="font-display font-bold text-xl tracking-widest">
          LOKI
        </div>
        <div className="hidden md:flex gap-8 font-sans text-xs tracking-[0.2em] uppercase">
          <a
            href="#philosophy"
            className="hover:text-loki-gold transition-colors"
          >
            Origins
          </a>
          <a href="#lineage" className="hover:text-loki-gold transition-colors">
            Lineage
          </a>
          <a
            href="#artifacts"
            className="hover:text-loki-gold transition-colors"
          >
            Gifts
          </a>
          <a href="#stories" className="hover:text-loki-gold transition-colors">
            Tales
          </a>
          <a
            href="#ragnarok"
            className="hover:text-loki-gold transition-colors"
          >
            End
          </a>
          <button
            onClick={() => window.location.reload()}
            className="hover:text-loki-gold"
            title="Restart"
          >
            <RefreshCcw size={16} />
          </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <Hero
        imageUrl={
          images.hero ||
          "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?q=80&w=2574&auto=format&fit=crop"
        }
      />

      {/* 2. PHILOSOPHY & WHO IS LOKI */}
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
              <span className="text-loki-gold italic font-serif">
                Outsiders
              </span>
            </h2>
            <div className="w-12 h-1 bg-loki-teal mb-8" />
            <p className="font-sans text-loki-stone text-lg leading-relaxed mb-6">
              Loki is not merely a villain. He is the complexity of the human
              condition manifested. He represents the chaotic variable that
              forces systems to evolve.
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
            className="relative aspect-[3/4] md:aspect-square bg-loki-accent/5 overflow-hidden flex items-center justify-center group border border-white/5"
          >
            {images.philosophy ? (
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${images.philosophy})` }}
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

      {/* 3. GENEALOGY / FAMILY TREE */}
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

      {/* 4. NEW: ARTIFACTS SECTION */}
      <div id="artifacts">
        <ArtifactsSection images={images} />
      </div>

      {/* 5. STORIES & MYTHS */}
      <StoriesSection images={images} />

      {/* 6. NEW: RAGNAROK SECTION */}
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
              Naglfar Sails
            </h2>
            <p className="font-serif text-xl text-loki-stone italic">
              "Brothers shall fight and fell each other... An axe-age, a
              sword-age, shields shall be cloven."
            </p>
          </Reveal>

          <Reveal className="w-full aspect-video border border-red-900/20 relative overflow-hidden group shadow-[0_0_100px_rgba(50,0,0,0.3)]">
            {/* 4. Ship Container with Heaving Animation */}
            <div className="relative w-full h-full animate-heave origin-bottom">
              {images.sceneNaglfar ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-linear scale-110 group-hover:scale-125"
                  style={{ backgroundImage: `url(${images.sceneNaglfar})` }}
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
                At the end of time, Loki breaks his bonds. He steers the ship
                made of dead men's nails, leading the giants to the field of
                Vigrid to war against the Aesir. It is his ultimate act of
                defiance—the complete dismantling of the order he helped build.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. TRANSFORMATION / CONCLUSION */}
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
                Identity is a prison. Loki teaches us that the self is a
                construct that can be dismantled and rebuilt at will. In a world
                of rigid statues, he is the river that flows around them.
              </p>
            </Reveal>
          </div>

          {/* Transformations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
                desc: "To distract the builder’s stallion Svaðilfari, Loki became a mare. This act of seduction birthed Sleipnir, Odin’s eight-legged steed.",
                img: images.transMare,
              },
              {
                key: "transBird",
                title: "The Falcon",
                desc: "Donning Freya’s feather cloak, Loki often flew as a falcon to Jotunheim, acting as a spy and thief between worlds.",
                img: images.transBird,
              },
            ].map((item, i) => (
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

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-white/5 text-center bg-[#05070a] relative z-10">
        <Reveal>
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
          <p className="mt-12 text-xs text-white/20 font-sans">
            Concept & Design by Elite Creative.
          </p>
        </Reveal>
      </footer>
    </div>
  );
}
