<div align="center">

  # 🜚 LOKI — ARCHITECT OF CHAOS

  <p align="center">
    <strong>A cinematic, interactive exploration of the real Norse mythology of the Trickster God.</strong>
  </p>

  <p align="center">
    <a href="https://loki-history.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Live%20Demo-loki--history.vercel.app-d4af37?style=for-the-badge&logo=vercel&logoColor=black" alt="Live Demo" />
    </a>
    <a href="https://github.com/hsemihaktas/Loki-History/stargazers">
      <img src="https://img.shields.io/github/stars/hsemihaktas/Loki-History?style=for-the-badge&color=d4af37&labelColor=0b0f15" alt="GitHub Stars" />
    </a>
    <a href="https://github.com/hsemihaktas/Loki-History/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-teal?style=for-the-badge&labelColor=0b0f15" alt="License" />
    </a>
  </p>

  <br />

  <a href="https://loki-history.vercel.app/" target="_blank">
    <img src="https://raw.githubusercontent.com/hsemihaktas/My-assets/main/loki/preview.webp" alt="Loki — Architect of Chaos Preview" width="100%" style="border-radius: 8px; border: 1px solid rgba(212, 175, 55, 0.2);" />
  </a>

  <br /><br />

  <p align="center">
    <a href="#-overview">Overview</a> •
    <a href="#-key-features">Key Features</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-sections--mythological-narrative">Mythology Guide</a> •
    <a href="#-architecture">Architecture</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-author">Author</a>
  </p>

</div>

---

## 📜 Overview

**Loki — Architect of Chaos** is an immersive, high-end web experience dedicated to the authentic Norse mythological figure of Loki. Moving beyond pop-culture simplifications, this application presents Loki as the essential catalyst for evolution: the fire that consumes the old world so that the new may arise.

Designed with cinematic dark-mode aesthetics, custom Nordic typography, responsive parallax motion, and SVG-driven interactive diagrams, the site invites visitors to witness the genealogy, artifacts, shapeshifting tales, and catastrophic prophecy of Ragnarök.

> *"I am not what I am. I am what the moment requires."*

---

## ✨ Key Features

