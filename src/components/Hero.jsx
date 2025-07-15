import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = ({ language }) => {
  // Textos en ambos idiomas
  const texts = {
    en: {
      greeting: "HI, I'M JUAN DAVID",
      description: "Web Developer & Programming Enthusiast.",
      cv: "DOWNLOAD CV",
    },
    es: {
      greeting: "HOLA, SOY JUAN DAVID",
      description: "Desarrollador Web y Apasionado de la Programación.",
      cv: "DESCARGAR CV"
    },
  };

  // Elegir textos según idioma, por defecto inglés
  const { greeting, description, cv } = texts[language] || texts.en;

  return (
    <section
      id="home"
      className="hero max-h-[800px] text-white flex flex-col items-center justify-center h-screen"
    >
      
      <div className="text-center max-w-xl">
        <h1 className="text-6xl mb-4 pt-60 pb-12  px-4 text-center">
          {greeting.split(" ").slice(0, -2).join(" ")}{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-pink-500 to-yellow-400 bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient">
            {greeting.split(" ").slice(-2).join(" ")}
          </span>
        </h1>

        <p className="mb-6 pb-12 text-2xl">{description}</p>
      </div>
      <div className="flex items-center justify-center gap-4 mt-6 text-2xl ">
            <a
              href="https://github.com/ChaitanyaSai-Meka"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-zinc-600 transition"
            >
              <FaGithub />
            </a>
            
            <a
              href="https://www.linkedin.com/in/chaitanya-sai-meka/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
            href=""
            download
            className="btn btn-primary hover:text-zinc-600 pb-">{cv}</a>
          </div>
      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
        }
        className="mt-10 p-3 rounded-full text-white cursor-pointer"
      >
        <FaAngleDoubleDown className="text-5xl animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;

