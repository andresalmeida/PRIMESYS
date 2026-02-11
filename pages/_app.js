import Head from "next/head";
import "../src/index.css";
import "../src/App.css";
import "../src/Styles/servicios.css";

export default function PrimesysApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Metadatos base que se aplican a todas las páginas */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Tema y color */}
        <meta name="theme-color" content="#0b1a2d" />
        <meta name="msapplication-TileColor" content="#0b1a2d" />
        
        {/* Favicons base */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect para mejorar performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
