import React from "react";

export interface IllustrationState {
  status: "idle" | "loading" | "success" | "error";
  images: {
    hero: string | null;
    philosophy: string | null;
    transformation: string | null;
    observer: string | null;
    // Genealogy
    farbauti: string | null;
    laufey: string | null;
    loki: string | null;
    angrboda: string | null;
    fenrir: string | null;
    jormungandr: string | null;
    hel: string | null;
    // Artifacts (New)
    artifactMjolnir: string | null;
    artifactGungnir: string | null;
    artifactDraupnir: string | null;
    // Stories
    storySif: string | null;
    storyBuilder: string | null;
    storyPunishment: string | null;
    // Ragnarok
    sceneNaglfar: string | null;
    // Transformation Forms (New)
    transFly: string | null;
    transSalmon: string | null;
    transMare: string | null;
    transBird: string | null;
  };
  error?: string;
}

export interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  align?: "left" | "right" | "center";
  className?: string;
}

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  width?: "fit-content" | "100%";
}

export interface FamilyNode {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  type: "titan" | "god" | "monster" | "entity";
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
}

export interface FamilyConnection {
  from: string;
  to: string;
}

export interface Story {
  id: string;
  title: string;
  myth: string;
  description: string;
  imageKey: string;
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  imageKey: string;
}
