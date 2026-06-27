"use client";

import { useState } from "react";
import Header from "@/components/Header";

export default function BioPage() {
  const [lightMode, setLightMode] = useState(true);

  const bg = lightMode ? "bg-white" : "bg-black";
  const text = lightMode ? "text-black" : "text-white";

  return (
    <main className={`min-h-screen ${bg} ${text}`}>

      <Header lightMode={lightMode} />

      <div className="max-w-6xl mx-auto pt-44 px-6 md:px-12">

        <div className="flex flex-col md:flex-row items-start gap-10 md:gap-14">

          {/* PORTRAIT */}
          <div className="shrink-0 md:sticky md:top-32 flex flex-col items-center">

            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl opacity-30" />

              <img
                src="/bio/BIO_circle_RGB.png"
                alt="Portrait"
                className="w-full h-full object-cover rounded-full
                [mask-image:radial-gradient(circle,black_65%,transparent_100%)]
                [webkit-mask-image:radial-gradient(circle,black_65%,transparent_100%)]"
              />
            </div>

            {/* CERTIFICATION */}
            <div className="mt-6 flex items-center justify-center gap-4 opacity-90 text-center">

              <img
                src="/bio/avid-certified-media-composer-specialist.png"
                alt="Avid Certification"
                className="w-14"
              />

              <div className="text-[10px] uppercase tracking-[0.25em] leading-tight">
                Media Composer<br />
                101–110 Certified
              </div>
            </div>

          </div>

          {/* BIO TEXT */}
          <div className="max-w-2xl flex flex-col">

            <p className="text-sm md:text-[15px] leading-[1.75] opacity-80">

              Zsófi is a freelance film editor, assistant editor, and VFX editor based in Budapest, Hungary. She holds an MA in Film Studies and has over 15 years of experience across narrative film, commercials, and television, collaborating with a wide range of filmmakers and production teams internationally.

              <br /><br />

              She hold a BA degree in Film Editing from the University of Theatre and Film Arts in Budapest (2013–2016) and completed the Erasmus Mundus KinoEyes MA programme (2021–2023), studying in Lisbon, Tallinn, and Dublin. During this time, she developed several short films and completed her thesis within an international, practice-based creative environment.

              <br /><br />

              Editor of three theatrically released feature films:{" "}
              <em className="italic">Lesson Learned</em> (2024), which premiered at Locarno Film Festival and won three awards;{" "}
              <em className="italic">Not a Thing</em> (2022), for which she received Best Editing at the Toronto Film and Script Awards; and{" "}
              <em className="italic">Balaton Method</em> (2015).

              <br /><br />

              As an assistant editor, she has worked on major international productions including{" "}
              <em className="italic">Dune: Part Two and Three</em> (2023, 2026), Mattel’s{" "}
              <em className="italic">Matchbox</em> (2026), and National Geographic’s{" "}
              <em className="italic">Mars</em> (2016).

              <br /><br />

              Member of the European Film Academy and the Hungarian Society of Editors (HSE).

            </p>

            {/* CV BUTTON */}
            <div className="mt-12 flex justify-center">
              <a
                href="/bio/Zsofia_Ordog_CV_2026.pdf"
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

          </div>

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
      >
        <div className="relative w-14 h-8 flex items-center rounded-full px-1 bg-white/10">

          <svg className="absolute left-2 w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          <svg className="absolute right-2 w-3.5 h-3.5 opacity-70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

    </main>
  );
}