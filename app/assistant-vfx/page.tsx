"use client";

import { useState } from "react";
import Header from "@/components/Header";

type Work = {
  id: string;
  title: string;
  description: string;
  image: string;
  imdb: string;
};

export default function VFXPage() {
  const [lightMode, setLightMode] = useState(true);

  const works: Work[] = [
    {
      id: "1",
      description: "",
      image: "/ASSIST/00_DUNE PT3epic.png",
      imdb: "https://www.imdb.com/title/tt31378509/",
      title: ""
    },
    {
      id: "2",
      description: "",
      image: "/ASSIST/01_DUNE PT2.png",
      imdb: "https://www.imdb.com/title/tt15239678",
      title: ""
    },
    {
      id: "3",
      description: "",
      image: "/ASSIST/02_Mars.jpg",
      imdb: "https://www.imdb.com/title/tt4939064",
      title: ""
    },
    {
      id: "4",
      description: "",
      image: "/ASSIST/00_HUNYADI.jpg",
      imdb: "https://www.imdb.com/title/tt15373664",
      title: ""
    },
    {
      id: "5",
      description: "",
      image: "/ASSIST/03_K12.jpg",
      imdb: "https://www.imdb.com/title/tt10521814",
      title: ""
    },
    {
      id: "6",
      description: "",
      image: "/ASSIST/04_Treadstone.jpg",
      imdb: "https://www.imdb.com/title/tt8289480",
      title: ""
    },
    {
      id: "7",
      description: "",
      image: "/ASSIST/00_MATCHBOX.jpg",
      imdb: "https://www.imdb.com/title/tt28498219",
      title: ""
    },
    {
      id: "8",
      description: "",
      image: "/ASSIST/05_Granny_Project.jpg",
      imdb: "https://www.imdb.com/title/tt5687816",
      title: ""
    },
    {
      id: "9",
      description: "",
      image: "/ASSIST/06_Masik_eletben.jpg",
      imdb: "https://www.imdb.com/title/tt10103960",
      title: ""
    },
    {
      id: "10",
      description: "",
      image: "/ASSIST/07_Open.jpg",
      imdb: "https://www.imdb.com/title/tt7571992",
      title: ""
    },
    {
      id: "11",
      description: "",
      image: "/ASSIST/08_BUEK.jpg",
      imdb: "https://www.imdb.com/title/tt8265174",
      title: ""
    },
    {
      id: "12",
      description: "",
      image: "/ASSIST/09_MEMO.png",
      imdb: "https://www.imdb.com/title/tt5641970",
      title: ""
    },
    {
      id: "13",
      description: "",
      image: "/ASSIST/10_Dumaparbaj.jpg",
      imdb: "https://www.imdb.com/title/tt4059516",
      title: ""
    },    
    {
      id: "14",
      description: "",
      image: "/ASSIST/11_TokeletesGyilkos.jpg",
      imdb: "https://www.imdb.com/title/tt6614914",
      title: ""
    },
    {
      id: "15",
      description: "",
      image: "/ASSIST/12_Wakemeup.jpg",
      imdb: "https://www.imdb.com/title/tt4652380",
      title: ""
    },
  ];

  const bg = lightMode ? "bg-white" : "bg-black";
  const text = lightMode ? "text-black" : "text-[#f3d8df]";

  return (
    <main className={`min-h-screen ${bg} ${text}`}>

      {/* HEADER */}
      <Header lightMode={lightMode} />

      {/* CONTENT WRAPPER — EDGE FIX ONLY */}
      <div className="max-w-6xl mx-auto pt-32 px-10">

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {works.map((work) => (
            <a
              key={work.id}
              href={work.imdb}
              target="_blank"
              rel="noopener noreferrer"
              className="group block cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative aspect-[2/3] overflow-hidden bg-black">

                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition" />
              </div>

              {/* TEXT */}
              <div className="mt-3">
                <h2 className="text-sm md:text-base uppercase tracking-[0.22em] group-hover:opacity-70 transition">
                  {work.title}
                </h2>

                <p className="text-xs md:text-sm opacity-80 mt-1">
                  {work.description}
                </p>
              </div>

            </a>
          ))}

        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full mt-32 py-12 text-center text-xs uppercase tracking-[0.3em] opacity-50">
        © {new Date().getFullYear()} All Rights Reserved
      </footer>

      {/* TOGGLE */}
      <button
        onClick={() => setLightMode(!lightMode)}
        className="fixed bottom-6 right-6 z-50"
        aria-label="Toggle UI mode"
      >
        <div className="relative w-14 h-8 flex items-center rounded-full px-1 bg-white/10">

          {/* moon */}
          <svg
            className="absolute left-2 w-3.5 h-3.5 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          {/* sun */}
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
            className={`h-6 w-6 rounded-full shadow-md transform transition-all duration-300 z-10 ${
              lightMode
                ? "translate-x-6 bg-white"
                : "translate-x-0 bg-[#f3d8df]"
            }`}
          />
        </div>
      </button>

    </main>
  );
}