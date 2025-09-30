import React, { useState } from 'react';
import Navbar from './Nav';
import Hero from './Hero';
import WoodSection from './WoodSection';
import ProjectSlider from './ProjectSlider';
import ContactSection from './ContactSection';
import Footer from './Footer'; // <- Import the Footer here

function App() {
  const [lang, setLang] = useState('mk'); // default language

  return (
    <div className="font-sans bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-colors duration-500">
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero section */}
      <section id="hero">
        <Hero lang={lang} />
      </section>

      {/* Wood section */}
      <section id="wood">
        <WoodSection lang={lang} />
      </section>

      {/* Projects section */}
      <section id="projects">
        <ProjectSlider lang={lang} />
      </section>

      {/* Contact section */}
      <section id="contact">
        <ContactSection lang={lang} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
