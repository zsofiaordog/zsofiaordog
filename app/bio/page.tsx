"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BioPage() {
const [lightMode, setLightMode] = useState(true);

const bg = lightMode ? "bg-white" : "bg-black";
const text = lightMode ? "text-black" : "text-white";

return (
<main className={`min-h-screen ${bg} ${text}`}> <Header lightMode={lightMode} />

```
  <div className="max-w-6xl mx-auto pt-32 md:pt-44 px-6 md:px-12">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-14">

      {/* PORTRAIT */}
      <div className="shrink-0 flex flex-col items-center mx-auto md:mx-0">
        <div className="relative w-56 h-56 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl opacity-30" />

          <img
            src="/BIO/BIO_circle_RGB.png"
            alt="Portrait of Zsófia Ördög"
            className="w-full h-full object-cover rounded-full
            [mask-image:radial-gradient(circle,black_65%,transparent_100%)]
            [webkit-mask-image:radial-gradient(circle,black_65%,transparent_100%)]"
          />
        </div>

        {/* CERTIFICATION */}
        <div className="mt-6 flex items-center justify-center gap-4 opacity-90 text-center">
          <img
            src="/BIO/avid-certified-media-composer-specialist.png"
            alt="Avid Certified Media Composer Specialist badge"
            className="w-12 md:w-14"
          />

          <div className="text-[10px] uppercase tracking-[0.25em] leading-tight">
            Media Composer
            <br />
            101–110 Certified
          </div>
        </div>
      </div>

      {/* BIO TEXT */}
      <div className="max-w-2xl flex flex-col">
        <p className="text-sm md:text-[15px] leading-[1.75] opacity-80">
          Zsófi is a freelance film editor, assistant and VFX editor based
          in Budapest, Hungary. Over the past fifteen years she gained experience
          across narrative film, television and commercials. Along the way she has been fortunate to
          learn from and collaborate with many inspiring filmmakers and production teams.

          <br />
          <br />

          Editor of three feature films:{" "}
          <em className="italic">Fekete Pont / Lesson Learned</em> (2024), which premiered
          at Locarno Film Festival and won three awards;{" "}
          <em className="italic">Veszélyes lehet a fagyi / Not a Thing</em> (2022), for which she
          received Best Editing at the Toronto Film and Script Awards; and{" "}
          <em className="italic">Balaton Method</em> (2015) the first fully
          crowdfunded theatrically released project in Hungary, featuring many of the
          most influential music bands of the era.

          <br />
          <br />

          As an assistant and vfx editor, she has worked on major international
          productions including{" "}
          <em className="italic">Dune: Part Two and Three</em> (2023, 2026),
          Mattel’s <em className="italic">Matchbox</em> (2026), and National
          Geographic’s <em className="italic">Mars</em> (2016).

          <br />
          <br />

          She holds a BA degree in Film Editing from the University of Theatre and Film Arts in Budapest (SZFE, 2013–2016) and was awarded a scholarship to the Erasmus Mundus KinoEyes MA programme (2021–2023), studying in Lisbon, Tallinn, and Dublin. During this time, she developed
          several short projects and her thesis within an international,
          practice-based creative environment, while also tutoring undergraduate students at the National Film School in Ireland (IADT).

          <br />
          <br />

          Member of the European Film Academy and the Hungarian Society of
          Editors (HSE).
        </p>

        {/* CV BUTTON */}
        <div className="mt-12 flex justify-center">
          <a
            href="/BIO/Zsofia_Ordog_CV_2026.pdf"
            download
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-70 hover:opacity-100 transition"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v12m0 0l4-4m-4 4l-4-4"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 18v3H4v-3"
              />
            </svg>

            Download CV
          </a>
        </div>

        {/* EMAIL */}
        <div className="mt-6 flex justify-center">
          <a
            href="mailto:zsofia.ordog@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] opacity-70 hover:opacity-100 transition"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16v12H4z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7l8 6 8-6"
              />
            </svg>

            zsofia.ordog@gmail.com
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* FOOTER */}
  <Footer />

  {/* TOGGLE */}
  <button
    onClick={() => setLightMode(!lightMode)}
    className="fixed bottom-6 right-6 z-50"
    aria-label="Toggle light and dark mode"
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
