import { useState } from "react";

export default function ServiceCard() {
  const services = [
    {
      type: "video",
      title: "Creazione Siti Web",
      desc: "Realizzazione di siti web moderni e responsive, progettati per offrire un'esperienza utente chiara e accattivante.",
      video: "/video/creazione.mp4",
      contactLink: "#contact"
    },
    {
      type: "before-after",
      title: "Restyling siti Web",
      desc: "Aggiornamento e miglioramento di siti web esistenti, con un focus sul design e sull'usabilità per attrarre e coinvolgere i visitatori.",
      before: "after.png",
      after: "before.png",
      contactLink: "#contact"
    }
  ];

  return (
    <section id="services" className="section services">
      <h2>I nostri Servizi</h2>
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          {service.type === "video" ? (
            <video
              src={service.video}
              autoPlay
              loop
              muted
              playsInline
              className="service-video"
            />
          ) : (
            <BeforeAfterSlider before={service.before} after={service.after} />
          )}
          <div className="service-info">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href={service.contactLink} className="btn primary contact-link">
              Richiedi un preventivo gratuito
            </a>
          </div>
        </div>
      ))}
    </section>
  );
}

// Slider Before-After con barra drag
function BeforeAfterSlider({ before, after }) {
  const [sliderPos, setSliderPos] = useState(50);

  // Funzione comune per calcolare la posizione dello slider
  const calculatePos = (clientX, container) => {
    const rect = container.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 0) pos = 0;
    if (pos > 100) pos = 100;
    setSliderPos(pos);
  };

  // Mouse
  const handleMouseMove = (e) => {
    calculatePos(e.clientX, e.currentTarget);
  };

  // Touch
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      calculatePos(e.touches[0].clientX, e.currentTarget);
    }
  };

  return (
    <div
      className="before-after-slider"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <img src={after} alt="After" className="slider-image" />
      <div
        className="before-image-wrapper"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} alt="Before" className="slider-image" />
      </div>
      <div className="slider-handle" style={{ left: `${sliderPos}%` }}>
        <div className="slider-bar" />
      </div>
    </div>
  );
}

