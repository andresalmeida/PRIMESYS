import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../Styles/servicios.css";

export default function NuestroTrabajo() {
  // URLs de tus dashboards de Power BI
  const powerBIDashboards = [
    {
      id: 1,
      title: "Análisis de Importaciones en Ecuador - Régimen General",
      description: "Dashboard interactivo que analiza las importaciones de Ecuador bajo régimen general durante el período 2024-2025. Incluye métricas de valor CIF, países de origen, productos principales, tendencias temporales y análisis comparativo sectorial.",
      embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiODM0YThhMWMtYTdjMC00OWU1LWFiNDctZWUyMTBiMWE3Mjc5IiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9&pageName=9853d6945e241505ddeb",     
      // ☝️ Si este no funciona, obtén la URL pública de Power BI:
      // 1. Ve a tu dashboard en Power BI
      // 2. Archivo → "Insertar en sitio web público"  
      // 3. Copia el enlace público que empiece con "https://app.powerbi.com/view?r="
      category: "Análisis Comercial Internacional",
      technologies: ["Power BI", "DAX", "Power Query", "Datos Aduaneros", "Excel"]
    },
    {
      id: 2,
      title: "Government Funding for Anxiety/Depression Research", 
      description: "Análisis académico sobre la financiación gubernamental destinada a la investigación de ansiedad y depresión a nivel mundial. Visualiza la prioridad que cada país otorga a la salud mental através de sus inversiones en investigación y desarrollo.",
      embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTA5MDg4N2YtNDZmMC00MzI3LWE0ZTMtM2Q0YjkyZDg1Y2QzIiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9",
      category: "Investigación en Salud Pública",
      technologies: ["Power BI", "Statistical Analysis", "Global Health Data", "R/Python"]
    }
  ];

  const otherProjects = [
    {
      id: 3,
      title: "Sistema de Gestión Empresarial",
      description: "Plataforma web completa para gestión de inventarios, facturación y control de clientes desarrollada a medida.",
      image: "/path/to/project-image.jpg", // Opcional: imagen del proyecto
      category: "Desarrollo Web",
      technologies: ["React", "Node.js", "PostgreSQL"]
    },
    {
      id: 4,
      title: "App Móvil de Servicios",
      description: "Aplicación móvil multiplataforma para prestación de servicios con geolocalización y sistema de reservas.",
      image: "/path/to/app-image.jpg", // Opcional: imagen del proyecto  
      category: "Desarrollo Móvil",
      technologies: ["React Native", "Firebase", "Google Maps API"]
    }
  ];

  return (
    <div style={{ background: 'linear-gradient(135deg, #212840, #203a43, #2c5364)', minHeight: '100vh' }}>
      <Header />
      <div className="container" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '1.5rem',
          background: 'rgba(240, 231, 213, 0.1)',
          borderRadius: '20px',
          padding: '2rem 2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(240, 231, 213, 0.2)'
        }}>
          <h1 style={{ 
            color: '#F0E7D5', 
            fontSize: '3rem', 
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontWeight: '700'
          }}>
            🚀 Nuestro Trabajo
          </h1>
          <p style={{ 
            color: '#F0E7D5', 
            fontSize: '1.2rem', 
            maxWidth: '900px', 
            margin: '0 auto',
            opacity: '0.95',
            lineHeight: '1.6'
          }}>
            Explora nuestros proyectos de análisis de datos y business intelligence. Desde análisis económicos y comerciales 
            hasta investigación en salud pública, demostramos nuestra capacidad de transformar datos complejos en insights accionables.
          </p>
        </div>

        {/* Sección de Dashboards Power BI */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ 
            color: '#F0E7D5', 
            fontSize: '2.5rem', 
            marginBottom: '1.5rem', 
            textAlign: 'center',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            📊 Dashboards de Business Intelligence
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '1rem'
          }}>
            {powerBIDashboards.map((dashboard) => (
              <div key={dashboard.id} style={{
                background: 'rgba(240, 231, 213, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                padding: '2rem',
                border: '1px solid rgba(240, 231, 213, 0.3)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
              }}
              >
                {/* Mostrar dashboard directamente en iframe si hay URL válida */}
                {dashboard.embedUrl && dashboard.embedUrl !== "TU_URL_EMBED_DASHBOARD_2" ? (
                  <div style={{
                    borderRadius: '15px',
                    height: '450px',
                    marginBottom: '1.5rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(33, 40, 64, 0.2)'
                  }}>
                    <iframe 
                      src={dashboard.embedUrl}
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allowFullScreen="true"
                      style={{ border: 'none', borderRadius: '15px' }}
                      title={dashboard.title}
                    />
                  </div>
                ) : (
                  // Placeholder para dashboards sin URL configurada
                  <div style={{
                    background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
                    borderRadius: '15px',
                    height: '350px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '2px dashed #212840'
                  }}>
                    <div style={{ textAlign: 'center', color: '#212840' }}>
                      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📈</div>
                      <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>Dashboard de Power BI</p>
                      <small>Configura la URL para mostrar el dashboard</small>
                    </div>
                  </div>
                )}
                
                <h3 style={{ 
                  color: '#212840', 
                  marginBottom: '0.8rem',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  {dashboard.title}
                </h3>
                <p style={{ 
                  color: '#555', 
                  marginBottom: '1.2rem', 
                  lineHeight: '1.7',
                  fontSize: '1.05rem'
                }}>
                  {dashboard.description}
                </p>
                
                <div style={{ marginBottom: '1.2rem' }}>
                  <span style={{
                    background: dashboard.category === 'Análisis Comercial Internacional' ? 
                      'linear-gradient(135deg, #e8f5e8, #d4edda)' : 
                      dashboard.category === 'Investigación en Salud Pública' ? 
                      'linear-gradient(135deg, #fff3cd, #ffeaa7)' : 
                      'linear-gradient(135deg, #e3f2fd, #bbdefb)',
                    color: dashboard.category === 'Análisis Comercial Internacional' ? '#155724' : 
                           dashboard.category === 'Investigación en Salud Pública' ? '#856404' : '#1976d2',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '25px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                  }}>
                    {dashboard.category}
                  </span>
                </div>

                <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
                  <strong style={{ 
                    color: '#212840', 
                    fontSize: '1rem',
                    display: 'block',
                    marginBottom: '0.8rem'
                  }}>
                    🛠️ Tecnologías utilizadas:
                  </strong>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem', 
                    justifyContent: 'center' 
                  }}>
                    {dashboard.technologies.map((tech, index) => (
                      <span key={tech} style={{ 
                        background: 'linear-gradient(135deg, #212840, #203a43)',
                        color: '#F0E7D5',
                        padding: '0.3rem 0.8rem',
                        borderRadius: '15px',
                        fontSize: '0.85rem',
                        fontWeight: '500'
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button
                    onClick={() => window.open(dashboard.embedUrl, '_blank')}
                    style={{
                      background: 'linear-gradient(135deg, #FFB866, #FF8A6B)',
                      color: '#fff',
                      border: 'none',
                      padding: '1rem 2rem',
                      borderRadius: '30px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 8px 25px rgba(255, 184, 102, 0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      minWidth: '160px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-3px)';
                      e.target.style.boxShadow = '0 12px 30px rgba(255, 184, 102, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 8px 25px rgba(255, 184, 102, 0.3)';
                    }}
                    disabled={!dashboard.embedUrl || dashboard.embedUrl === "TU_URL_EMBED_DASHBOARD_2"}
                  >
                    {dashboard.embedUrl && dashboard.embedUrl !== "TU_URL_EMBED_DASHBOARD_2" 
                      ? "📊 Ver Dashboard" 
                      : "⚙️ Configurar"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Otros Proyectos */}
        <section>
          <div style={{
            textAlign: 'center',
            marginBottom: '2rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.4)'
          }}>
            <h2 style={{ 
              color: '#ffffff', 
              fontSize: '2.5rem', 
              fontWeight: '700',
              marginBottom: '1rem',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)'
            }}>
              💼 Otros Proyectos Destacados
            </h2>
            <p style={{
              color: '#f8f9fa',
              fontSize: '1.2rem',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)'
            }}>
              Descubre nuestra amplia gama de soluciones tecnológicas personalizadas
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {otherProjects.map((project) => (
              <div key={project.id} style={{
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                boxShadow: '0 15px 40px rgba(33, 40, 64, 0.15)',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #FFB866, #FF8A6B)',
                  height: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '4rem',
                  color: '#fff',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }}>
                  {project.category === 'Desarrollo Web' ? '🌐' : 
                   project.category === 'Desarrollo Móvil' ? '📱' : '💻'}
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ 
                    color: '#212840', 
                    marginBottom: '1rem', 
                    fontSize: '1.5rem',
                    fontWeight: '700'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{ 
                    color: '#555', 
                    marginBottom: '1.5rem', 
                    lineHeight: '1.7',
                    fontSize: '1.05rem'
                  }}>
                    {project.description}
                  </p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{
                      background: project.category === 'Desarrollo Web' ? 
                        'linear-gradient(135deg, #e8f5e8, #d4edda)' : 
                        'linear-gradient(135deg, #fff3cd, #ffeaa7)',
                      color: project.category === 'Desarrollo Web' ? '#155724' : '#856404',
                      padding: '0.5rem 1.2rem',
                      borderRadius: '25px',
                      fontSize: '0.95rem',
                      fontWeight: '600',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
                    }}>
                      {project.category}
                    </span>
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <strong style={{ 
                      color: '#212840', 
                      fontSize: '1rem',
                      display: 'block',
                      marginBottom: '0.8rem'
                    }}>
                      🛠️ Stack Tecnológico:
                    </strong>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.5rem', 
                      justifyContent: 'center' 
                    }}>
                      {project.technologies.map((tech, index) => (
                        <span key={tech} style={{ 
                          background: 'linear-gradient(135deg, #212840, #203a43)',
                          color: '#F0E7D5',
                          padding: '0.3rem 0.8rem',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ 
          textAlign: 'center', 
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, #212840, #203a43, #2c5364)',
          borderRadius: '20px',
          color: '#F0E7D5',
          marginBottom: '2rem',
          marginTop: '1rem',
          boxShadow: '0 20px 50px rgba(33, 40, 64, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px'
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ 
              color: '#F0E7D5', 
              marginBottom: '1.5rem',
              fontSize: '2.5rem',
              fontWeight: '700',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
            }}>
              🚀 ¿Tienes un proyecto en mente?
            </h2>
            <p style={{ 
              marginBottom: '2.5rem', 
              fontSize: '1.2rem', 
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto 2.5rem',
              lineHeight: '1.6'
            }}>
              Convertimos tus ideas en soluciones digitales que impulsan tu negocio.
            </p>
            <button
              onClick={() => window.location.href = '/#contact'}
              style={{
                background: 'linear-gradient(135deg, #FFB866, #FF8A6B)',
                color: '#fff',
                border: 'none',
                padding: '1.2rem 3rem',
                borderRadius: '30px',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(255, 184, 102, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 15px 40px rgba(255, 184, 102, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 10px 30px rgba(255, 184, 102, 0.4)';
              }}
            >
              💬 Contáctanos
            </button>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <a 
            href="/" 
            className="back-link" 
            style={{ 
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.95)',
              color: '#212840',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '1rem 2rem',
              borderRadius: '25px',
              boxShadow: '0 8px 25px rgba(33, 40, 64, 0.2)',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 30px rgba(33, 40, 64, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 8px 25px rgba(33, 40, 64, 0.2)';
            }}
          >
            ← Volver al Inicio
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
