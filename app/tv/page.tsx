"use client";

import { useState } from "react";
import Header from "@/components/Header";

type Video = {
  id: string;
  vimeoId: string;
};

export default function FilmPage() {
  const [lightMode, setLightMode] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos: Video[] = [
    { id: "1", vimeoId: "1144273951" },
    { id: "2", vimeoId: "1144273987" },
    { id: "3", vimeoId: "1144273930" },
    { id: "4", vimeoId: "1144273961" },
    { id: "5", vimeoId: "1144274000" },
  ];

  const bg = lightMode ? "bg-white" : "bg-black";
  const text = lightMode ? "text-black" : "text-[#f3d8df]";

  const firstRow = videos.slice(0, 3);
  const secondRow = videos.slice(3);

  return (
    <main className={`min-h-screen ${bg} ${text}`}>

      {/* HEADER */}
      <Header lightMode={lightMode} />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto pt-28 md:pt-30 px-6 md:px-0">

        <div className="flex flex-col gap-10">

          {/* ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {firstRow.map((video) => (
              <div key={video.id} className="group cursor-pointer">

                <div
                  className="relative aspect-video overflow-hidden bg-black"
                  onClick={() => setActiveVideo(video.vimeoId)}
                >
                  <img
                    src={`https://vumbnail.com/${video.vimeoId}.jpg`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt=""
                  />

                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?background=1&muted=1&loop=1`}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    allow="autoplay; fullscreen"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                </div>
              </div>
            ))}
          </div>

          {/* ROW 2 */}
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-10">
            {secondRow.map((video) => (
              <div key={video.id} className="group cursor-pointer w-full md:w-1/3">

                <div
                  className="relative aspect-video overflow-hidden bg-black"
                  onClick={() => setActiveVideo(video.vimeoId)}
                >
                  <img
                    src={`https://vumbnail.com/${video.vimeoId}.jpg`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt=""
                  />

                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoId}?background=1&muted=1&loop=1`}
                    className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    allow="autoplay; fullscreen"
                  />

                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />

            <button
              className="absolute -top-10 right-0 text-white text-sm uppercase tracking-widest opacity-70 hover:opacity-100"
              onClick={() => setActiveVideo(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TOGGLE (FIXED WITH ICONS) */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className="fixed bottom-6 right-6 z-50"
      >
        <div className="relative w-14 h-8 flex items-center rounded-full px-1 bg-white/10">

          {/* MOON */}
          <svg
            className="absolute left-2 w-3.5 h-3.5 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          {/* SUN */}
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

          {/* KNOB */}
          <div
            className={`h-6 w-6 rounded-full shadow-md transform transition-all duration-300 ${
              lightMode
                ? "translate-x-6 bg-white"
                : "translate-x-0 bg-[#f3d8df]"
            }`}
          />
        </div>
      </button>

      {/* FOOTER */}
      <footer className="w-full mt-20 py-12 text-center text-xs uppercase tracking-[0.3em] opacity-50">
        © {new Date().getFullYear()} All Rights Reserved
      </footer>

    </main>
  );
}