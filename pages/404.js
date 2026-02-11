import Link from "next/link";
import SEO from "../src/components/SEO";

export default function Custom404() {
  return (
    <>
      <SEO
        title="Página no encontrada - Error 404"
        description="La página que buscas no existe o ha sido movida. Regresa a la página principal de PRIMESYS para encontrar lo que necesitas."
        noIndex={true}
      />
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0b1a2d 0%, #0f2744 100%)",
        color: "#fff",
        textAlign: "center",
        padding: "2rem"
      }}>
        <h1 style={{ fontSize: "6rem", margin: "0", color: "#3b82f6" }}>404</h1>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Página no encontrada</h2>
        <p style={{ color: "#94a3b8", maxWidth: "400px", marginBottom: "2rem" }}>
          La página que buscas no existe o ha sido movida.
        </p>
        <Link 
          href="/"
          style={{
            background: "#3b82f6",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            textDecoration: "none",
            fontWeight: "500",
            transition: "background 0.2s"
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </>
  );
}
