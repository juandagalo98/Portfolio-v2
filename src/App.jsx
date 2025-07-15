import React, { useState } from "react";
import ParticlesBackground from "./components/ParticlesBackground";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";


function App() {
  const [language, setLanguage] = useState("en"); // Idioma por defecto: inglés

  return (
    <>
      <ParticlesBackground />
      <div className="relative z-10 min-h-screen">
        {/* Pasamos el idioma y el setter al Header */}
        <Header language={language} setLanguage={setLanguage} />
        <main>
          {/* Pasamos solo el idioma a los demás componentes */}
          <Hero language={language} />
          <About language={language} />
        </main>
      </div>
    </>
  );
}

export default App;
