"use client";

import React, { useEffect, useState, useRef } from "react";

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Refs for animation smoothing
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      // Update ref immediately for animation loop
      positionRef.current = { x: e.clientX, y: e.clientY };

      // Update React state for rendering visibility/styles (less frequent updates fine)
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      // improved interactive detection
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsPointer(isInteractive);
    };

    const animate = () => {
      if (cursorRef.current) {
        // Use transform for performance. Linear interpolation isn't strictly necessary for the custom cursor
        // to feel "snappy" and native, but pure 1:1 mapping can feel jittery on some high-refresh screens.
        // We stick to direct mapping for immediate response which feels more 'pro' for gaming/interactive sites.
        cursorRef.current.style.transform = `translate(${positionRef.current.x}px, ${positionRef.current.y}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updatePosition);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      cancelAnimationFrame(animationFrame);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        willChange: "transform",
      }}
    >
      {/* Centering Wrapper */}
      <div className="relative -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        {/* State 1: Default Ember Dot */}
        <div
          className={`absolute transition-all duration-500 ease-out ${
            isPointer ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        >
          <div className="w-4 h-4 bg-loki-gold rounded-full border-2 border-black/40 shadow-[0_0_20px_rgba(212,175,55,1),0_0_40px_rgba(212,175,55,0.6)] animate-pulse-slow" />
          {/* Faint Ring */}
          <div className="absolute inset-[-6px] border-2 border-loki-gold/50 rounded-full scale-110" />
        </div>

        {/* State 2: Serpent & Runes (Interactive) */}
        <div
          className={`absolute flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isPointer
              ? "opacity-100 scale-100 rotate-0"
              : "opacity-0 scale-50 -rotate-90"
          }`}
        >
          {/* Rotating Runic Ring */}
          <div className="absolute w-20 h-20 rounded-full animate-[spin_12s_linear_infinite] opacity-60">
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full fill-current text-loki-gold overflow-visible"
            >
              <path
                id="curve"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="transparent"
              />
              <text fontSize="10" letterSpacing="4.5">
                <textPath href="#curve" startOffset="0%">
                  ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ ᚾ ᛁ ᛃ ᛇ ᛈ ᛉ ᛊ
                </textPath>
              </text>
            </svg>
          </div>

          {/* Counter-Rotating Inner Ring */}
          <div className="absolute w-12 h-12 border border-loki-gold/40 rounded-full animate-[spin_8s_linear_infinite_reverse]" />

          {/* Central Serpent Icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-loki-gold drop-shadow-[0_0_10px_rgba(212,175,55,1)]"
          >
            {/* Serpent Body */}
            <path
              d="M12 21.5C15.5 21.5 17 19 17 16.5C17 13.5 12 13 12 10.5C12 8 15 6.5 15 4.5C15 3.5 14.5 2.5 13 2.5C11.5 2.5 10 3.5 10 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Dashed Tail */}
            <path
              d="M12 21.5C9 21.5 7 19 7 16.5C7 13.5 12 13 12 10.5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray="2 2"
              className="opacity-60"
            />
            {/* Fangs/Tongue */}
            <path
              d="M10 5L9 3M10 5L11 3"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
            {/* Eye */}
            <circle
              cx="12.5"
              cy="4.5"
              r="0.8"
              fill="currentColor"
              className="animate-pulse"
            />
          </svg>
        </div>

        {/* Magnetic/Trailing Glow */}
        <div
          className={`absolute -z-10 bg-loki-gold/10 rounded-full blur-xl transition-all duration-700 ${
            isPointer ? "w-24 h-24 opacity-100" : "w-8 h-8 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
