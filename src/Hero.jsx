import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero({ isLight }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setOffset({
      x: (e.clientX - window.innerWidth / 2) * 0.02,
      y: (e.clientY - window.innerHeight / 2) * 0.02,
    });
  };

  return (
    <header id="hero" className="hero relative bg-black text-white overflow-hidden">
      {/* Sfondo leggero */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50 -z-10"></div>

      <div
        className="hero-content max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-6 py-24"
        onMouseMove={handleMouseMove}
      >
{/* Testi Hero - VERSUS Web Lab */}
<motion.div
  className="hero-text flex-1 min-w-[280px]"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

<motion.h1
  className="text-3xl md:text-4xl font-extrabold mb-2 !text-3xl md:!text-4xl"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.4, duration: 1 }}
>
  <span className="text-gold shine">VERSUS</span>
</motion.h1>


  <motion.p
    className="description text-gray-400 mb-6 max-w-lg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 1 }}
  >
    Creiamo siti web su misura, funzionali e moderni, pensati per rendere ogni progetto unico e performante.
    <br /><br />
    La nostra passione è combinare design accattivante, interfacce intuitive e tecnologie all’avanguardia, costruendo esperienze digitali che siano non solo belle da vedere ma anche semplici da usare.
    <br /><br />
    Ogni progetto è un’opportunità per innovare: ottimizziamo processi, sviluppiamo siti responsive e curiamo ogni dettaglio, lasciando un’impronta distintiva e professionale.
  </motion.p>

  <motion.div
    className="buttons flex flex-wrap gap-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 1 }}
  >
    <a
      href="#projects"
      className="btn primary transform hover:scale-105 transition-all duration-300"
    >
      Progetti
    </a>
    <a
      href="#contact"
      className="btn secondary transform hover:scale-105 transition-all duration-300"
    >
      Contatti
    </a>
    <a
      href="#services"
      className="btn primary transform hover:scale-105 transition-all duration-300"
    >
      I nostri servizi
    </a>
  </motion.div>
</motion.div>


{/* Logo Hero */}
<motion.div
  className="hero-image flex-1 min-w-[150px] hidden md:flex justify-center md:justify-end h-full"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 0.7 }}
  transition={{
    duration: 1.2,
    delay: 1.2,
    type: "spring",
    stiffness: 100,
  }}
  style={{ x: offset.x, y: offset.y }}
>
  <img
    src={isLight ? "/logo-bianco.png" : "/logo-nero.png"}
    alt="Serena Logo"
    className="h-full w-auto max-w-full rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
  />
</motion.div>


      </div>

      {/* <section className="about section">
  <div className="portfolio about-content">
    <div className="about-image">
      <img src="/foto.png" alt="Serena Antonini" />
    </div>
    <div className="about-text">
      <h2>Chi Sono</h2>
      <p>
        Sono Serena Antonini, laureata in Informatica e appassionata di sviluppo 
        web e mobile. Realizzo siti, applicazioni e strumenti digitali con un 
        approccio pratico e creativo, adattandomi alle esigenze di ogni progetto.
      </p>
    </div>
  </div>
</section> */}


    </header>



  );
}
