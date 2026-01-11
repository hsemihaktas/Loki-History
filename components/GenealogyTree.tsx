"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FamilyNode, FamilyConnection } from "@/types";

interface GenealogyTreeProps {
  customImages?: Record<string, string | null>;
}

const INITIAL_NODES: FamilyNode[] = [
  // PARENTS
  {
    id: "farbauti",
    name: "Fárbauti",
    title: "The Cruel Striker",
    description:
      'A Jötunn (Giant) associated with lightning. His name means "He who strikes dangerously".',
    image: "", // Will be filled dynamically
    type: "titan",
    x: 30,
    y: 10,
  },
  {
    id: "laufey",
    name: "Laufey",
    title: "Needle of the Pine",
    description:
      'A goddess or giantess, mysterious and elegant. Mother of Loki, giving him the matronymic "Laufeyson".',
    image: "",
    type: "entity",
    x: 70,
    y: 10,
  },

  // LOKI & CONSORT
  {
    id: "loki",
    name: "Loki",
    title: "The Scarred Lip",
    description:
      "The catalyst of the gods. Blood-brother to Odin, trickster, and shapeshifter.",
    image: "",
    type: "god",
    x: 50,
    y: 35,
  },
  {
    id: "angrboda",
    name: "Angrboða",
    title: "She Who Offers Sorrow",
    description:
      "A giantess of the Ironwood. Mother of monsters. The witch who birthed the end of the world.",
    image: "",
    type: "monster",
    x: 80,
    y: 35,
  },

  // CHILDREN
  {
    id: "fenrir",
    name: "Fenrir",
    title: "The Unbound Wolf",
    description:
      "The wolf destined to devour Odin. Bound by the ribbon Gleipnir until Ragnarök.",
    image: "",
    type: "monster",
    x: 30,
    y: 70,
  },
  {
    id: "jormungandr",
    name: "Jörmungandr",
    title: "The World Serpent",
    description:
      "So large he encircles Midgard and bites his own tail. The destined bane of Thor.",
    image: "",
    type: "monster",
    x: 50,
    y: 80,
  },
  {
    id: "hel",
    name: "Hel",
    title: "Queen of the Dead",
    description:
      "Half living, half corpse. Ruler of Niflheim, where those who die of sickness or old age dwell.",
    image: "",
    type: "god",
    x: 70,
    y: 70,
  },
];

const CONNECTIONS: FamilyConnection[] = [
  { from: "farbauti", to: "loki" },
  { from: "laufey", to: "loki" },
  { from: "loki", to: "fenrir" },
  { from: "loki", to: "jormungandr" },
  { from: "loki", to: "hel" },
  { from: "angrboda", to: "fenrir" },
  { from: "angrboda", to: "jormungandr" },
  { from: "angrboda", to: "hel" },
];

export const GenealogyTree: React.FC<GenealogyTreeProps> = ({
  customImages,
}) => {
  const [activeNode, setActiveNode] = useState<FamilyNode | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fallback static images if generation fails or is loading
  const STATIC_FALLBACKS: Record<string, string> = {
    farbauti:
      "https://images.unsplash.com/photo-1535025639604-9a8043f6cbb7?q=80&w=2588&auto=format&fit=crop",
    laufey:
      "https://images.unsplash.com/photo-1620025916309-847055c5c02b?q=80&w=2574&auto=format&fit=crop",
    loki: "https://images.unsplash.com/photo-1505672675380-41225e4c83e5?q=80&w=2600&auto=format&fit=crop",
    angrboda:
      "https://images.unsplash.com/photo-1601618357736-22a3cb02a281?q=80&w=2669&auto=format&fit=crop",
    fenrir:
      "https://images.unsplash.com/photo-1575883279815-460d3d528b8a?q=80&w=2670&auto=format&fit=crop",
    jormungandr:
      "https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=2608&auto=format&fit=crop",
    hel: "https://images.unsplash.com/photo-1634751410493-9c869542a15c?q=80&w=2535&auto=format&fit=crop",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-5xl mx-auto h-[800px] my-20 select-none"
    >
      {/* SVG CONNECTIONS LAYER */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <defs>
          <linearGradient
            id="gold-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        {CONNECTIONS.map((conn, i) => {
          const fromNode = INITIAL_NODES.find((n) => n.id === conn.from);
          const toNode = INITIAL_NODES.find((n) => n.id === conn.to);
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={i}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke="url(#gold-gradient)"
              strokeWidth="1"
              className={`transition-all duration-[3000ms] ease-out ${
                isVisible ? "opacity-100 stroke-dasharray-0" : "opacity-0"
              }`}
              style={{
                strokeDasharray: isVisible ? "10" : "0",
                transitionDelay: `${i * 200}ms`,
              }}
            />
          );
        })}
      </svg>

      {/* NODES LAYER */}
      {INITIAL_NODES.map((node, index) => {
        // Safe access to custom images with fallback
        const customImg = customImages?.[node.id] || null;
        const imageUrl = customImg || STATIC_FALLBACKS[node.id];

        return (
          <div
            key={node.id}
            className={`absolute cursor-pointer group z-10 transition-all duration-1000 ease-out`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              opacity: isVisible ? 1 : 0,
              transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
              transitionDelay: `${index * 150}ms`,
            }}
            onMouseEnter={() => setActiveNode(node)}
            onMouseLeave={() => setActiveNode(null)}
          >
            {/* Outer Ring */}
            <div
              className={`absolute -inset-4 rounded-full border border-loki-gold/0 group-hover:border-loki-gold/40 transition-all duration-500 scale-90 group-hover:scale-100 ${
                activeNode?.id === node.id
                  ? "animate-pulse-slow border-loki-gold/60 scale-100"
                  : ""
              }`}
            />

            {/* Node Image */}
            <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-loki-gold/20 group-hover:border-loki-gold transition-colors duration-300 bg-black shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <div className="absolute inset-0 bg-loki-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={node.name}
                  fill
                  sizes="(max-width: 768px) 64px, 96px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
              )}

              {/* Loading State Placeholder */}
              {!imageUrl && (
                <div className="absolute inset-0 bg-loki-dark flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-loki-gold border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>

            {/* Label */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 text-center whitespace-nowrap">
              <span className="block font-display text-xs md:text-sm text-loki-gold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                {node.name}
              </span>
            </div>
          </div>
        );
      })}

      {/* DETAIL MODAL / TOOLTIP */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm pointer-events-none transition-all duration-500 ${
          activeNode ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        style={{ zIndex: 50 }}
      >
        {activeNode && (
          <div className="bg-loki-dark/95 backdrop-blur-md border border-loki-gold/30 p-8 text-center shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <h3 className="font-display text-3xl text-loki-gold mb-1">
              {activeNode.name}
            </h3>
            <p className="font-sans text-xs text-loki-stone uppercase tracking-widest mb-4">
              {activeNode.title}
            </p>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-loki-gold to-transparent mx-auto mb-4" />
            <p className="font-serif text-white/80 italic leading-relaxed">
              "{activeNode.description}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
