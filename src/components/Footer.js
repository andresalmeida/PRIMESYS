import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="ps-footer">
      <div className="ps-footer__inner">
        <div>
          <p className="ps-footer__eyebrow">
            <Sparkles size={14} />
            Primesys Digital Studio
          </p>
          <h3>Transformamos procesos en productos digitales de impacto.</h3>
        </div>


      </div>

      <p className="ps-footer__copy">
        © 2026 PRIMESYS. Soluciones tecnológicas para equipos que operan en serio.
      </p>
    </footer>
  );
}
