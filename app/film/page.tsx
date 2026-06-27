"use client";

import { useState } from "react";
import Header from "@/components/Header";

type Video = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  vimeoId: string;
  image: string;
};

export default function FilmPage() {
  const [lightMode, setLightMode] = useState(true);
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const videos: Video[] = [
    {
      id: "1",
      title: "Fekete Pont │ Lesson Learned",
      description: "Feature (2024)",
      longDescription: `Young teacher Juci rebels against archaic school methods as Palkó struggles to adapt.

Director: Bálint Szimler
Writer: Bálint Szimler
Cinematographer: Marcell Rév
Production Design: Imola Láng
Casting: Hermina Fátyol
Editor: Zsófia Ördög`,
      vimeoId: "1203778552",
      image: "/FILM/FEKETE_PONT.png",
    },
    {
      id: "2",
      title: "Not a Thing",
      description: "Feature (2022)",
      longDescription: `Two identical twins live a completely different life and see each other in quite different perspectives. One is a rich housewife with a newborn, the other is a doctor with low income, but with a sparkling new relationship.

Director: Fanni Szilágyi
Writer: Zsófi Lányi, Fanni Szilágyi
Cinematographer: Gábor Szilágyi
Production Design: Zsófi Tasnádi
Music: Csaba Kalotás
Editor: Zsófia Ördög`,
      vimeoId: "793847530",
      image: "/FILM/01_NotAThing.png",
    },
    {
      id: "3",
      title: "Balaton Method",
      description: "Music feature (2015)",
      longDescription: `A music documentary about Hungarian musicians creating music around lake Balaton. The feature film continuation of the acclaimed Kodály Method (2011) videos.

Concept: Bálint Szimler, Marcell Rév
Director: Bálint Szimler
Cinematographer: Marcell Rév
Editors: Áron Mezei, Zsófia Ördög`,
      vimeoId: "465071750",
      image: "/FILM/02_BalatonMethod_cover.jpg",
    },
    {
      id: "4",
      title: "Below the Window",
      description: "Short (2023)",
      longDescription: `Maria, a new mother living in isolation with her baby, encounters a mysterious wayfarer who seeks shelter from an approaching storm. Eerie events unfold as the stranger's presence becomes increasingly unsettling.

Director: Salvador Alejandro Gutiérrez
Writer: Nusrat Islam Maati
Cinematographer: Bornil Anurag
Producer: Katniss Tung Cheng
Editor: Zsófia Ördög
Sound: Mariana von Seckendorff`,
      vimeoId: "835858192",
      image: "/FILM/BelowTheWindow.jpg",
    },
    {
      id: "5",
      title: "Fado Menor",
      description: "Short (2022)",
      longDescription: `Two gay, immigrant men set out to reconcile their issues while roaming around the dark streets of Lisbon. While reminiscing their time together, they think back to an awkward encounter regarding confrontation of their sexuality at a Fado bar.

Director: Salvador Alejandro Gutiérrez
Writer: Nusrat Islam Maati
Cinematographer: Bornil Anurag
Producer: Katniss Tung Cheng
Editor: Zsófia Ördög
Sound: Mariana von Seckendorff`,
      vimeoId: "672460875",
      image: "/FILM/03_FadoMenor.jpeg",
    },
    {
      id: "6",
      title: "Orsi és Tenshinhan",
      description: "Short (2020)",
      longDescription: `

Director: Fanni Szilágyi, Gábor Szilágyi
Writer: Zsuzsanna Bak, Fanni Szilágyi
Cinematographer: Gábor Szilágyi
Production Design: Zsófi Tasnádi
Music: Csaba Kalotás
Casting: Irma Ascher
Editor: Zsófia Ördög`,
      vimeoId: "558151060",
      image: "/FILM/04_TienShinhan.jpg",
    },
    {
      id: "7",
      title: "Her Dangerous Feet",
      description: "Short (2017) ",
      longDescription: `

Director: Fanni Szilágyi
Writer: Zsófia Lányi, Réka Mán-Várhegyi, Fanni Szilágyi
Cinematographer: Kristóf Becsey
Production Design: Zsófi Tasnádi
Music: András Pongor
Casting: Irma Ascher
Editor: Zsófia Ördög`,
      vimeoId: "558150577",
      image: "/FILM/06_HerDangerousFeet.jpg",
    },
    {
      id: "8",
      title: "Age of Aquarius",
      description: "Short (2017)",
      longDescription: `

Director: Fanni Szilágyi
Writer: Réka Mán-Várhegyi, Juli Széphelyi, Fanni Szilágyi
Cinematographer: Domonkos Rónai
Production Design: Anna Nyitrai, Zsófi Tasnádi
Casting: Irma Ascher
Editor: Zsófia Ördög`,
      vimeoId: "558150911",
      image: "/FILM/05_AllTheLines.jpg",
    },
    {
      id: "9",
      title: "White Wolf",
      description: "Short (2015)",
      longDescription: `

Director: Fanni Szilágyi
Writer: Tóth Krisztina, Fanni Szilágyi
Cinematographer: Balázs Domokos
Production Design: Zsófia Tasnádi
Editor: Zsófia Ördög, Zsófi Érdi`,
      vimeoId: "558150783",
      image: "/FILM/07_WhiteWolf.jpg",
    },
  ];

  const bg = lightMode ? "bg-white" : "bg-black";
  const text = lightMode ? "text-black" : "text-[#f3d8df]";

  return (
    <main className={`min-h-screen ${bg} ${text}`}>
      <Header lightMode={lightMode} />

      {/* GRID */}
      <div className="max-w-5xl mx-auto pt-32 px-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-4 lg:gap-8">
          {videos.map((video) => (
            <button
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="group flex justify-center"
            >
              <div className="relative aspect-[2/3] w-full max-w-[240px] md:max-w-[270px] lg:max-w-[290px] overflow-hidden bg-black">
                <img
                  src={video.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt={video.title}
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 overflow-y-auto"
          onClick={() => setActiveVideo(null)}
        >
          <div className="min-h-screen flex items-center justify-center px-6 py-12">
            <div
              className="relative w-full max-w-7xl grid lg:grid-cols-[1.7fr_1fr] gap-8 lg:gap-12"
              onClick={(e) => e.stopPropagation()}
            >
              {/* CLOSE */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white/70 hover:text-white transition"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* VIDEO */}
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://player.vimeo.com/video/${activeVideo.vimeoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* TEXT PANEL */}
              <div className="text-white overflow-y-auto max-h-[80vh] pr-2">
                <h2 className="text-xl md:text-2xl uppercase tracking-[0.12em] leading-tight">
                  {activeVideo.title}
                </h2>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] opacity-60">
                  {activeVideo.description}
                </p>

                <div className="w-12 h-px bg-white/20 my-6" />

                <div className="text-sm md:text-[15px] leading-relaxed whitespace-pre-line opacity-90">
                  {activeVideo.longDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TOGGLE */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className="fixed bottom-6 right-6 z-50"
        aria-label="Toggle UI mode"
      >
        <div className="relative w-14 h-8 flex items-center rounded-full px-1 bg-white/10">
          <svg
            className="absolute left-2 w-3.5 h-3.5 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          <svg
            className="absolute right-2 w-3.5 h-3.5 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>

          <div
            className={`h-6 w-6 rounded-full shadow-md transform transition-all duration-300 ${
              lightMode ? "translate-x-6 bg-white" : "translate-x-0 bg-[#f3d8df]"
            }`}
          />
        </div>
      </button>

      <footer className="w-full mt-32 py-12 text-center text-xs uppercase tracking-[0.3em] opacity-50">
        © {new Date().getFullYear()} All Rights Reserved
      </footer>
    </main>
  );
}