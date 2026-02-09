import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", type: "route", to: "/" },
  { label: "Servicios", type: "section", section: "services" },
  { label: "Clientes", type: "section", section: "clients" },
  { label: "Nuestro Trabajo", type: "route", to: "/nuestro-trabajo" },
  { label: "Sobre Nosotros", type: "route", to: "/sobre-nosotros" },
  { label: "Contacto", type: "section", section: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const location = router;

  const closeMenu = () => setMenuOpen(false);

  const goToSection = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      closeMenu();
      return;
    }

    router.push({
      pathname: "/",
      query: { scrollTo: section }
    });
    closeMenu();
  };

  return (
    <header className="ps-header">
      <div className="ps-header__noise" aria-hidden />
      <div className="ps-header__inner">
        <Link href="/" className="ps-header__brand" onClick={closeMenu}>
          <span className="ps-header__brand-mark" aria-hidden>
            {`</>`}
          </span>
          <span className="ps-header__brand-word">primesys</span>
        </Link>

        <button
          className="ps-header__toggle"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav className={`ps-header__nav ${menuOpen ? "is-open" : ""}`}>
          {navItems.map((item) => {
            const isRoute = item.type === "route";
            const isActive = isRoute ? location.pathname === item.to : false;

            if (!isRoute) {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => goToSection(item.section)}
                  className="ps-header__link"
                >
                  {item.label}
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.to}
                onClick={closeMenu}
                className={`ps-header__link ${isActive ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
