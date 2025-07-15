/**
 * @copyright Juan David Gamboa
 * @license apache-2.0
 */

/**
 * Node Modules
 */
import { useState, useEffect } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";

const Header = ({ language, setLanguage }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false); // Ocultar solo si scroll > 100 y bajando
      } else {
        setNavVisible(true); // Mostrar al subir o si está cerca del top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Traducciones simples
  const translations = {
    en: {
      contact: "Contact Me",
      switch: "ES",
    },
    es: {
      contact: "Contáctame",
      switch: "EN",
    },
  };

  const t = translations[language];

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex justify-between z-40 transition-transform duration-300 ${
        navVisible ? "translate-y-0" : "-translate-y-full"
      } bg-gradient-to-b from-zinc-950 to-zinc-950/50`}
    >
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <a
            href="/"
            className="logo text-xs text-white flex items-center gap-4"
          >
            <img
              className="rounded-lg"
              src="/public/img/logo1.png"
              width={40}
              height={40}
              alt="Juan David Gamboa"
            />
            JUAN DAVID GAMBOA
          </a>
        </h1>
        <div className="relative md:justify-self-center flex items-center gap-4">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          {/* Botón para cambiar idioma */}
          <button
            onClick={() =>
              setLanguage(language === "en" ? "es" : "en")
            }
            className="text-white text-sm border border-white px-2 py-1 rounded-md hover:bg-white hover:text-black transition"
          >
            {t.switch}
          </button>
          <Navbar navOpen={navOpen} language={language} />
        </div>
        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          {t.contact}
        </a>
      </div>
    </header>
  );
};

export default Header;
