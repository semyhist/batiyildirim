import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaArrowDown } from 'react-icons/fa';
import './Hero.css';
import { useDil } from '../context/LanguageContext';
import { ceviriler } from '../translations';

const Hero = () => {
  const { dil } = useDil();
  const metin = ceviriler[dil];
  
  const istatistikler = [
    { sayi: '17', etiket: metin.anasayfa.istatistikler.yas },
    { sayi: '2025', etiket: metin.anasayfa.istatistikler.porsche },
    { sayi: '2008', etiket: metin.anasayfa.istatistikler.dogum },
    { sayi: 'ITA', etiket: metin.anasayfa.istatistikler.seri }
  ];

  const arkaplanStil = {
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url(/2025-PCCI-2-BatiYildirim-05.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section id="home" className="hero" style={arkaplanStil}>
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {metin.anasayfa.baslik}
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {metin.anasayfa.altBaslik}
          </motion.p>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {metin.anasayfa.aciklama}
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <a href="#about" className="btn-primary">
              {metin.anasayfa.buton}
            </a>
            <a href="https://www.youtube.com/watch?v=rmzSQM1Oa9g" target="_blank" rel="noopener noreferrer" className="btn-play">
              <FaPlay />
              <span>{metin.anasayfa.video}</span>
            </a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {istatistikler.map((ist, indeks) => (
            <motion.div 
              key={ist.etiket}
              className="stat-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + indeks * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <span className="stat-number">{ist.sayi}</span>
              <span className="stat-label">{ist.etiket}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6, repeat: Infinity, repeatType: 'reverse', repeatDelay: 1 }}
      >
        <FaArrowDown />
        <span>Aşağı Kaydır</span>
      </motion.div>
    </section>
  );
};

export default Hero;
