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
      boxShadow: '0 8px 32px rgba(33,40,64,0.2)',
      background: 'linear-gradient(135deg, #212840, #203a43, #2c5364)',
      color: '#F0E7D5',
      padding: '0.8rem 0',
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1400px',     
        margin: '0 auto',
        padding: '0 2rem',
        height: '70px'
      }}>
        {/* Logo izquierda */}
        <div className="logo" style={{ 
          display: 'flex', 
          alignItems: 'center',
          flexShrink: 0,
          zIndex: 10
        }}>
          <img src={logo} alt="Primesys Logo"
              style={{ 
                width: '180px', 
                height: 'auto', 
                filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))',
                transition: 'transform 0.3s ease'
              }} 
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          />
        </div>

        {/* Nav derecha */}
        <nav style={{ 
          position: 'relative', 
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}>
          <div className="menu-icon" onClick={toggleSidebar}
              style={{ 
                display: 'none', 
                fontSize: '1.8rem', 
                cursor: 'pointer', 
                color: '#F0E7D5',
                padding: '0.5rem',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
            &#9776;
          </div>

          <ul className={`nav-links ${sidebarOpen ? 'open' : ''}`} style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            height: '100%'
          }}>
            <li><a href="/" onClick={closeSidebar} style={{
              ...linkStyle,
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '500',
              position: 'relative',
              overflow: 'hidden'
            }}>Inicio</a></li>
            <li><a href="/sobre-nosotros" onClick={closeSidebar} style={{
              ...linkStyle,
              background: window.location.pathname === '/sobre-nosotros' ? 
                'linear-gradient(135deg, #FFB866, #FF8A6B)' : linkStyle.background,
              boxShadow: window.location.pathname === '/sobre-nosotros' ? 
                '0 4px 15px rgba(255, 184, 102, 0.3)' : 'none',
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>Sobre Nosotros</a></li>
            <li><a href="/" onClick={(e) => {
              closeSidebar();
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }
            }} style={{
              ...linkStyle,
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>Servicios</a></li>
            <li><a href="/nuestro-trabajo" onClick={closeSidebar} style={{
              ...linkStyle,
              background: window.location.pathname === '/nuestro-trabajo' ? 
                'linear-gradient(135deg, #FFB866, #FF8A6B)' : linkStyle.background,
              boxShadow: window.location.pathname === '/nuestro-trabajo' ? 
                '0 4px 15px rgba(255, 184, 102, 0.3)' : 'none',
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '600',
              transform: 'translateY(0)'
            }}>Nuestro Trabajo</a></li>
            <li><a href="/" onClick={(e) => {
              closeSidebar();
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' });
              }
            }} style={{
              ...linkStyle,
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>Clientes</a></li>
            <li><a href="/" onClick={(e) => {
              closeSidebar();
              if (window.location.pathname === '/') {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }} style={{
              ...linkStyle,
              transition: 'all 0.3s ease',
              fontSize: '0.95rem',
              fontWeight: '500'
            }}>Contacto</a></li>
            {sidebarOpen && (
              <li className="close-icon" onClick={closeSidebar}
                  style={{ 
                    color:'#F0E7D5', 
                    fontSize:'2rem', 
                    position:'absolute', 
                    top: '1rem', 
                    right: '1rem', 
                    cursor:'pointer',
                    background: 'rgba(255, 255, 255, 0.1)',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                &times;
              </li>
            )}
          </ul>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .menu-icon { 
            display: block !important; 
          }
          .nav-links { 
            display: none !important; 
          }
          .nav-links.open {
            display: flex !important;
            flex-direction: column;
            position: fixed;
            top: 0; 
            right: 0;
            width: 80%;
            height: 100vh;
            background: linear-gradient(135deg, #212840, #203a43);
            padding: 4rem 2rem 2rem;
            gap: 1.5rem;
            justify-content: flex-start;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(20px);
            border-left: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);
          }
          .logo img {
            width: 150px !important;
          }
        }
        
        /* Hover effects para los links */
        .nav-links a:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(255, 184, 102, 0.4) !important;
          background: linear-gradient(135deg, #FFB866, #FF8A6B) !important;
        }
        
        .menu-icon:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.1) !important;
        }
        
        .close-icon:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.1) !important;
        }
      `}</style>
    </header>
  );
}