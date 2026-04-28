import Link from "next/link";

/* ── Exact same links as Navbar ── */
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Moto", href: "/#our-moto" },
  { label: "About Us", href: "/#about" },
  { label: "Features", href: "/#features" },
  { label: "Product", href: "/#product" },
  { label: "Upcoming Project", href: "/#upcoming" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];


const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/easySolutionsltd",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/EasySolnsLtd",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.988l4.26 5.632 4.746-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/easySolutionsltd/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/easySolutionsltd/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@EasySolutionsLtdOfficial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b132a] text-white text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col gap-8">

          {/* ── Top: brand + social + region ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/10 pb-8">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-500 flex items-center justify-center font-black text-white text-base">
                ES
              </div>
              <div>
                <p className="font-bold text-base text-white">Easy Solutions</p>
                <p className="text-xs text-white/60">Modern IT &amp; Software Solutions</p>
              </div>
            </Link>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 hover:border-white/25 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Region */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/15 bg-white/5 text-sm font-semibold text-white/80">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
              </svg>
              United Kingdom (EN)
            </div>
          </div>

          {/* ── Nav links — same as Navbar ── */}
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-white/70 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* ── Contact info ── */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              Flat 60, Gayton House, Chiltern Road, E3 4BY, London, United Kingdom
            </span>
            <span className="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-blue-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:info@easysolutionsltd.com" className="hover:text-white transition-colors">
                info@easysolutionsltd.com
              </a>
            </span>
          </div>

    

        </div>
      </div>
    </footer>
  );
}
