import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { label: "CAPACIDADES",    type: "section", section: "services" },
  { label: "CLIENTES",       type: "section", section: "clients" },
  { label: "NUESTRO TRABAJO", type: "route",   to: "/nuestro-trabajo" },
  { label: "SOBRE NOSOTROS", type: "route",   to: "/sobre-nosotros" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const goSection = (id) => {
    setOpen(false);
    if (router.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      router.push({ pathname: "/", query: { scrollTo: id } });
    }
  };

  return (
    <nav className="bg-white text-surface-container-lowest w-full top-0 sticky border-b border-outline-variant z-50">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-container-max mx-auto">

        {/* Brand */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-display-xl font-extrabold uppercase tracking-tighter text-surface-container-lowest !text-[32px] md:!text-[40px] leading-none hover:opacity-80 transition-opacity"
        >
          PRIMESYS
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item) =>
            item.type === "section" ? (
              <button
                key={item.label}
                type="button"
                onClick={() => goSection(item.section)}
                className="text-surface-variant hover:text-surface-container-lowest transition-colors font-label-mono text-label-mono tracking-widest bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.to}
                className="text-surface-variant hover:text-surface-container-lowest transition-colors font-label-mono text-label-mono tracking-widest"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="bg-secondary-container text-white px-6 py-3 font-label-mono text-label-mono uppercase tracking-widest hover:bg-on-secondary transition-colors"
          >
            AGENDAR
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-surface-container-lowest p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
            <rect width="22" height="2" fill="currentColor" />
            <rect y="7" width="22" height="2" fill="currentColor" />
            <rect y="14" width="22" height="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-outline-variant px-margin-mobile py-6 flex flex-col gap-5">
          {navLinks.map((item) =>
            item.type === "section" ? (
              <button
                key={item.label}
                type="button"
                onClick={() => goSection(item.section)}
                className="text-left text-surface-container-lowest font-label-mono text-label-mono tracking-widest bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.to}
                onClick={() => setOpen(false)}
                className="text-surface-container-lowest font-label-mono text-label-mono tracking-widest"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block bg-secondary-container text-white px-6 py-3 font-label-mono text-label-mono uppercase tracking-widest text-center"
          >
            AGENDAR
          </Link>
        </div>
      )}
    </nav>
  );
}
