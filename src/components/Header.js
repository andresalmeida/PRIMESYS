import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 necesario para redirigir con estado
import logo from "../logo/logo.svg";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate(); // 👈
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  // color institucional (celeste/azul)
  const hoverGrad = "linear-gradient(135deg, #1b587e, #277496)";
  const activeShadow = "0 8px 24px rgba(63, 171, 255, .35)";

  const linkStyle = {
    padding: "0.4em 0.8em",
    borderRadius: "6px",
    color: "#F0E7D5",
    background: "#212840",
    textDecoration: "none",
    whiteSpace: "nowrap",
    display: "inline-block",
  };

  // ruta actual para marcar activo
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <header
      style={{
        boxShadow: "0 8px 32px rgba(33,40,64,0.2)",
        background: "linear-gradient(135deg, #212840, #203a43, #2c5364)",
        color: "#F0E7D5",
        padding: "0.8rem 0",
        width: "100%",
        position: "relative",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "70px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <div
          className="logo"
          style={{
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            zIndex: 10,
          }}
        >
          <img
            src={logo}
            alt="Primesys Logo"
            style={{
              width: "180px",
              height: "auto",
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>

        {/* Nav */}
        <nav
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* hamburguesa */}
          <div
            className="menu-icon"
            onClick={toggleSidebar}
            style={{
              display: "none",
              fontSize: "1.8rem",
              cursor: "pointer",
              color: "#F0E7D5",
              padding: "0.5rem",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
            }}
          >
            &#9776;
          </div>

          <ul
            className={`nav-links ${sidebarOpen ? "open" : ""}`}
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <li>
              <a href="/" onClick={closeSidebar} style={{ ...linkStyle }}>
                Inicio
              </a>
            </li>

            <li>
              <a
                href="/sobre-nosotros"
                onClick={closeSidebar}
                style={{
                  ...linkStyle,
                  background:
                    path === "/sobre-nosotros" ? hoverGrad : linkStyle.background,
                  boxShadow: path === "/sobre-nosotros" ? activeShadow : "none",
                  fontWeight: "500",
                }}
              >
                Sobre Nosotros
              </a>
            </li>

            {/* SERVICIOS */}
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  closeSidebar();
                  const path = typeof window !== "undefined" ? window.location.pathname : "/";
                  if (path === "/") {
                    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("triggerServicesReveal"));
                  } else {
                    navigate("/", { state: { scrollTo: "services", triggerReveal: true } });
                  }
                }}
                style={{ ...linkStyle }}
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="/nuestro-trabajo"
                onClick={closeSidebar}
                style={{
                  ...linkStyle,
                  background:
                    path === "/nuestro-trabajo" ? hoverGrad : linkStyle.background,
                  boxShadow: path === "/nuestro-trabajo" ? activeShadow : "none",
                  fontWeight: "600",
                }}
              >
                Nuestro Trabajo
              </a>
            </li>

            {/* CLIENTES */}
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  closeSidebar();
                  const path = typeof window !== "undefined" ? window.location.pathname : "/";
                  if (path === "/") {
                    document.getElementById("clients")?.scrollIntoView({ behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("triggerClientsReveal"));
                  } else {
                    navigate("/", { state: { scrollTo: "clients", triggerReveal: true } });
                  }
                }}
                style={{ ...linkStyle }}
              >
                Clientes
              </a>
            </li>

            {/* CONTACTO */}
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  closeSidebar();
                  if (path === "/") {
                    // ya estamos en Home → scroll directo + animación
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                    window.dispatchEvent(new CustomEvent("triggerContactReveal"));
                  } else {
                    // venimos de otra página → redirige con estado
                    navigate("/", {
                      state: { scrollTo: "contact", triggerReveal: true },
                    });
                  }
                }}
                style={{ ...linkStyle }}
              >
                Contacto
              </a>
            </li>

            {sidebarOpen && (
              <li
                className="close-icon"
                onClick={closeSidebar}
                style={{
                  color: "#F0E7D5",
                  fontSize: "2rem",
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  cursor: "pointer",
                  background: "rgba(255, 255, 255, 0.1)",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                }}
              >
                &times;
              </li>
            )}
          </ul>
        </nav>
      </div>

      {/* Estilos internos */}
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

        /* Hover institucional (celeste) */
        .nav-links a:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 26px rgba(63, 171, 255, .35) !important;
          background: ${hoverGrad} !important;
        }

        .menu-icon:hover,
        .close-icon:hover {
          background: rgba(255, 255, 255, 0.2) !important;
          transform: scale(1.08) !important;
        }
      `}</style>
    </header>
  );
}