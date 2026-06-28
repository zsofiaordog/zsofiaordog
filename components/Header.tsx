"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header({
  lightMode,
  transparent = false,
}: {
  lightMode: boolean;
  transparent?: boolean;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/film", label: "Film" },
    { href: "/assistant-vfx", label: "AE / VFX" },
    { href: "/commercial", label: "Ads" },
    { href: "/tv", label: "TV" },
    { href: "/other", label: "Other" },
    { href: "/text", label: "Academic" },
    { href: "/bio", label: "Bio" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        transparent ? "" : "backdrop-blur-md"
      } transition-colors`}
      style={{
        backgroundColor: transparent
          ? "transparent"
          : lightMode
          ? "rgba(255,255,255,0.75)"
          : "rgba(0,0,0,0.65)",
        color: lightMode ? "#000000" : "#ffffff",
      }}
    >
      <div className="flex items-center px-6 py-5 md:px-10">
        {/* LOGO */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={lightMode ? "/HOME/ZO_LOGO_Black.png" : "/HOME/ZO_LOGO_white.png"}
            alt="Logo"
            className="h-12 w-auto opacity-70 hover:opacity-100 transition md:h-15"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-xs md:text-[14px] uppercase tracking-[0.25em] ml-auto mr-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:opacity-60 transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* IMDb */}
        <a
          href="https://www.imdb.com/name/nm6768698/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto md:ml-0"
        >
          <img
            src="/HOME/imdb-logo.png"
            alt="IMDb"
            className="h-6 w-auto opacity-80 hover:opacity-100 transition"
          />
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="ml-5 flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-px w-7 bg-current" />
          <span className="block h-px w-7 bg-current" />
          <span className="block h-px w-7 bg-current" />
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-8 pt-5 backdrop-blur-xl"
          style={{
            backgroundColor: transparent
              ? "rgba(0,0,0,0.18)"
              : lightMode
              ? "rgba(255,255,255,0.82)"
              : "rgba(0,0,0,0.72)",
            borderTop: `1px solid ${
              lightMode
                ? "rgba(0,0,0,0.10)"
                : "rgba(255,255,255,0.10)"
            }`,
          }}
        >
          <nav className="flex flex-col gap-5 text-xs uppercase tracking-[0.25em]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:opacity-60 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}