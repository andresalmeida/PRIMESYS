import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function SobreNosotros() {
  return (
    <div style={{ background: 'linear-gradient(135deg, #212840, #203a43, #2c5364)', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        padding: '120px 0 80px',
        overflow: 'hidden',
        textAlign: 'center'
      }}>
        {/* Decorative shapes */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(62, 128, 254, 0.2) 0%, rgba(39, 103, 213, 0) 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(111, 66, 193, 0.2) 0%, rgba(111, 66, 193, 0) 70%)',
          borderRadius: '50%',
          zIndex: 0
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ 
            fontSize: '4rem',
            fontWeight: 800,
            color: 'white',
            marginBottom: '20px',
            textShadow: '0 5px 15px rgba(0,0,0,0.3)',
            background: 'linear-gradient(to right, #fff, #d4e8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Sobre Nosotros
          </h1>
          
          <div style={{
            width: '120px',
            height: '4px',
            background: 'linear-gradient(to right, #3e80fe, #6f42c1)',
            margin: '0 auto',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(62, 128, 254, 0.3)'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 80px' }}>
        
        {/* Company Story Section */}
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '24px',
          padding: '50px 40px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.2)',
          marginBottom: '60px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            background: 'linear-gradient(to right, #3e80fe, #6f42c1)'
          }}></div>

          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              ¿Quiénes Somos?
            </h2>
            <div style={{
              width: '80px',
              height: '3px',
              background: 'linear-gradient(to right, #3e80fe, #6f42c1)',
              margin: '0 auto',
              borderRadius: '3px'
            }}></div>
          </div>
          
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            padding: '20px 30px',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '16px'
          }}>
            <p style={{ 
              fontSize: '1.4rem',
              fontStyle: 'italic',
              color: '#b9d9ff',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              "Transformando el futuro digital de las empresas, un proyecto a la vez"
            </p>
          </div>
          
          <div style={{ 
            maxWidth: '900px',
            margin: '0 auto',
            color: 'white',
            fontSize: '1.1rem',
            lineHeight: 1.8
          }}>
            <p style={{ marginBottom: '24px' }}>
              Somos una empresa <span style={{ 
                color: '#7cb4ff', 
                fontWeight: 600
              }}>líder en soluciones tecnológicas</span> con más de <span style={{ 
                color: '#ffb14c', 
                fontWeight: 600
              }}>25 años de experiencia</span>, transformando la manera en que las empresas operan en el mundo digital.
            </p>
            
            <p style={{ marginBottom: '24px' }}>
              Nuestro <span style={{ 
                color: '#d5b2ff', 
                fontWeight: 600
              }}>equipo multidisciplinario</span> está compuesto por visionarios, innovadores y expertos que viven y respiran tecnología. Creemos que cada línea de código y cada solución que desarrollamos tiene el poder de <span style={{ 
                color: '#ff9c9c', 
                fontWeight: 600
              }}>revolucionar industrias enteras</span>.
            </p>
            
            <p>
              Hemos sido el <span style={{ 
                color: '#8cffbe', 
                fontWeight: 600
              }}>socio estratégico de confianza</span> de entidades del sector público y empresas del sector privado, conviertiendo visiones ambiciosas en realidades tecnológicas tangibles.
            </p>
          </div>
        </div>

        {/* Mission & Vision Cards */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {/* Misión Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(62, 128, 254, 0.2), rgba(39, 103, 213, 0.1))',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            border: '1px solid rgba(62, 128, 254, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #3e80fe, #2767d5)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              boxShadow: '0 10px 20px rgba(62, 128, 254, 0.3)'
            }}>
              <span style={{ fontSize: '1.8rem' }}>🎯</span>
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              Misión
            </h3>
            
            <p style={{
              color: '#e6f0ff',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>
              Empoderar a las empresas mediante soluciones tecnológicas innovadoras que impulsen su crecimiento y las posicionen como líderes en la era digital.
            </p>
          </div>

          {/* Visión Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(240, 133, 40, 0.2), rgba(217, 119, 6, 0.1))',
            borderRadius: '20px',
            padding: '40px 30px',
            textAlign: 'center',
            border: '1px solid rgba(240, 133, 40, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              width: '70px',
              height: '70px',
              background: 'linear-gradient(135deg, #f08528, #d97706)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              boxShadow: '0 10px 20px rgba(240, 133, 40, 0.3)'
            }}>
              <span style={{ fontSize: '1.8rem' }}>🚀</span>
            </div>
            
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '20px',
              textShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}>
              Visión
            </h3>
            
            <p style={{
              color: '#fff8e6',
              fontSize: '1.1rem',
              lineHeight: 1.6
            }}>
              Ser la empresa de referencia en transformación digital, creando un ecosistema donde la tecnología y la innovación convergen para construir el futuro.
            </p>
          </div>
        </div>

        {/* CEO Message Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(62, 71, 102, 0.3), rgba(41, 47, 69, 0.3))',
          borderRadius: '24px',
          padding: '50px 40px',
          textAlign: 'center',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(240, 133, 40, 0.15) 0%, rgba(240, 133, 40, 0) 70%)',
            borderRadius: '50%'
          }}></div>
          
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(62, 128, 254, 0.15) 0%, rgba(62, 128, 254, 0) 70%)',
            borderRadius: '50%'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h3 style={{
              fontSize: '2.2rem',
              fontWeight: 700,
              color: 'white',
              marginBottom: '30px',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Mensaje del CEO
            </h3>
            
            <div style={{
              maxWidth: '800px',
              margin: '0 auto 40px',
              padding: '30px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <p style={{
                color: '#f0f7ff',
                fontSize: '1.1rem',
                lineHeight: 1.8,
                fontWeight: 400
              }}>
                En PRIMESYS, no solo construimos software; forjamos alianzas estratégicas que perduran en el tiempo. 
                Cada proyecto es una oportunidad para demostrar nuestra excelencia técnica y nuestro compromiso 
                con el éxito de nuestros clientes.
              </p>
            </div>
            
            <div style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '30px'
            }}>
              <p style={{
                fontSize: '2rem',
                fontWeight: 600,
                color: 'white',
                marginBottom: '5px',
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}>
                Marcelo Rea Guamán
              </p>
              <p style={{
                color: '#7cb4ff',
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.1rem',
                fontWeight: 500
              }}>
                CEO & Fundador
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
