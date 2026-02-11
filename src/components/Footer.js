import React from "react";
import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="ps-footer">
      <div className="ps-footer__inner" style={{ justifyContent: 'center', textAlign: 'center' }}>
        <div>
          <p className="ps-footer__eyebrow" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} />
            Primesys Digital Studio
          </p>
          <h3>Transformamos procesos en productos digitales de impacto.</h3>
          <p style={{ marginTop: '1rem', color: '#94a3b8', fontSize: '0.95rem' }}>
            Quito, Ecuador
          </p>
        </div>
      </div>

      <p className="ps-footer__copy" style={{ textAlign: 'center' }}>
        © 2026 PRIMESYS. Soluciones tecnológicas para equipos que operan en serio.
      </p>
    </footer>
  );
}
