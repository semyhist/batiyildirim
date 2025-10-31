import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaFlag, FaCog } from 'react-icons/fa';
import './Career.css';
import { dilKullan } from '../context/LanguageContext';

const Career = () => {
  const { dil } = dilKullan();
  
  const kariyerAsamalari = [
    {
      ikon: <FaFlag />,
      baslik: dil === 'tr' ? 'Karting Dönemi' : 'Karting Era',
      donem: '2015 - 2024',
      aciklama: dil === 'tr' 
        ? 'İlk sezonunda 2 podyum. 2016\'dan itibaren yarışlar kazanmaya başladı. 2023\'te 9 uluslararası kupa kazandı.'
        : '2 podiums in first season. Started winning races from 2016. Won 9 international trophies in 2023.',
      basarilar: [
        dil === 'tr' ? 'Türkiye Karting Şampiyonası' : 'Turkey Karting Championship',
        'ROK Italy Championship - 8th/89',
        'WSK Euro Series Champion 2023',
        'WSK Open Series Champion 2023'
      ]
    },
    {
      ikon: <FaTrophy />,
      baslik: 'Porsche Carrera Cup Italia',
      donem: '2025 - ' + (dil === 'tr' ? 'Devam Ediyor' : 'Ongoing'),
      aciklama: dil === 'tr'
        ? 'Porsche Junior Academy\'e seçildi. Ghinzani-Omnia takımıyla İtalya\'nın en prestijli GT serisinde yarışıyor.'
        : 'Selected for Porsche Junior Academy. Racing in Italy\'s most prestigious GT series with Ghinzani-Omnia team.',
      basarilar: [
        'Porsche Junior Academy',
        'Ghinzani Arco Motorsport',
        'Porsche 911 GT3 Cup (992)',
        dil === 'tr' ? 'En genç pilot' : 'Youngest driver'
      ]
    },
    {
      ikon: <FaCog />,
      baslik: dil === 'tr' ? 'Antrenman & Gelişim' : 'Training & Development',
      donem: dil === 'tr' ? 'Sürekli' : 'Continuous',
      aciklama: dil === 'tr'
        ? 'Haftada 2 gün pist (6-7 seans), 2-3 gün fitness. Spor psikoloğu Berceste Seber ile mental antrenman.'
        : '2 days track per week (6-7 sessions), 2-3 days fitness. Mental training with sports psychologist Berceste Seber.',
      basarilar: [
        dil === 'tr' ? 'Haftalık pist antrenmanları' : 'Weekly track training',
        dil === 'tr' ? 'Atletik performans koçu: Celal Başoğlu' : 'Athletic coach: Celal Başoğlu',
        dil === 'tr' ? 'Spor psikoloğu: Berceste Seber' : 'Sports psychologist: Berceste Seber',
        dil === 'tr' ? 'Simülatör çalışmaları' : 'Simulator training'
      ]
    }
  ];

  const alintilar = [
    {
      metin: dil === 'tr' 
        ? "Hız tekniktir. Kontrol odak ister. Her viraj bir oyun alanı gibi."
        : "Speed is technique. Control requires focus. Every corner is like a playground.",
      baglam: dil === 'tr' ? "İlk defa Porsche direksiyonuna geçtiği an hakkında" : "About his first time behind a Porsche wheel"
    },
    {
      metin: dil === 'tr'
        ? "Pistte olmasam da zihinsel olarak hep yarışta kalıyorum."
        : "Even when I'm not on track, I stay mentally in the race.",
      baglam: dil === 'tr' ? "Antrenman programı hakkında" : "About his training program"
    },
    {
      metin: dil === 'tr'
        ? "Genç olmak, dikkatleri üzerine çekmek demek. Bunu lehime çevirmeyi hedefliyorum."
        : "Being young means attracting attention. I aim to turn this to my advantage.",
      baglam: dil === 'tr' ? "En genç pilot olması hakkında" : "About being the youngest driver"
    }
  ];

  return (
    <section id="career" className="career section">
      <div className="container">
        <motion.h2 
          className="section-title"
          data-aos="fade-up"
        >
          {dil === 'tr' ? 'Kariyer Yolculuğu' : 'Career Journey'}
        </motion.h2>
        
        <div className="career-grid grid-3">
          {kariyerAsamalari.map((asama, indeks) => (
            <motion.div 
              key={asama.baslik}
              className="career-card card"
              data-aos="fade-up"
              data-aos-delay={indeks * 100}
            >
              <div className="career-icon">
                {asama.ikon}
              </div>
              <h3>{asama.baslik}</h3>
              <span className="career-period">{asama.donem}</span>
              <p>{asama.aciklama}</p>
              <ul className="achievement-list">
                {asama.basarilar.map((basari, i) => (
                  <li key={i}>{basari}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="quotes-section">
          <h3 className="quotes-title">{dil === 'tr' ? 'Batı Yıldırım\'dan Alıntılar' : 'Quotes from Batı Yıldırım'}</h3>
          <div className="quotes-grid">
            {alintilar.map((alinti, indeks) => (
              <motion.div 
                key={indeks}
                className="quote-card"
                data-aos="zoom-in"
                data-aos-delay={indeks * 150}
              >
                <blockquote>"{alinti.metin}"</blockquote>
                <cite>{alinti.baglam}</cite>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
