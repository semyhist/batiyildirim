import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { useDil } from '../context/LanguageContext';
import { ceviriler } from '../translations';

const About = () => {
  const { dil } = useDil();
  const metin = ceviriler[dil];
  
  const zamanCizelgesi = [
    { yil: '2008', olay: dil === 'tr' ? 'İstanbul\'da doğdu' : 'Born in Istanbul', detay: dil === 'tr' ? '20 Haziran 2008' : 'June 20, 2008' },
    { yil: '2015', olay: dil === 'tr' ? 'İlk karting deneyimi' : 'First karting experience', detay: dil === 'tr' ? '7 yaşında başladı' : 'Started at age 7' },
    { yil: '2016', olay: dil === 'tr' ? 'Türkiye Karting Şampiyonası' : 'Turkey Karting Championship', detay: dil === 'tr' ? 'İlk sezonunda 2 podyum' : '2 podiums in first season' },
    { yil: '2019', olay: 'ROK Italy Championship', detay: dil === 'tr' ? '89 yarışçı arasında 8.' : '8th among 89 drivers' },
    { yil: '2023', olay: dil === 'tr' ? 'WSK Euro & Open Series Şampiyonu' : 'WSK Euro & Open Series Champion', detay: dil === 'tr' ? 'Çifte şampiyonluk' : 'Double championship' },
    { yil: '2024', olay: dil === 'tr' ? 'WSK Euro Series' : 'WSK Euro Series', detay: dil === 'tr' ? '2. sıra' : '2nd place' },
    { yil: '2025', olay: 'Porsche Carrera Cup Italia', detay: dil === 'tr' ? 'Ghinzani Arco Motorsport - Porsche Junior' : 'Ghinzani Arco Motorsport - Porsche Junior' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.h2 
          className="section-title"
          data-aos="fade-up"
        >
          {metin.hakkimda.baslik}
        </motion.h2>
        
        <div className="about-content grid-2">
          <motion.div 
            className="about-text"
            data-aos="fade-right"
          >
            <h3>{metin.hakkimda.altBaslik}</h3>
            <p>
              <strong>{metin.hakkimda.paragraf1}</strong>
            </p>
            <p>
              {metin.hakkimda.paragraf2}
            </p>
            <blockquote>
              "{metin.hakkimda.alinti}"
            </blockquote>
            <p>
              {metin.hakkimda.paragraf3}
            </p>
          </motion.div>
          
          <motion.div 
            className="timeline"
            data-aos="fade-left"
          >
            {zamanCizelgesi.map((oge, indeks) => (
              <motion.div 
                key={oge.yil}
                className="timeline-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: indeks * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="timeline-year">{oge.yil}</div>
                <div className="timeline-content">
                  <h4>{oge.olay}</h4>
                  <p>{oge.detay}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
