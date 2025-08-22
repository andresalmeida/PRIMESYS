import React, { useState } from "react";
import logo from "../logo/logo.svg";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);
  const linkStyle = {
    padding: '0.4em 0.8em',
    borderRadius: '6px',
    color: '#F0E7D5',
    background: '#212840',
    textDecoration: 'none',
  };
  return (
    <header style={{
      boxShadow: '0 4px 16px rgba(33,40,64,0.15)',
      background: 'linear-gradient(to right, #212840, #203a43, #2c5364)',
      color: '#F0E7D5',
      padding: '1vh 0',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw'
    }}>
      <div style={{  
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',     
        margin: '0 auto',
        padding: '0 24px',
        gap: 24,
        justifyContent: 'space-between'
      }}>
        {/* Logo izquierda */}
        <div className="logo" style={{ 
          display: 'flex', 
          alignItems: 'center',
          flexShrink: 0  
        }}>
          <img src={logo} alt="Primesys Logo"
              style={{ 
                width: 200, 
                height: 'auto', 
                boxShadow: '0 2px 8px rgba(33,40,64,0.10)' 
              }} />
        </div>

        {/* Nav derecha */}
        <nav style={{ 
          position: 'relative', 
          display: 'flex',
          justifyContent: 'flex-end',  
          flex: 1  
        }}>
          <div className="menu-icon" onClick={toggleSidebar}
              style={{ 
                display: 'none', 
                fontSize: '2.2rem', 
                cursor: 'pointer', 
                color: '#fff' 
              }}>
            &#9776;
          </div>

          <ul className={`nav-links ${sidebarOpen ? 'open' : ''}`} style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'  
          }}>
            <li><a href="#hero" onClick={closeSidebar} style={linkStyle}>Inicio</a></li>
            <li><a href="#mision" onClick={closeSidebar} style={linkStyle}>Sobre Nosotros</a></li>
            <li><a href="#services" onClick={closeSidebar} style={linkStyle}>Servicios</a></li>
            <li><a href="#clients" onClick={closeSidebar} style={linkStyle}>Clientes</a></li>
            <li><a href="#contact" onClick={closeSidebar} style={linkStyle}>Contacto</a></li>
            {sidebarOpen && (
              <li className="close-icon" onClick={closeSidebar}
                  style={{ 
                    color:'#F0E7D5', 
                    fontSize:'2.5rem', 
                    position:'absolute', 
                    top:20, 
                    right:20, 
                    cursor:'pointer' 
                  }}>
                &times;
              </li>
            )}
          </ul>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .menu-icon { display: block !important; }
          .nav-links { display: none !important; }
          .nav-links.open {
            display: flex !important;
            flex-direction: column;
            position: fixed;
            top: 0; right: 0;
            width: 70%;
            height: 100%;
            background: #212840;
            padding-top: 4rem;
            gap: 2rem;
            justify-content: flex-start;
            align-items: center;
            z-index: 1000;
          }
        }
      `}</style>
    </header>
  );
}