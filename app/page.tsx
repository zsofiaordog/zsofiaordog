"use client";

import { useState } from "react";

export default function Home() {
  const [lightMode] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">

      {/* 🎥 SHOWREEL (VIMEO BACKGROUND) */}
      <iframe
        src="https://player.vimeo.com/video/792758998?background=1&autopause=0&dnt=1"
        className="absolute inset-0 h-full w-full pointer-events-none"
        allow="autoplay; fullscreen; picture-in-picture"
        title="Showreel"
      />

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* 🧑 LOGO */}
      <a
        href="/"
        className="absolute left-6 top-6 z-20 md:left-10 md:top-8"
      >
        <img
          src={lightMode ? "/home/ZO_LOGO_Black.png" : "/home/ZO_LOGO_white.png"}
          alt="Brand Logo"
          className="h-15 w-auto opacity-70 hover:opacity-100 transition md:h-15"
        />
      </a>

      {/* 🎞 IMDb */}
      <a
        href="https://www.imdb.com/name/nm6768698/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-6 top-6 z-20 md:right-10 md:top-8"
      >
        <img
          src="/home/imdb-logo.png"
          alt="IMDb"
          className="h-5 w-auto opacity-70 hover:opacity-100 transition"
        />
      </a>

      {/* TEXT CONTENT */}
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-start pt-[18vh] transition-colors duration-300 ${
          lightMode ? "text-black" : "text-white"
        }`}
      >

        {/* NAME */}
        <div className="flex flex-col items-center">
          <h1 className="text-center text-2xl md:text-6xl font-semibold tracking-[0.22em] uppercase opacity-70">
            Zsófia Ördög
          </h1>

          <div className="mt-1 h-px w-[80vw] max-w-[700px] bg-white/40" />
        </div>

        <p className="mt-3 text-1xl md:text-xs font-regular uppercase tracking-[0.45em] opacity-70">
          Film and Video Editor • Assistant Editor • VFX Editor
        </p>

        {/* MENU */}
        <nav className="mt-12 flex max-w-5xl flex-wrap justify-center gap-x-11 gap-y-4 text-xs md:text-sm font-semibold uppercase tracking-[0.20em] opacity-70">

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