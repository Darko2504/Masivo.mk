import React, { useState, useEffect } from 'react';
import Logo from '../src/assets/logo.png';

const Navbar = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState('light'); // default theme

  // Apply theme to html
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Fixed section IDs with language-specific display
  const sections = [
    { id: 'hero', mk: 'Почетна', en: 'Home' },
    { id: 'wood', mk: 'Дрво', en: 'Wood' },
    { id: 'projects', mk: 'Проекти', en: 'Projects' },
    { id: 'contact', mk: 'Контакт', en: 'Contact' },
  ];

  // Toggle functions
  const toggleLang = () => setLang(lang === 'mk' ? 'en' : 'mk');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <nav className="fixed w-full top-0 left-0 bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark shadow-md z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo + Name */}
        <a href="#hero" className="flex items-center space-x-2">
          <img src={Logo} alt="MASIVO Logo" className="w-10 h-10 object-contain" /> {/* small logo */}
          <div className="font-bold text-xl">МАСИВО</div>
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex md:space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="hover:text-accent transition-colors"
              >
                {lang === 'mk' ? section.mk : section.en}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggles + Hamburger */}
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleLang}
            className="px-3 py-1 rounded hover:bg-accent hover:text-white transition-colors"
          >
            {lang === 'mk' ? 'EN' : 'MK'}
          </button>
          <button 
            onClick={toggleTheme}
            className="px-3 py-1 rounded hover:bg-accent hover:text-white transition-colors"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger for mobile */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <ul className={`md:hidden flex flex-col bg-lightBg dark:bg-darkBg overflow-hidden transition-all duration-300
                      ${open ? 'max-h-96' : 'max-h-0'}`}>
        {sections.map((section) => (
          <li key={section.id} className="border-b">
            <a 
              href={`#${section.id}`} 
              className="block px-4 py-2 hover:text-accent transition-colors"
              onClick={() => setOpen(false)} // close menu after click
            >
              {lang === 'mk' ? section.mk : section.en}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
