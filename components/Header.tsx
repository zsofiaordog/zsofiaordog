{/* MOBILE MENU */}
{menuOpen && (
  <div
    className="md:hidden border-t px-6 pb-8 pt-5"
    style={{
      borderColor: lightMode
        ? "rgba(0,0,0,0.12)"
        : "rgba(255,255,255,0.16)",
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