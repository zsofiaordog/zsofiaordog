"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [lightMode] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      {/* MOBILE HEADER ONLY */}
      <div className="md:hidden">
        <Header lightMode={lightMode} />
      </div>

      {/* VIMEO BACKGROUND — FULL SCREEN CROPPED */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/792758998?background=1&autoplay=1&muted=1&loop=1&autopause=0&dnt=1"
          className="absolute left-1/2 top-1/2 h-screen w-[177.777vh] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Showreel"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* DESKTOP LOGO */}
      <a
        href="/"
        className="hidden md:block absolute left-10 top-8 z-20"
      >
        <img
          src="/HOME/ZO_LOGO_white.png"
          alt="Brand Logo"
          className="h-15 w-auto opacity-70 hover:opacity-100 transition"
        />
      </a>

      {/* DESKTOP IMDb */}
      <a
        href="https://www.imdb.com/name/nm6768698/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block absolute right-10 top-8 z-20"
      >
        <img
          src="/HOME/imdb-logo.png"
          alt="IMDb"
          className="h-5 w-auto opacity-70 hover:opacity-100 transition"
        />
      </a>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[20vh] px-6 text-white">

        <div className="w-full max-w-[92vw] flex flex-col items-center">
          <h1 className="w-full text-center text-3xl md:text-6xl font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase opacity-70">
            Zsófia Ördög
          </h1>

          <div className="mt-1 h-px w-full max-w-[700px] bg-white/40" />
        </div>

        <p className="mt-4 w-full max-w-[92vw] text-center text-[10px] md:text-xs uppercase tracking-[0.28em] md:tracking-[0.45em] opacity-70 leading-relaxed">
          Film and Video Editor • Assistant Editor • VFX Editor
        </p>

        {/* DESKTOP MENU ONLY */}
        <nav className="hidden md:flex mt-12 max-w-5xl font-semibold flex-wrap justify-center gap-x-11 gap-y-4 text-xs md:text-sm uppercase tracking-[0.20em] opacity-70">
          <a href="/film" className="transition hover:opacity-60">Film</a>
          <a href="/assistant-vfx" className="transition hover:opacity-60">AE / VFX</a>
          <a href="/commercial" className="transition hover:opacity-60">Ads</a>
          <a href="/tv" className="transition hover:opacity-60">TV</a>
          <a href="/other" className="transition hover:opacity-60">Other</a>
          <a href="/text" className="transition hover:opacity-60">Academic</a>
          <a href="/bio" className="transition hover:opacity-60">Bio</a>
        </nav>

      </div>
    </main>
  );
}