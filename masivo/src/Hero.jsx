import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../src/assets/logo.png';

const Hero = ({ lang }) => {
  const texts = {
    mk: 'МАСИВО создава уникатни маси од масивно дрво со посветеност на секој детал и природна естетика. Доаѓаме од традицијата на рачна изработка и се стремиме да внесеме топлина и карактер во секој дом.',
    en: 'MASIVO creates unique solid wood tables with attention to every detail and natural aesthetics. We come from a tradition of handcrafted furniture and aim to bring warmth and character into every home.',
  };

  return (
    <section className="flex flex-col items-center justify-center pt-40 md:pt-35 px-6 text-center min-h-[60vh] bg-lightBg dark:bg-darkBg text-textLight dark:text-textDark transition-colors duration-500">
      
      {/* Animated Logo */}
      <motion.img 
        src={Logo} 
        alt="MASIVO Logo" 
        className="w-55 md:w-64 mb-6 object-contain" 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      
      {/* Animated Text */}
      <motion.p 
        className="max-w-3xl text-base md:text-lg lg:text-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {lang === 'mk' ? texts.mk : texts.en}
      </motion.p>
    </section>
  );
};

export default Hero;
