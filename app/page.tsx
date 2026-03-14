"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


// Компонент карточки с эффектом стекла
const ServiceCard = ({ title, desc }: { title: string; desc: string }) => (
  <motion.div 
    whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)" }}
    className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all"
  >
    <h3 className="text-xl font-bold mb-3 text-blue-400">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020203] text-white selection:bg-blue-500/30">
      
      {/* Фоновые градиенты для глубины */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium uppercase tracking-widest mb-6 inline-block">
            Expertise IT & Automatisation
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            TADEVOSYAN IT
          </h1>

          <div className="text-xl md:text-2xl font-light text-gray-300 mb-10 h-8">
            <TypeAnimation
              sequence={[
                'Développement Web Sur-Mesure', 2000,
                'Automatisation de Processus (n8n)', 2000,
                'Architecture Cloud & Docker', 2000,
              ]}
              repeat={Infinity}
              cursor={true}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Demander un devis
          </motion.button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard 
            title="Développement Web" 
            desc="Applications performantes avec Next.js et React. Focus sur l'UX et la rapidité." 
          />
          <ServiceCard 
            title="Automatisation n8n" 
            desc="Connectez vos outils et gagnez des heures de travail grâce à des workflows intelligents." 
          />
          <ServiceCard 
            title="Solutions SIV & Admin" 
            desc="Gestion automatisée des données et déploiement via Docker sur serveurs dédiés." 
          />
        </div>
      </section>

    </main>
  );
}