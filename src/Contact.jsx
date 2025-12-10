"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false, // aggiunto per il checkbox
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      setStatus("Devi accettare la Privacy Policy per inviare il form.");
      return;
    }

    setStatus("Invio in corso... ⏳");

    const data = new FormData(e.target);

    try {
      const res = await fetch(e.target.action, {
        method: e.target.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("Messaggio inviato con successo! ✅");
        setFormData({ name: "", email: "", message: "", consent: false });
      } else {
        const result = await res.json();
        if (result?.errors) {
          setStatus(result.errors.map(err => err.message).join(", "));
        } else {
          setStatus("Errore nell'invio, riprova.");
        }
      }
    } catch (err) {
      setStatus("Errore di rete, riprova.");
    }
  };

const renderConsentCheckbox = () => (
  <div className="consent-checkbox">
    <input
      type="checkbox"
      id="consent"
      name="consent"
      checked={formData.consent}
      onChange={handleChange}
    />
    <label htmlFor="consent">
      Accetto la <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
    </label>
  </div>
);


  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <div className="contact-text">
          <h2>Il tuo Progetto</h2>
          <p>
            Vuoi far crescere il tuo progetto con un sito web moderno, funzionale e su misura?
            Da VERSUS Web Lab realizziamo esperienze digitali uniche, intuitive e performanti.
            Compila il modulo qui sotto o contattaci via email o LinkedIn: siamo pronte a collaborare! 
          </p>

          {/* FORM DESKTOP */}
          <form
            className="contact-form"
            action="https://formspree.io/f/mzznvzzj"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="La tua email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Il tuo messaggio" rows="5" value={formData.message} onChange={handleChange} required />
            
            {renderConsentCheckbox()} {/* checkbox di consenso */}

            <button type="submit" className="btn primary">Invia Messaggio</button>
          </form>

          {status && <p className="form-status">{status}</p>}

          <div className="contact-actions">
            <a href="mailto:versus.weblab@outlook.it" className="btn secondary">📧 Email</a>
            <a href="https://www.linkedin.com/in/versus-weblab/" target="_blank" rel="noopener noreferrer" className="btn secondary">🔗 LinkedIn</a>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div className="contact-mobile">
        <div className="contact-card-mobile">
          <div className="contact-text-mobile">
            <h2>Il tuo Progetto</h2>
            <p>
              Vuoi far crescere il tuo progetto con un sito web moderno, funzionale e su misura?
              Da VERSUS Web Lab realizziamo esperienze digitali uniche, intuitive e performanti. <br />
              Contattaci qui sotto: siamo pronte a collaborare! 👇
            </p>
            <div className="contact-actions-mobile">
              <a href="mailto:versus.weblab@outlook.it" className="btn secondary">📧 Email</a>
              <a href="https://www.linkedin.com/in/versus-weblab/" target="_blank" rel="noopener noreferrer" className="btn secondary">🔗 LinkedIn</a>
              <button className="btn secondary" onClick={() => setModalOpen(true)}>💬 Form</button>
            </div>
          </div>
        </div>

        {/* Modal per il form mobile */}
        {modalOpen && (
          <div className="modal-overlay" onClick={() => setModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Scrivimi un messaggio</h3>
              <form
                className="contact-form"
                action="https://formspree.io/f/movnzagy"
                method="POST"
                onSubmit={handleSubmit}
              >
                <input type="text" name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <textarea name="message" placeholder="Il tuo messaggio" rows="5" value={formData.message} onChange={handleChange} required />

                {renderConsentCheckbox()} {/* checkbox di consenso mobile */}

                <button type="submit" className="btn primary">Invia Messaggio</button>
                {status && <p style={{ marginTop: "0.5rem" }}>{status}</p>}
              </form>
              <button className="btn secondary close-btn" onClick={() => setModalOpen(false)}>Chiudi</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
