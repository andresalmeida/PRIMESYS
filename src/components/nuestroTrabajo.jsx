"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { BarChart3, Code2, Globe, Smartphone, ExternalLink, ChevronRight } from "lucide-react";

export default function NuestroTrabajo() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const dashboards = [
    {
      id: 1,
      title: "Análisis de Importaciones Ecuador",
      description: "Dashboard interactivo que analiza las importaciones de Ecuador bajo régimen general durante el período 2024-2025. Incluye métricas de valor CIF, países de origen, productos principales y tendencias temporales.",
      embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiODM0YThhMWMtYTdjMC00OWU1LWFiNDctZWUyMTBiMWE3Mjc5IiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9&pageName=9853d6945e241505ddeb",
      icon: BarChart3,
      tags: ["Power BI", "Análisis de Datos", "Business Intelligence"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Research Funding Global",
      description: "Análisis académico sobre la financiación gubernamental destinada a investigación de ansiedad y depresión a nivel mundial. Visualiza la prioridad que cada país otorga a la salud mental.",
      embedUrl: "https://app.powerbi.com/view?r=eyJrIjoiOTA5MDg4N2YtNDZmMC00MzI3LWE0ZTMtM2Q0YjkyZDg1Y2QzIiwidCI6ImFhZjAxNDIwLThmMzItNDllNS1iY2VmLTc5NTM0MGMxZjk2YSJ9",
      icon: Globe,
      tags: ["Power BI", "Research", "Data Visualization"],
      color: "from-purple-500 to-pink-400"
    },
  ];

  const proyectos = [
    {
      id: 1,
      title: "Sistema ERP Empresarial",
      desc: "Plataforma integral para gestión de inventarios, facturación electrónica y control de clientes desarrollada a medida.",
      tech: ["React", "Node.js", "PostgreSQL"],
      icon: Globe,
      metric: "+40%",
      metricLabel: "Eficiencia"
    },
    {
      id: 2,
      title: "App Móvil de Servicios",
      desc: "Aplicación multiplataforma con geolocalización en tiempo real y sistema de reservas integrado.",
      tech: ["React Native", "Firebase", "Google Maps"],
      icon: Smartphone,
      metric: "10K+",
      metricLabel: "Descargas"
    },
    {
      id: 3,
      title: "Portal de Analytics",
      desc: "Dashboard ejecutivo con KPIs en tiempo real para toma de decisiones empresariales.",
      tech: ["Next.js", "GraphQL", "AWS"],
      icon: BarChart3,
      metric: "99.9%",
      metricLabel: "Uptime"
    },
    {
      id: 4,
      title: "Sistema de Gestión",
      desc: "Software de automatización de procesos empresariales con flujos de trabajo personalizados.",
      tech: ["Vue.js", "Laravel", "MySQL"],
      icon: Code2,
      metric: "-60%",
      metricLabel: "Tiempo"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2640] to-[#0b1a2d] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.h1 
            className="font-['Rubik'] text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nuestro Trabajo
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl font-['Rubik'] text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Explora nuestros proyectos de análisis de datos, business intelligence y desarrollo de software
          </motion.p>
          <motion.div 
            className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>
      </section>

      {/* Dashboards Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Rubik'] text-3xl font-bold text-white sm:text-4xl">
              Dashboards de Business Intelligence
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
          </motion.div>

          <div className="space-y-12">
            {dashboards.map((dashboard, index) => (
              <motion.div
                key={dashboard.id}
                className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:grid-cols-2"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-[#0f2640]">
                    <iframe
                      src={dashboard.embedUrl}
                      title={dashboard.title}
                      className="absolute inset-0 h-full w-full"
                      allowFullScreen
                    />
                  </div>
                </div>
                
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${dashboard.color} text-white`}>
                    <dashboard.icon size={24} />
                  </div>
                  <h3 className="mt-4 font-['Rubik'] text-2xl font-bold text-white">
                    {dashboard.title}
                  </h3>
                  <p className="mt-4 font-['Rubik'] text-gray-300 leading-relaxed">
                    {dashboard.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dashboard.tags.map((tag, i) => (
                      <span key={i} className="rounded-full bg-white/10 px-3 py-1 font-['Rubik'] text-xs text-cyan-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    href={dashboard.embedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-2 font-['Rubik'] font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
                    whileHover={{ x: 5 }}
                  >
                    Ver Dashboard Completo
                    <ExternalLink size={16} className="transition-transform group-hover:scale-110" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Rubik'] text-3xl font-bold text-[#0b1a2d] sm:text-4xl">
              Proyectos Destacados
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600" />
          </motion.div>

          <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {proyectos.map((proyecto) => (
              <motion.div
                key={proyecto.id}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-2xl"
                variants={fadeInUp}
                whileHover={{ y: -8 }}
              >
                <div className="absolute right-4 top-4 font-['Rubik'] text-3xl font-black text-gray-100 transition-colors group-hover:text-cyan-100">
                  {proyecto.metric}
                </div>
                
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
                  <proyecto.icon size={24} />
                </div>
                
                <h3 className="mt-4 font-['Rubik'] text-xl font-bold text-[#0b1a2d]">
                  {proyecto.title}
                </h3>
                <p className="mt-2 font-['Rubik'] text-sm text-gray-600">
                  {proyecto.desc}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-1">
                  {proyecto.tech.map((tech, i) => (
                    <span key={i} className="rounded bg-gray-100 px-2 py-1 font-['Rubik'] text-xs text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="mt-4 border-t border-gray-100 pt-4">
                  <span className="font-['Rubik'] text-2xl font-bold text-cyan-500">{proyecto.metric}</span>
                  <span className="ml-2 font-['Rubik'] text-sm text-gray-500">{proyecto.metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-center sm:p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-['Rubik'] text-3xl font-bold text-white sm:text-4xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-['Rubik'] text-lg text-white/90">
            Trabajemos juntos para hacerlo realidad. Contáctanos y conversemos sobre tu idea.
          </p>
          <motion.a
            href="/#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-['Rubik'] font-bold text-[#0b1a2d] shadow-xl transition-all hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Proyecto
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
