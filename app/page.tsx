"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function Home() {
  const [lightMode] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      {/* HEADER — TRANSPARENT ON HOMEPAGE */}
      <Header lightMode={lightMode} transparent />

      {/* VIMEO BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/792758998?background=1&autoplay=1&muted=1&loop=1&autopause=0&dnt=1"
          className="absolute left-1/2 top-1/2 h-screen w-[177.777vh] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Showreel"
        />
      </div>

      {/* OVERLAY */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0.65) 80%)",
        }}
      />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full flex-col items-center justify-start pt-[25vh] px-6 text-white">
        <div className="w-full max-w-[92vw] flex flex-col items-center">
          <h1
            className="w-full text-center text-3xl md:text-6xl font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase text-[#ffbdf0] opacity-80"
            style={{
              textShadow: "0 2px 18px rgba(0,0,0,0.45)",
            }}
          >
            Zsófia Ördög
          </h1>

          <div className="mt-1 h-px w-full max-w-[700px] bg-[#ffbdf0]/30" />
        </div>

        <p
          className="mt-4 w-full max-w-[92vw] text-center text-[10px] md:text-xs uppercase tracking-[0.28em] md:tracking-[0.45em] text-[#ffbdf0] opacity-85 leading-relaxed"
          style={{
            textShadow: "0 1px 10px rgba(0,0,0,0.35)",
          }}
        >
          Film and Video Editor • Assistant Editor • VFX Editor
        </p>
      </div>
    </main>
  );
}