import type { Metadata } from "next";
import { Inter, Cinzel, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loki — Architect of Chaos",
  description:
    "A cinematic journey into the real mythology of the Trickster God. Discover the Norse myths, family tree, and legendary tales of Loki.",
  keywords: [
    "Loki",
    "Norse Mythology",
    "Trickster God",
    "Ragnarok",
    "Norse Gods",
    "Viking Mythology",
    "Asgard",
    "Odin",
    "Thor",
    "Fenrir",
    "Jormungandr",
    "Hel",
  ],
  openGraph: {
    title: "Loki — Architect of Chaos",
    description:
      "A cinematic journey into the real mythology of the Trickster God. Discover the Norse myths, family tree, and legendary tales of Loki.",
    url: "https://loki-history.vercel.app",
    siteName: "Loki — Architect of Chaos",
    images: [
      {
        url: "/images/hero-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Loki — Architect of Chaos",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loki — Architect of Chaos",
    description:
      "A cinematic journey into the real mythology of the Trickster God.",
    images: ["/images/hero-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cinzel.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
