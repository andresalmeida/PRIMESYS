"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { UserRound, Target, Eye, Award, Users, Globe } from "lucide-react";

export default function SobreNosotros() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const valores = [
    { icon: Award, title: "Excelencia", desc: "Compromiso con la calidad en cada proyecto" },
    { icon: Users, title: "Colaboración", desc: "Trabajo en equipo con nuestros clientes" },
    { icon: Globe, title: "Innovación", desc: "Siempre a la vanguardia tecnológica" },
  ];

  return (
    <div className="min-h-screen bg-[#0b1a2d]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#0f2640] to-[#0b1a2d] px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-7xl text-center">
          <motion.h1 
            className="font-['Rubik'] text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Sobre Nosotros
          </motion.h1>
          <motion.p 
            className="mx-auto mt-6 max-w-2xl font-['Rubik'] text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Innovación y excelencia tecnológica desde hace más de 25 años
          </motion.p>
          <motion.div 
            className="mx-auto mt-6 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          />
        </div>
      </section>

      {/* Quiénes Somos */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Equipo PRIMESYS"
                className="h-[400px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Rubik'] text-3xl font-bold text-white sm:text-4xl">
                ¿Quiénes Somos?
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
              <p className="mt-6 font-['Rubik'] text-lg leading-relaxed text-gray-300">
                Somos una compañía líder en soluciones tecnológicas con más de 25 años de experiencia, 
                orientada a optimizar operaciones y acelerar la transformación digital de organizaciones 
                públicas y privadas.
              </p>
              <p className="mt-4 font-['Rubik'] text-lg leading-relaxed text-gray-300">
                Nuestro equipo de expertos combina conocimiento técnico profundo con visión estratégica 
                para entregar soluciones que realmente impactan el negocio de nuestros clientes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Rubik'] text-3xl font-bold text-[#0b1a2d] sm:text-4xl">
              Nuestra Esencia
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600" />
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Misión */}
            <motion.div 
              className="group rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
              variants={fadeInUp}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
                <Target size={32} />
              </div>
              <h3 className="mt-6 font-['Rubik'] text-2xl font-bold text-[#0b1a2d]">Misión</h3>
              <p className="mt-4 font-['Rubik'] text-gray-600 leading-relaxed">
                Ofrecer soluciones tecnológicas innovadoras y personalizadas que respondan a las 
                necesidades de nuestros clientes, con énfasis en calidad, seguridad y excelencia en el servicio.
              </p>
            </motion.div>

            {/* Visión */}
            <motion.div 
              className="group rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:shadow-2xl"
              variants={fadeInUp}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-lg">
                <Eye size={32} />
              </div>
              <h3 className="mt-6 font-['Rubik'] text-2xl font-bold text-[#0b1a2d]">Visión</h3>
              <p className="mt-4 font-['Rubik'] text-gray-600 leading-relaxed">
                Ser referentes regionales en transformación digital por la confiabilidad de nuestras soluciones 
                y la satisfacción sostenida de nuestros clientes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Valores */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-['Rubik'] text-3xl font-bold text-white sm:text-4xl">
              Nuestros Valores
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500" />
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {valores.map((valor, index) => (
              <motion.div 
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
                variants={fadeInUp}
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:text-white group-hover:from-cyan-400 group-hover:to-blue-500">
                  <valor.icon size={32} />
                </div>
                <h3 className="mt-6 font-['Rubik'] text-xl font-bold text-white">{valor.title}</h3>
                <p className="mt-2 font-['Rubik'] text-gray-400">{valor.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0e2238] to-[#0b1a2d] px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-500/5 to-transparent" />
        </div>
        
        <motion.div 
          className="relative mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white shadow-xl">
            <UserRound size={40} />
          </div>
          <blockquote className="mt-8 font-['Rubik'] text-2xl font-medium italic leading-relaxed text-white sm:text-3xl">
            "En PRIMESYS construimos relaciones de largo plazo y productos confiables. Nuestro compromiso 
            es que cada entrega sume valor real al negocio de nuestros clientes."
          </blockquote>
          <div className="mt-8">
            <p className="font-['Rubik'] text-lg font-bold text-cyan-400">Marcelo Rea Guamán</p>
            <p className="font-['Rubik'] text-gray-400">CEO & Fundador</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
