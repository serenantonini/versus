import { useState } from "react";

export default function Navbar({ isLight, setIsLight }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => setIsLight(!isLight);

  // Funzione per chiudere il menu quando clicchi su un link
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <div className="line line-1">VERSUS</div>
        </div>

        <div
          className={`nav-links ${menuOpen ? "open" : ""}`}
          style={{ display: 'flex', alignItems: 'center', gap: '24px' }}
        >
          <a href="#hero" onClick={handleLinkClick}>Home</a>
          <a href="#projects" onClick={handleLinkClick}>Progetti</a>
          <a href="#services" onClick={handleLinkClick}>Servizi</a>
          <a href="#contact" onClick={handleLinkClick}>Contatti</a>

          {/* Icona toggle tema minimal */}
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center"
            }}
          >
            {isLight ? 
              <img src="/moon.svg" height={24} alt="Dark mode" /> 
              : 
              <img src="/sun.svg" height={24} alt="Light mode" />}
          </button>
        </div>

        {/* Hamburger menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
