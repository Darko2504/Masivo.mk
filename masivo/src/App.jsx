import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import Hero from './Hero';
import WoodSection from './WoodSection';
import ProjectSlider from './ProjectSlider';
import ContactSection from './ContactSection';
import Footer from './Footer';
// import project18 from "../src/assets/projects/Project18.png";
import project19 from "../src/assets/projects/Project19.jpg";


function App() {
  const [lang, setLang] = useState('mk');
  const [autoPopup, setAutoPopup] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Auto-close modal after 8 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setAutoPopup(false), 500);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-sans bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-colors duration-500">

      {/* AUTO POPUP MODAL */}
      {autoPopup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50 transition-opacity duration-500
            ${fadeOut ? "opacity-0" : "opacity-100"}
          `}
        >
          {/* Modal container */}
          <div 
            className="relative rounded-2xl shadow-2xl p-6 w-11/12 max-w-md md:max-w-xl lg:max-w-2xl text-center"
            style={{ backgroundColor: '#D2B48C' }} // light brown / wood color
          >

            {/* Close button */}
            <button
              onClick={() => {
                setFadeOut(true);
                setTimeout(() => setAutoPopup(false), 500);
              }}
              className="absolute top-3 right-3 text-gray-800 text-3xl font-bold hover:text-red-500"
            >
              ×
            </button>

            {/* Text banner */}
            <div className="mb-6 text-2xl md:text-4xl font-bold text-[#5C4033] animate-pulse">
              🚀 NEW PROJECT!
            </div>

            {/* Image */}
            <img
              src={project19}
              alt="New Project"
              className="mx-auto rounded-lg max-h-96 md:max-h-[500px] object-contain"
            />
          </div>
        </div>
      )}

      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      {/* Hero section */}
      <section id="hero">
        <Hero lang={lang} />
      </section>

      {/* Wood section */}
      <section id="wood">
        <WoodSection lang={lang} />
      </section>

      {/* Projects */}
      <section id="projects">
        <ProjectSlider lang={lang} />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactSection lang={lang} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
