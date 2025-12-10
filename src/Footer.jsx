import { useState } from "react";


export default function Footer({ isLight }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img 
            src={isLight ? "/logo-bianco.png" : "/logo-nero.png"} 
            alt="Logo Serena Antonini" 
          />
        </div>
        <div className="footer-info">
          <p>
            © {new Date().getFullYear()} Versus - Web Lab · versus.weblab@outlook.it ·
            P.IVA: 04090340128 · P
            <a href="/privacy.html" target="_blank" rel="noopener noreferrer" className="footer-link" style={{color: "inherit"}}>
                rivacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
