"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#impact", label: "Impact" },
  { href: "#model", label: "Model" },
  { href: "#matchday", label: "Matchday" },
  { href: "#season", label: "Season" },
  { href: "#founder", label: "Founder" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`display text-[26px] leading-none tracking-tight ${className}`}>
      Soccer<span className="text-flare">4</span>Everyone
    </span>
  );
}

/** Transparent over the hero, then settles into a blurred pill once the page scrolls (pattern adapted from the Sházia 21st.dev navbar). */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3">
      <div className="wrap">
        <nav
          className={`flex h-14 items-center justify-between rounded-full pl-5 pr-2 transition-all duration-300 ${
            scrolled || open ? "bg-pitch/80 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.6)] ring-1 ring-line backdrop-blur-xl" : ""
          }`}
          aria-label="Main"
        >
          <a href="#top" aria-label="Soccer4Everyone home">
            <Wordmark />
          </a>
          <ul className="hidden items-center gap-7 text-[14px] text-chalk/80 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="ulink hover:text-chalk">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#partner" className="btn btn-flare hidden !h-10 !px-5 !text-[14px] md:inline-flex">
            Partner with us
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-[2px] w-5 bg-chalk transition-all ${open ? "top-[5px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-[2px] w-5 bg-chalk transition-all ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </nav>
      </div>
      {open && (
        <div className="fixed inset-0 top-0 -z-10 flex flex-col justify-center bg-pitch px-6 md:hidden">
          <ul className="space-y-4">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="display text-6xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#partner" onClick={() => setOpen(false)} className="btn btn-flare mt-10 w-full">
            Partner with us
          </a>
        </div>
      )}
    </header>
  );
}