- **Atmospheric Parallax Hero**: Multi-layered depth engine built with `requestAnimationFrame`, simulating dynamic mist, floating gold particles, and atmospheric lighting behind bold typography.
- **Persistent Observer Experience**: A haunting silhouette of Loki that follows the viewport in the background, subtly reacting to scroll depth with dynamic blur, opacity, and scale shifts.
- **Interactive SVG Genealogy Tree**: Visual pedigree mapping Loki's lineage—from his parents *Fárbauti* and *Laufey*, to his consort *Angrboða*, and monstrous offspring (*Fenrir*, *Jörmungandr*, *Hel*)—complete with animated SVG connections and mythological inspection cards.
- **Gifts of Chaos (Artifact Showcase)**: Deep-dive into Asgard's greatest treasures—*Mjölnir*, *Gungnir*, and *Draupnir*—all born from Loki's desperate wagers and cunning schemes.
- **Scroll-Driven Mythological Chronicles**: Curated tales (*The Theft of Sif’s Hair*, *The Origin of Sleipnir*, and *The Cave of Venom*) presented with alternating parallax layout and reveal transitions.
- **Ragnarök & Naglfar Simulation**: A visual spectacle featuring animated fire embers, falling rain textures, distant lightning flashes, and the heaving ship *Naglfar* (steered by Loki at the end of time).
- **Fluid Identity (Transformations)**: Visual dissection of Loki's shapeshifting forms—The Fly, The Salmon, The Mare, and The Falcon.
- **Custom Interactive Cursor**: Bespoke gaming-grade pointer with responsive trailing reticle, hover state animations, and fluid mouse tracking.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[Next.js 16 (App Router)](https://nextjs.org/)** | React framework with Turbopack, SSR, and metadata optimization |
| **[React 19](https://react.dev/)** | Core UI library utilizing modern concurrent features and hooks |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Theme-driven modern styling engine using `@theme` and custom keyframes |
| **[TypeScript](https://www.typescriptlang.org/)** | Strict type safety for data models, components, and interactions |
| **[Lucide React](https://lucide.dev/)** | Minimalist icon set tailored for dark fantasy interfaces |
| **Google Fonts** | `Cinzel` (display headings), `Playfair Display` (serif quotes), and `Inter` (body) |

---

## 🏛️ Sections & Mythological Narrative

```
┌────────────────────────────────────────────────────────┐
│ 1. Hero Section        — The Architect of Chaos        │
│ 2. Philosophy          — The God of Outsiders          │
│ 3. Lineage Tree        — Interactive Genealogy Chart   │
│ 4. Gifts of Chaos      — Legendary Norse Artifacts     │
│ 5. Tales & Myths       — Iconic Eddic Stories          │
│ 6. Ragnarök            — Naglfar Sails at Twilight     │
│ 7. Transformation      — Fluid Identity & Shapeshifting│
└────────────────────────────────────────────────────────┘
```

1. **Origins & Philosophy**: Loki as the chaotic variable necessary for divine progression—representing *Cunning*, *Change*, and *Destruction*.
2. **Genealogy**: Tracing the Jotunn and Aesir intersections with detailed lore cards on hover.
3. **Artifacts**: Demonstrates how Asgard's greatest power was sparked by trickery.
4. **Stories**: How Loki's mischief balances between salvation and catastrophic hubris.
5. **Ragnarök**: The Twilight of the Gods, where Loki breaks free and leads the forces of Jotunheim against Asgard.

---

## 📁 Architecture

```
Loki-History/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Tailwind v4 theme, keyframe animations & scrollbar
│   ├── layout.tsx          # Font loading, OpenGraph SEO & hydration safeguards
│   └── page.tsx            # Main narrative composition & image state manager
├── components/
│   ├── ArtifactsSection.tsx       # 3-column card grid of divine weapons
│   ├── CustomCursor.tsx           # Custom smooth mouse follower
│   ├── Footer.tsx                 # Runestone minimalist footer
│   ├── GenealogyTree.tsx          # Interactive SVG lineage map
│   ├── Hero.tsx                   # Multi-plane parallax landing
│   ├── LineageSection.tsx         # Family tree section wrapper
│   ├── Navbar.tsx                 # Floating blend-mode navigation
│   ├── ObserverBackground.tsx     # Ambient sticky observer element
│   ├── PhilosophySection.tsx      # Core lore & thematic breakdown
│   ├── RagnarokSection.tsx        # Naglfar ship, lightning & ember engine
│   ├── Reveal.tsx                 # Scroll-triggered intersection animations
│   ├── StoriesSection.tsx         # Parallax narrative cards
│   └── TransformationSection.tsx  # Shapeshifting forms showcase
├── public/
│   └── images/             # High-resolution mythological illustrations
├── types/
│   └── index.ts            # Type definitions for nodes, stories, artifacts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.18.0` or higher
- **npm**, **pnpm**, or **yarn**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hsemihaktas/Loki-History.git
   cd Loki-History
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```

4. **View in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm run start
```

---

## 🎨 Design System & Colors

| Token | Hex | Role |
| :--- | :--- | :--- |
| `--color-loki-gold` | `#D4AF37` | Primary accent, runic highlights, button states |
| `--color-loki-dark` | `#0B0F15` | Core background obsidian darkness |
| `--color-loki-teal` | `#112D32` | Mythic Asgardian mid-tone atmosphere |
| `--color-loki-accent` | `#254E58` | Secondary borders, card backdrops |
| `--color-loki-stone` | `#889299` | Muted slate typography, captions |

---

## 🌐 Deployment

The application is optimized for zero-configuration deployment on **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hsemihaktas/Loki-History)

---

## 👤 Author

**Semih Aktaş**
- Website: [loki-history.vercel.app](https://loki-history.vercel.app/)
- GitHub: [@hsemihaktas](https://github.com/hsemihaktas)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
