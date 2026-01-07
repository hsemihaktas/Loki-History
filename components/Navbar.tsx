"use client";

import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="font-display font-bold text-xl tracking-widest">LOKI</div>
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
        <a href="#artifacts" className="hover:text-loki-gold transition-colors">
          Gifts
        </a>
        <a href="#stories" className="hover:text-loki-gold transition-colors">
          Tales
        </a>
        <a href="#ragnarok" className="hover:text-loki-gold transition-colors">
          End
        </a>
      </div>
    </nav>
  );
};
