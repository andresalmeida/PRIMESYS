import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(90deg, #212840 60%, #203a43 100%)',
      color: '#F0E7D5',
      textAlign: 'center',
      padding: '1em 0 1.2em 0',
      marginTop: '2em',
      borderTop: '2px solid #F0E7D5',
      fontSize: '1.18em',
      letterSpacing: '0.5px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7em' }}>
        <div style={{ fontWeight: 600, fontSize: '1.2em', letterSpacing: '1px' }}>PRIMESYS</div>
        <div style={{ opacity: 0.8 }}>Soluciones tecnológicas para tu negocio</div>
        <div style={{ opacity: 0.7, fontSize: '0.95em' }}>
          &copy; 2025 PRIMESYS. Todos los derechos reservados.
        </div>
        <div style={{ marginTop: '0.5em', display: 'flex', gap: '1.5em', justifyContent: 'center' }}>
          {/* Correo comentado temporalmente hasta tener la dirección correcta */}
          {/* <a href="mailto:info@primesys.com" style={{ color: '#F0E7D5', textDecoration: 'none', opacity: 0.8, fontSize: '1.2em' }}>info@primesys.com</a> */}
          {/* <span style={{ color: '#F0E7D5', opacity: 0.5 }}>|</span> */}
          {/* LinkedIn comentado temporalmente hasta tener el perfil correcto */}
          {/* <a href="https://www.linkedin.com/company/primesys" target="_blank" rel="noopener noreferrer" style={{ color: '#F0E7D5', textDecoration: 'none', opacity: 0.8, fontSize: '1.2em' }}>LinkedIn</a> */}
        </div>
      </div>
    </footer>
  );
}