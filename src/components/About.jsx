import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLaptop, FaCode, FaLightbulb } from "react-icons/fa";


const About = ({ language }) => {
  const texts = {
    en: {
      aboutTitle: "ABOUT ME",
      aboutParagraphs: [
        "Hi, I'm Juan David, a self-taught web developer and technology enthusiast. I'm passionate about turning ideas into functional, clean, and modern digital experiences.",
        "I’ve completed a bootcamp and also trained myself independently, constantly exploring new tools and languages. I enjoy building responsive interfaces with HTML, CSS, and JavaScript, always following best practices in semantics, accessibility, and modern design.",
        "My goal is to keep learning and growing as a professional to become a full stack developer, contributing creative and effective solutions to every project I work on.",
      ],
      whatIDoTitle: "WHAT I DO",
      designTitle: "DESIGN",
      designText:
        "Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.",
      developmentTitle: "DEVELOPMENT",
      developmentText:
        "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
      learningTitle: "LEARNING & GROWING",
      learningText:
        "I’m currently studying programming to broaden my skills and explore different areas of development. I’m passionate about learning and growing every day. Outside tech, I enjoy nature, sunny summer days, and staying active through sports.",
    },
    es: {
      aboutTitle: "SOBRE MÍ",
      aboutParagraphs: [
        "Hola, soy Juan David, un desarrollador web autodidacta y entusiasta de la tecnología. Me apasiona convertir ideas en experiencias digitales funcionales, limpias y modernas.",
        "He completado un bootcamp y también me he formado de manera independiente, explorando constantemente nuevas herramientas y lenguajes. Disfruto creando interfaces responsivas con HTML, CSS y JavaScript, siempre siguiendo las mejores prácticas en semántica, accesibilidad y diseño moderno.",
        "Mi objetivo es seguir aprendiendo y creciendo como profesional para convertirme en desarrollador full stack, aportando soluciones creativas y efectivas en cada proyecto en el que trabajo.",
      ],
      whatIDoTitle: "LO QUE HAGO",
      designTitle: "DISEÑO",
      designText:
        "El diseño no es solo cómo se ve y se siente un producto por fuera. El diseño abarca la funcionalidad interna del producto así como la experiencia general del usuario. Me esfuerzo por diseñar interfaces y experiencias que la gente disfrute en todos los medios digitales.",
      developmentTitle: "DESARROLLO",
      developmentText:
        "Con una base sólida en ciencias de la computación, me apasiona el diseño y desarrollo web, y también me interesa el desarrollo de aplicaciones móviles. A medida que crezco como desarrollador, espero escribir código limpio y legible que otros puedan usar y que permita crear software hermoso.",
      learningTitle: "APRENDIZAJE Y CRECIMIENTO",
      learningText:
        "Actualmente estoy estudiando programación para ampliar mis habilidades y explorar diferentes áreas del desarrollo. Me apasiona aprender y crecer cada día. Fuera de la tecnología, disfruto de la naturaleza, los días soleados de verano y mantenerme activo practicando deportes.",
    },
  };

  const t = texts[language] || texts.en;

  return (
    <section
      id="about"
      className="pb-20 pt-48 text-white flex flex-col items-center justify-center px-14"
    >
      {/* ABOUT ME */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
        {/* Text */}
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-center text-4xl mb-6 pb-4">{t.aboutTitle}</h2>
          {t.aboutParagraphs.map((p, idx) => (
            <p key={idx} className="mb-4 text-sm">
              {p}
            </p>
          ))}
        </div>

        {/* Image */}
        <figure className="md:w-1/3 flex justify-center">
          <img
            src="/img/juan.png"
            width={400}
            height={400}
            alt="Juan David"
            className="rounded-xl object-cover"
          />
        </figure>
      </div>
      

      {/* WHAT I DO */}
      <h2 className="text-center text-3xl pt-32 pb-11">{t.whatIDoTitle}</h2>
      <div className="flex flex-wrap justify-center gap-8  text-center">
        
        {/* DESIGN */}
        <div className="flex flex-col justify-start items-center w-80 pb-12">
          <div className="w-36 h-36 bg-zinc-600 text-white flex items-center justify-center rounded-full mb-4 transition-transform duration-300 hover:rotate-180">
            <i className="fa fa-laptop text-5xl"></i>
          </div>
          <h3 className="text-lg font-semibold mb-4">{t.designTitle}</h3>
          <p className="text-sm">{t.designText}</p>
        </div>

        {/* DEVELOPMENT */}
        <div className="flex flex-col justify-start items-center w-80 pb-12">
          <div className="w-36 h-36 bg-zinc-600 text-white flex items-center justify-center rounded-full mb-4 transition-transform duration-300 hover:rotate-180">
            <i className="fa fa-code text-5xl"></i>
          </div>
          <h3 className="text-lg font-semibold mb-4">{t.developmentTitle}</h3>
          <p className="text-sm">{t.developmentText}</p>
        </div>

        {/* LEARNING */}
        <div className="flex flex-col justify-start items-center w-80 pb-12">
          <div className="w-36 h-36 bg-zinc-600 text-white flex items-center justify-center rounded-full mb-4 transition-transform duration-300 hover:rotate-180">
            <i className="fa fa-lightbulb-o text-5xl"></i>
          </div>
          <h3 className="text-lg font-semibold mb-4">{t.learningTitle}</h3>
          <p className="text-sm">{t.learningText}</p>
        </div>
      </div>

     <h2 className="text-center text-4xl py-14 mb-6">SKILLS & TECHNOLOGIES</h2>
     <ul className="flex justify-center gap-8 text-6xl cursor-pointer">
      <li><FaHtml5 className="text-orange-600 w-28 h-28 transition-transform duration-300 hover:scale-125" /></li>
      <li><FaCss3Alt className="text-blue-700 w-28 h-28 transition-transform duration-300 hover:scale-125" /></li>
      <li><FaJs className="text-yellow-500 w-28 h-28 transition-transform duration-300 hover:scale-125" /></li>
      <li><FaReact className="text-blue-400 w-28 h-28 transition-transform duration-300 hover:scale-125" /></li>
    </ul>


    </section>
  );
};

export default About;
