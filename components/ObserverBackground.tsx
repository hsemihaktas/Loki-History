"use client";

import React from "react";

interface ObserverBackgroundProps {
  imageUrl: string;
  scrollY: number;
}

export const ObserverBackground: React.FC<ObserverBackgroundProps> = ({
  imageUrl,
  scrollY,
}) => {
  if (!imageUrl) return null;

  return (
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
        src={imageUrl}
        alt="Loki Watching"
        className="w-full h-full object-cover object-left mask-image-gradient"
      />
    </div>
  );
};
