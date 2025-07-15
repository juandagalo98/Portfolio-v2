/**
 * @copyright Juan David Gamboa
 * @license apache-2.0
 */

/**
 * Node Modules
 */
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen, language }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef();

  // Traducciones para los labels
  const translations = {
    en: [
      { label: "HOME", link: "#home" },
      { label: "ABOUT", link: "#about" },
      { label: "SKILLS", link: "#work" },
      { label: "REVIEWS", link: "#reviews" },
      { label: "Contact", link: "#contact", className: "md:hidden" },
    ],
    es: [
      { label: "INICIO", link: "#home" },
      { label: "ACERCA DE", link: "#about" },
      { label: "Trabajo", link: "#work" },
      { label: "Reseñas", link: "#reviews" },
      { label: "Contacto", link: "#contact", className: "md:hidden" },
    ],
  };

  const navItems = translations[language] || translations.en;

  const initActiveBox = () => {
    const el = lastActiveLink.current;
    const box = activeBox.current;

    if (el && box) {
      box.style.top = el.offsetTop + "px";
      box.style.left = el.offsetLeft + "px";
      box.style.width = el.offsetWidth + "px";
      box.style.height = el.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox(); // Inicializa la posición de la caja activa al montar el componente
    window.addEventListener("resize", initActiveBox);
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    event.preventDefault();
    if (lastActiveLink.current) {
      lastActiveLink.current.classList.remove("active");
    }

    const clicked = event.target;
    clicked.classList.add("active");
    lastActiveLink.current = clicked;
    initActiveBox();

    const href = clicked.getAttribute("href");
    if (href && href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={`nav-link ${key === 0 ? "active" : ""} ${className || ""}`}
          key={key}
          onClick={activeCurrentLink}
          ref={key === 0 ? lastActiveLink : null}
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
};

export default Navbar;
