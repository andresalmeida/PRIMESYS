import Head from "next/head";
import { useRouter } from "next/router";

// Configuración base del sitio
const siteConfig = {
  siteName: "PRIMESYS",
  siteUrl: "https://primesys.ec",
  defaultImage: "/web-app-manifest-512x512.png",
  twitterHandle: "@primesys",
  author: "PRIMESYS",
  locale: "es_EC",
};

/**
 * Componente SEO para manejar todos los metadatos de la página
 * @param {Object} props
 * @param {string} props.title - Título de la página (sin el nombre del sitio)
 * @param {string} props.description - Descripción meta
 * @param {string} props.keywords - Keywords separadas por coma
 * @param {string} props.image - URL de la imagen Open Graph
 * @param {string} props.canonical - URL canónica personalizada
 * @param {string} props.type - Tipo de contenido (website, article, etc.)
 * @param {Object} props.schema - Datos estructurados JSON-LD
 * @param {boolean} props.noIndex - Si es true, no indexa la página
 */
export default function SEO({
  title,
  description,
  keywords,
  image,
  canonical,
  type = "website",
  schema,
  noIndex = false,
}) {
  const router = useRouter();
  const currentUrl = `${siteConfig.siteUrl}${router.asPath}`;
  const canonicalUrl = canonical || currentUrl;
  const fullTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const ogImage = image ? `${siteConfig.siteUrl}${image}` : `${siteConfig.siteUrl}${siteConfig.defaultImage}`;

  // Schema.org por defecto para la organización
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PRIMESYS",
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/logo.svg`,
    description: "Soluciones tecnológicas innovadoras con más de 25 años de experiencia",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EC",
      addressLocality: "Quito",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Ventas",
      email: "almeidaandres@proton.me",
      availableLanguage: ["Spanish", "English"],
    },
    sameAs: [
      "https://www.linkedin.com/company/primesys",
    ],
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Head>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={siteConfig.author} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Viewport y tema */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0b1a2d" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={siteConfig.locale} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicons */}
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="PRIMESYS" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(finalSchema) }}
      />
      
      {/* Additional SEO tags */}
      <meta name="geo.region" content="EC-P" />
      <meta name="geo.placename" content="Quito" />
      <meta name="geo.position" content="-0.1807;-78.4678" />
      <meta name="ICBM" content="-0.1807, -78.4678" />
    </Head>
  );
}

// Helper para crear schemas de página de servicio
export function createServiceSchema({
  name,
  description,
  url,
  image,
  provider = "PRIMESYS",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      url: siteConfig.siteUrl,
    },
    url: `${siteConfig.siteUrl}${url}`,
    image: image ? `${siteConfig.siteUrl}${image}` : undefined,
    areaServed: {
      "@type": "Country",
      name: "Ecuador",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceType: "Professional Service",
      availableLanguage: {
        "@type": "Language",
        name: "Spanish",
      },
    },
  };
}

// Helper para crear schemas de página web
export function createWebPageSchema({
  title,
  description,
  url,
  image,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteConfig.siteUrl}${url}`,
    image: image ? `${siteConfig.siteUrl}${image}` : undefined,
    publisher: {
      "@type": "Organization",
      name: "PRIMESYS",
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}/logo.svg`,
      },
    },
  };
}
