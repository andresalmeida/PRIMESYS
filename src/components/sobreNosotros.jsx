import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { UserRound } from "lucide-react";

export default function SobreNosotros() {
  return (
    <div className="sobre">
      <Header />

      {/* ===== ENCABEZADO ===== */}
      <section className="encabezado">
        <div className="encabezado-contenido">
          <h1>SOBRE NOSOTROS</h1>
          <p>Innovación y excelencia tecnológica desde hace más de 25 años</p>
          <div className="linea"></div>
        </div>
      </section>

      {/* ===== QUIÉNES SOMOS ===== */}
      <section className="quienes">
        <div className="quienes-img">
          <img
            src="https://ascenty.com/wp-content/uploads/2022/04/tecnologia-na-educa%C3%A7%C3%A3o-1920x1000-c-default.png"
            alt="Transformación digital"
          />
        </div>

        <div className="quienes-texto">
          <h2>¿Quiénes Somos?</h2>
          <p>
            Somos una compañía líder en soluciones tecnológicas con más de 25 años de experiencia,
            orientada a optimizar operaciones y acelerar la transformación digital de organizaciones
            públicas y privadas.
          </p>
        </div>
      </section>

      {/* ===== MISIÓN / VISIÓN ===== */}
      <section className="mision-vision">
        <h2>Sobre Nosotros</h2>
        <div className="linea mv"></div>

        <div className="mv-container">
          {/* MISIÓN */}
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M14.5 3c-3.6 1.2-6.5 4.1-8 7.6l-3.2.9a1 1 0 0 0-.6 1.6l3.1 3.1a1 1 0 0 0 1.6-.6l.9-3.2C13 12 15.9 9.1 17.1 5.5c.2-.5-.4-1.1-.9-.9l-1.7.6zM7.5 16.5 6 18c-.6.6-.9 1.9-.9 1.9s1.3-.3 1.9-.9l1.5-1.5-1-1zM13.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                  fill="#fff"
                />
              </svg>
            </div>
            <h3>MISIÓN</h3>
            <p>
              Ofrecer soluciones tecnológicas innovadoras y personalizadas que respondan a las
              necesidades de nuestros clientes, con énfasis en calidad, seguridad y excelencia en el servicio.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="mv-card">
            <div className="mv-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M9 21h6v-1H9v1zm3-19a7 7 0 0 0-4 12.8V17h8v-2.2A7 7 0 0 0 12 2zm0 2a5 5 0 0 1 3 9 1 1 0 0 0-.4.8V15H9v-1.2a1 1 0 0 0-.4-.8A5 5 0 0 1 12 4z"
                  fill="#fff"
                />
              </svg>
            </div>
            <h3>VISIÓN</h3>
            <p>
              Ser referentes regionales en transformación digital por la confiabilidad de nuestras soluciones
              y la satisfacción sostenida de nuestros clientes.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CEO ===== */}
      <section className="ceo">
        <div className="ceo-content">
          <div className="ceo-info">
            <div className="ceo-avatar" aria-hidden>
              <UserRound size={28} />
            </div>
            <div>
              <h4>Marcelo Rea Guamán</h4>
              <p>CEO & Fundador</p>
            </div>
          </div>
          <blockquote>
            “En PRIMESYS construimos relaciones de largo plazo y productos confiables. Nuestro compromiso
            es que cada entrega sume valor real al negocio de nuestros clientes.”
          </blockquote>
        </div>
      </section>

      <Footer />

      {/* ===== ESTILOS ===== */}
      <style>{`
        :root {
          --azul1: #0b1a2d;
          --azul2: #0f2640;
          --celeste: #00aaff;
          --texto: #eaf2ff;
          --grisfondo: #eaf1f6;
        }

        body, html {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
        }

        .sobre {
          background: var(--azul1);
          color: var(--texto);
        }

        /* ENCABEZADO */
        .encabezado {
          background: linear-gradient(180deg, var(--azul2), var(--azul1));
          text-align: center;
          padding: 70px 0 60px;
        }

        .encabezado-contenido {
          max-width: 800px;
          margin: 0 auto;
        }

        .encabezado h1 {
          margin: 0;
          font-weight: 800;
          letter-spacing: 3px;
          font-size: 32px;
        }

        .encabezado p {
          margin: 12px 0;
          color: var(--texto);
          font-size: 16px;
        }

        .linea {
          width: 100px;
          height: 3px;
          background: var(--celeste);
          margin: 10px auto 0;
          border-radius: 3px;
        }

        /* QUIÉNES SOMOS */
        .quienes {
          display: flex;
          justify-content: center;
          align-items: stretch;
          background: var(--azul1);
        }

        .quienes-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .quienes-img,
        .quienes-texto {
          flex: 1;
        }

        .quienes-texto {
          background: radial-gradient(circle at top left, rgba(0,170,255,.2), transparent 70%);
          padding: 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .quienes-texto h2 {
          font-size: 28px;
          margin-bottom: 15px;
          color: #aee7ff;
        }

        .quienes-texto p {
          line-height: 1.8;
          color: var(--texto);
          max-width: 600px;
        }

        /* MISIÓN / VISIÓN */
        .mision-vision {
          background: var(--grisfondo);
          color: #0b1a2d;
          text-align: center;
          padding: 70px 0;
        }

        .mision-vision h2 {
          color: #0b1a2d;
          font-weight: 700;
          margin: 0;
          font-size: 26px;
        }

        .linea.mv {
          width: 80px;
          height: 3px;
          background: #0077b6;
          margin: 10px auto 40px;
        }

        .mv-container {
          display: flex;
          justify-content: center;
          gap: 80px;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto;
        }

        .mv-card {
          flex: 1;
          max-width: 400px;
          text-align: center;
        }

        .mv-icon {
          background: radial-gradient(circle at top, #1aa6d6, #0a223a);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.3);
        }

        .mv-icon svg {
          width: 28px;
          height: 28px;
        }

        .mv-card h3 {
          color: #004777;
          margin-bottom: 15px;
        }

        .mv-card p {
          color: #003a5c;
          line-height: 1.8;
          font-size: 15px;
        }

        /* CEO */
        .ceo {
          background: linear-gradient(90deg, #0e2238, #0b1a2d);
          padding: 50px 0;
          color: #aee7ff;
        }

        .ceo-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
          gap: 40px;
          padding: 0 30px;
        }

        .ceo-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ceo-avatar {
          background: radial-gradient(circle at top, #00aaff, #0a223a);
          width: 65px;
          height: 65px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #dff4ff;
          box-shadow: 0 8px 18px rgba(0, 170, 255, 0.25);
        }

        blockquote {
          font-style: italic;
          line-height: 1.8;
          color: #bce7ff;
          margin: 0;
          max-width: 600px;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .quienes {
            flex-direction: column;
          }

          .quienes-texto {
            padding: 40px;
            text-align: center;
          }

          .ceo-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
