"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEscapeKey } from "@/hooks/useEscapeKey";

type AcademicWork = {
  id: string;
  title: string;
  year: string;
  type: string;
  abstract: string;
  pdf: string;
};

export default function AcademicPage() {
  const [lightMode, setLightMode] = useState(true);
  const [activePdf, setActivePdf] = useState<string | null>(null);

  useEscapeKey(!!activePdf, () => setActivePdf(null));

  const bg = lightMode ? "bg-white" : "bg-black";
  const text = lightMode ? "text-black" : "text-white";
  const border = lightMode ? "border-black/10" : "border-white/10";

  const works: AcademicWork[] = [
    {
      id: "1",
      title:
        "PLASTICITY OF THE DIGITAL IMAGE AND SYNTHETIC REALISM IN CONTEMPORARY HOLLYWOOD CINEMA - With an editorial approach to VFX workflow",
      year: "2023",
      type: "MA Thesis",
      abstract:
        "This thesis explores the transformation of filmmaking due to computerization and the shift to digital, specifically focusing on the implementation of digital visual effects. It examines visual effects from aesthetic, narrative, and theoretical perspectives, including cinematic realism theories and the relationship between editing and compositing.",
      pdf: "/DOCS/ZsofiaOrdog_KEM7_Thesis_16April2023.pdf",
    },
    {
      id: "2",
      title:
        "BUDAPEST AS ONE OF THE BIGGEST EUROPEAN PRODUCTION HUBS FOR HOLLYWOOD",
      year: "2021",
      type: "Industry Report",
      abstract:
        "This report analyses Hungary’s emergence as a leading European production hub for Hollywood, focusing on incentive structures, infrastructure, and long-term industry implications.",
      pdf: "/DOCS/ZsofiaOrdog_Perspectives on the Hungarian Audiovisual Industry.pdf",
    },
    {
      id: "3",
      title:
        "FILM AND THE HUNGARIAN GOVERNMENT'S ‘CULTURE WAR’ – Changing the intellectual elite based on an ideology",
      year: "2021",
      type: "Critical Essay",
      abstract:
        "This essay examines the centralization of the Hungarian cultural sector and its impact on artistic freedom, funding structures, and institutional independence in film production.",
      pdf: "/DOCS/ZsofiaOrdog_KEM7_critical_essay.pdf",
    },
    {
      id: "4",
      title: "ANTROPOMORFIZMUS A RUBBER CÍMŰ FILMBEN",
      year: "2016",
      type: "BA Thesis",
      abstract:
        "This thesis examines anthropomorphism in cinema through Quentin Dupieux’s Rubber (2010), focusing on narrative mechanisms that transform inanimate objects into cinematic characters.",
      pdf: "/DOCS/Ordog_Zsofia_Antropomorfizmus_a Rubber_c_filmben_2016.pdf",
    },
  ];

  const openPdf = (pdf: string) => {
    if (window.innerWidth < 768) {
      window.open(pdf, "_blank", "noopener,noreferrer");
      return;
    }

    setActivePdf(pdf);
  };

  return (
    <main className={`min-h-screen ${bg} ${text}`}>
      <Header lightMode={lightMode} />

      {/* CONTENT */}
      <div className="mx-auto max-w-4xl px-6 pt-40 md:px-10">
        <h1 className="mb-16 text-xs uppercase tracking-[0.4em] opacity-60">
          Academic Work
        </h1>

        <div className="space-y-16">
          {works.map((work) => (
            <article
              key={work.id}
              className={`border-b ${border} pb-10`}
            >
              {/* TITLE */}
              <button
                type="button"
                onClick={() => openPdf(work.pdf)}
                className="block cursor-pointer text-left focus:outline-none focus-visible:outline-none"
                aria-label={`Open ${work.title} PDF`}
              >
                <h2 className="text-lg font-normal leading-snug transition-opacity hover:opacity-50 md:text-xl">
                  {work.title}
                </h2>
              </button>

              {/* META */}
              <div className="mt-3 text-xs uppercase tracking-[0.35em] opacity-60">
                {work.year} · {work.type}
              </div>

              {/* ABSTRACT */}
              <p className="mt-6 max-w-3xl text-sm leading-relaxed opacity-80 md:text-base">
                {work.abstract}
              </p>

              {/* PDF ACTION */}
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => openPdf(work.pdf)}
                  className="inline-flex cursor-pointer items-center gap-2 text-xs uppercase tracking-[0.35em] opacity-80 transition hover:opacity-50 focus:outline-none focus-visible:outline-none"
                >
                  {/* PDF ICON */}
                  <svg
                    className="h-4 w-4 opacity-70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <path d="M14 2v6h6" />
                    <path d="M8 13h8" />
                    <path d="M8 17h8" />
                  </svg>

                  Read PDF
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* PDF MODAL — DESKTOP ONLY */}
      {activePdf && (
        <div
          className="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 md:flex"
          onClick={() => setActivePdf(null)}
        >
          <div
            className="relative h-[85vh] w-full max-w-5xl bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActivePdf(null)}
              className="absolute -top-10 right-0 cursor-pointer text-xs uppercase tracking-[0.3em] text-white opacity-70 transition hover:opacity-100 focus:outline-none focus-visible:outline-none"
            >
              Close
            </button>

            <iframe
              src={activePdf}
              title="PDF viewer"
              className="h-full w-full"
            />
          </div>
        </div>
      )}

      {/* FOOTER */}
      <Footer />

      {/* TOGGLE */}
      <button
        type="button"
        onClick={() => setLightMode(!lightMode)}
        className="fixed bottom-6 right-6 z-50 cursor-pointer focus:outline-none focus-visible:outline-none"
        aria-label={lightMode ? "Switch to dark mode" : "Switch to light mode"}
      >
        <div className="relative flex h-8 w-14 items-center rounded-full bg-white/10 px-1">
          <svg
            className="absolute left-2 h-3.5 w-3.5 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          <svg
            className="absolute right-2 h-3.5 w-3.5 opacity-70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>

          <div
            className={`h-6 w-6 rounded-full shadow-md transition-all duration-300 ${
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