import Link from "next/link";

export default function Header({
  lightMode,
}: {
  lightMode: boolean;
}) {
  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center px-6 py-5 md:px-10 backdrop-blur-md transition-colors"
      style={{
        backgroundColor: lightMode
          ? "rgba(255,255,255,0.75)"
          : "rgba(0,0,0,0.65)",
        color: lightMode ? "#000000" : "#ffffff",
      }}
    >

      {/* 🧑 LOGO (LEFT) */}
      <Link href="/" className="flex-shrink-0">
        <img
          src={lightMode ? "/HOME/ZO_LOGO_black.png" : "/HOME/ZO_LOGO_white.png"}
          alt="Logo"
          className="h-15 w-auto opacity-70 hover:opacity-100 transition md:h-15"
        />
      </Link>

      {/* 🎞️ MENU (RIGHT SIDE) */}
      <nav className="hidden md:flex gap-8 text-xs md:text-[14px] uppercase tracking-[0.25em] ml-auto mr-10">
        <Link href="/film" className="hover:opacity-60 transition">Film</Link>
        <Link href="/assistant-vfx" className="hover:opacity-60 transition">AE / VFX</Link>
        <Link href="/commercial" className="hover:opacity-60 transition">Ads</Link>
        <Link href="/tv" className="hover:opacity-60 transition">TV</Link>
        <Link href="/other" className="hover:opacity-60 transition">Other</Link>
        <Link href="/text" className="hover:opacity-60 transition">Academic</Link>
        <Link href="/bio" className="hover:opacity-60 transition">Bio</Link>
      </nav>

      {/* 🎬 IMDb (RIGHT EDGE) */}
      <a
        href="https://www.imdb.com/name/nm6768698/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/HOME/imdb-logo.png"
          alt="IMDb"
          className="h-6 w-auto opacity-80 hover:opacity-100 transition"
        />
      </a>

    </header>
  );
}