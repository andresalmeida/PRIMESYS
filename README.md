# PRIMESYS

![PRIMESYS Logo](public/logo.svg)

[![Deploy to GitHub Pages](https://github.com/andresalmeida/PRIMESYS/actions/workflows/nextjs.yml/badge.svg)](https://github.com/andresalmeida/PRIMESYS/actions/workflows/nextjs.yml)

> Soluciones tecnológicas innovadoras con más de 25 años de experiencia

🌐 **Sitio web**: [https://primesys.ec](https://primesys.ec)

---

## 🚀 Tecnologías

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Estilos**: CSS Modules + Tailwind CSS
- **Animaciones**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [@nextui-org/react](https://nextui.org/)
- **Iconos**: [Lucide React](https://lucide.dev/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Deploy**: GitHub Pages

---

## ✨ Características

- 🎨 **Diseño moderno** con animaciones fluidas
- ✨ **Partículas animadas** en el hero
- 🎊 **Confetti** al enviar formulario
- 🔢 **Contadores animados** (25+ años, 150+ implementaciones)
- 📊 **Scroll progress bar**
- 🔒 **Validaciones de seguridad** en formularios
- 📱 **100% Responsive**
- ⚡ **Optimizado** para rendimiento

---

## 🛠️ Desarrollo local

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/andresalmeida/PRIMESYS.git
cd PRIMESYS

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales de EmailJS

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Build para producción

```bash
npm run build
```

El output estático se genera en la carpeta `dist/`.

---

## 🔐 Configuración de EmailJS

Para que el formulario de contacto funcione, necesitas:

1. Crear cuenta en [EmailJS](https://www.emailjs.com/)
2. Crear un **Email Service** (Gmail, Outlook, etc.)
3. Crear un **Email Template**
4. Obtener tu **Public Key** de Account > General
5. Configurar los secrets en GitHub (para deploy automático)

### Variables de entorno

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

---

## 🚀 Deploy

Este proyecto usa **GitHub Actions** para deploy automático a GitHub Pages.

### Configuración de Secrets (GitHub)

Ve a **Settings > Secrets and variables > Actions** y agrega:

| Secret | Descripción |
|--------|-------------|
| `EMAILJS_SERVICE_ID` | Service ID de EmailJS |
| `EMAILJS_TEMPLATE_ID` | Template ID de EmailJS |
| `EMAILJS_PUBLIC_KEY` | Public Key de EmailJS |

### Activar GitHub Pages

1. Ve a **Settings > Pages**
2. Source: **GitHub Actions**
3. Listo! Cada push a `main` se deploya automáticamente

---

## 📁 Estructura del proyecto

```
PRIMESYS/
├── .github/
│   └── workflows/
│       └── nextjs.yml          # GitHub Actions deploy
├── pages/                       # Rutas de Next.js
│   ├── index.js                # Homepage
│   ├── sobre-nosotros.js
│   ├── nuestro-trabajo.js
│   └── ...
├── src/
│   ├── components/             # Componentes React
│   │   ├── HomePage.js
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── ...
│   ├── lib/                    # Utilidades
│   │   └── images.js
│   └── Styles/                 # CSS adicional
├── public/                     # Assets estáticos
├── .env.local                  # Variables locales (no subir)
├── .env.example                # Ejemplo de variables
└── next.config.mjs             # Configuración de Next.js
```

---

## 🎨 Screenshots

### Homepage
![Homepage](https://via.placeholder.com/800x400/0b1a2d/ffffff?text=PRIMESYS+Homepage)

### Servicios
![Servicios](https://via.placeholder.com/800x400/0b1a2d/ffffff?text=Servicios)

---

## 👥 Créditos

- **Diseño y desarrollo**: [Andres Almeida](https://github.com/andresalmeida)
- **Empresa**: PRIMESYS
- **Año**: 2024

---

## 📄 Licencia

Este proyecto es propiedad de PRIMESYS. Todos los derechos reservados.

---

<p align="center">
  <strong>PRIMESYS</strong> - Transformamos procesos en productos digitales de impacto
</p>
