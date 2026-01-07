"use client";

import React, { useState, useEffect } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ObserverBackground } from "@/components/ObserverBackground";
import { PhilosophySection } from "@/components/PhilosophySection";
import { LineageSection } from "@/components/LineageSection";
import { ArtifactsSection } from "@/components/ArtifactsSection";
import { StoriesSection } from "@/components/StoriesSection";
import { RagnarokSection } from "@/components/RagnarokSection";
import { TransformationSection } from "@/components/TransformationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [embers, setEmbers] = useState<
    { id: number; left: number; delay: number; duration: number }[]
  >([]);

  // State for all images - Initialized with Static Assets directly
  const [images] = useState({
    hero: "/images/hero-image.jpeg",
    philosophy: "/images/philosophy.jpeg",
    transformation: "/images/transformation.jpeg",
    observer: "/images/observer.jpeg",
    // Genealogy
    farbauti: "/images/farbauti.jpeg",
    laufey: "/images/laufey.jpeg",
    loki: "/images/loki.jpeg",
    angrboda: "/images/angrboda.jpeg",
    fenrir: "/images/fenrir.jpeg",
    jormungandr: "/images/jormungandr.jpeg",
    hel: "/images/hel.jpeg",

    // Artifacts
    artifactMjolnir: "/images/artifactMjolnir.jpeg",
    artifactGungnir: "/images/artifactGungnir.jpeg",
    artifactDraupnir: "/images/artifactDraupnir.jpeg",

    // Stories
    storySif: "/images/storySif.jpeg",
    storyBuilder: "/images/storyBuilder.jpeg",
    storyPunishment: "/images/storyPunishment.jpeg",

    // Ragnarok
    sceneNaglfar: "/images/sceneNaglfar.jpeg",

    // Transformation Forms
    transFly: "/images/transFly.jpeg",
    transSalmon: "/images/transSalmon.jpeg",
    transMare: "/images/transMare.jpeg",
    transBird: "/images/transBird.jpeg",
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
      <ObserverBackground imageUrl={images.observer} scrollY={scrollY} />

      {/* Navigation */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <Hero imageUrl={images.hero} />

      {/* 2. PHILOSOPHY & WHO IS LOKI */}
      <PhilosophySection philosophyImage={images.philosophy} />

      {/* 3. GENEALOGY / FAMILY TREE */}
      <LineageSection images={images} />

      {/* 4. ARTIFACTS SECTION */}
      <div id="artifacts">
        <ArtifactsSection images={images} />
      </div>

      {/* 5. STORIES & MYTHS */}
      <StoriesSection images={images} />

      {/* 6. RAGNAROK SECTION */}
      <RagnarokSection sceneNaglfar={images.sceneNaglfar} embers={embers} />

      {/* 7. TRANSFORMATION / CONCLUSION */}
      <TransformationSection images={images} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
