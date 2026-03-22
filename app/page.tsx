"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#000b18] text-white overflow-hidden">
      
      {/* Динамический фон: Сине-голубые сферы света */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[100px]" />

      {/* Сетка на фоне для технологичного вида */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
              TADEVOSYAN IT
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-light text-blue-100/80 mb-10 h-10 font-mono">
            <TypeAnimation
              sequence={[
                'Solutions Web Dynamiques', 2000,
                'Automatisation Intelligente', 2000,
                'Expertise Next.js & n8n', 2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 30px rgba(59, 130, 246, 0.6)",
              backgroundColor: "rgba(59, 130, 246, 1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-blue-600/80 backdrop-blur-md border border-blue-400/50 rounded-full text-lg font-bold transition-all"
          >
            Démarrer un projet
          </motion.button>
        </motion.div>
      </section>

      {/* Блок услуг (Glassmorphism) */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Sites Vitrines", d: "Design moderne et ultra-rapide pour captiver vos clients." },
            { t: "Automatisation", d: "Gagnez du temps en automatisant vos tâches avec n8n." },
            { t: "Développement", d: "Applications sur-mesure robustes et évolutives." }
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.07)" }}
              className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg transition-all"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl mb-6 flex items-center justify-center text-blue-400 font-bold">
                0{i+1}
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-300">{service.t}</h3>
              <p className="text-blue-100/60 leading-relaxed">{service.d}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}