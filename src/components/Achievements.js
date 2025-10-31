import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaStar, FaBullseye, FaFlag } from 'react-icons/fa';
import './Achievements.css';
import { dilKullan } from '../context/LanguageContext';

const Achievements = () => {
  const { dil } = dilKullan();
  
  const basarilar = [
    {
      ikon: <FaTrophy />,
      baslik: 'WSK Euro Series 2023',
      aciklama: dil === 'tr' ? '1. tur birincisi, 2. tur ikincisi - OK-N' : '1st Round Winner, 2nd Round Second - OK-N',
      sira: '1.',
      renk: '#FFD700'
    },
    {
      ikon: <FaStar />,
      baslik: 'WSK Open Series 2023',
      aciklama: dil === 'tr' ? '1. yarış birincisi - OK-N' : '1st Race Winner - OK-N',
      sira: '1.',
      renk: '#FFD700'
    },
    {
      ikon: <FaFlag />,
      baslik: dil === 'tr' ? 'ACI İtalya Karting 2023' : 'ACI Italian Karting 2023',
      aciklama: dil === 'tr' ? '2. tur birincisi, 4. tur üçüncüsü, 5. tur birincisi' : '2nd Round Winner, 4th Round Third, 5th Round Winner',
      sira: '5.',
      renk: '#00C851'
    },
    {
      ikon: <FaBullseye />,
      baslik: dil === 'tr' ? '28. Ayrton Senna Trophy' : '28th Ayrton Senna Trophy',
      aciklama: dil === 'tr' ? 'Üçüncülük' : 'Third Place',
      sira: '3.',
      renk: '#cd7f32'
    }
  ];

  const hedefler = [
    {
      baslik: dil === 'tr' ? 'Porsche Carrera Cup Başarısı' : 'Porsche Carrera Cup Success',
      aciklama: dil === 'tr' ? 'İtalya serisinde podyum ve zaferler elde etmek' : 'Achieve podiums and victories in Italy series',
      zaman: '2025'
    },
    {
      baslik: dil === 'tr' ? 'Profesyonel Kariyer' : 'Professional Career',
      aciklama: dil === 'tr' ? 'Motorsporunda profesyonel pilot olarak kariyer inşa etmek' : 'Build a career as a professional driver in motorsport',
      zaman: '2025-2027'
    },
    {
      baslik: dil === 'tr' ? 'GT Şampiyonaları' : 'GT Championships',
      aciklama: dil === 'tr' ? 'Uluslararası GT yarışlarında mücadele etmek' : 'Compete in international GT races',
      zaman: '2026+'
    },
    {
      baslik: dil === 'tr' ? 'Milli Temsil' : 'National Representation',
      aciklama: dil === 'tr' ? 'Türkiye\'yi uluslararası arenada başarıyla temsil etmek' : 'Successfully represent Turkey in international arena',
      zaman: dil === 'tr' ? 'Devam Eden' : 'Ongoing'
    }
  ];

  const yarisIstatistikleri = [
    { etiket: dil === 'tr' ? 'WSK Euro Series 2023' : 'WSK Euro Series 2023', deger: '1.', detay: 'OK-N' },
    { etiket: dil === 'tr' ? 'WSK Open Series 2023' : 'WSK Open Series 2023', deger: '1.', detay: 'OK-N' },
    { etiket: dil === 'tr' ? 'FIA World Championship' : 'FIA World Championship', deger: '9.', detay: 'OK-N' },
    { etiket: dil === 'tr' ? 'Ayrton Senna Trophy' : 'Ayrton Senna Trophy', deger: '3.', detay: '2023' }
  ];

  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <motion.h2 
          className="section-title"
          data-aos="fade-up"
        >
          {dil === 'tr' ? 'Başarılar & Hedefler' : 'Achievements & Goals'}
        </motion.h2>
        
        <div className="achievements-modern">
          <div className="achievements-cards-grid">
            {basarilar.map((basari, indeks) => (
              <motion.div 
                key={basari.baslik}
                className="achievement-modern-card"
                data-aos="fade-up"
                data-aos-delay={indeks * 100}
                whileHover={{ y: -10 }}
              >
                <div className="achievement-modern-icon" style={{ background: basari.renk }}>
                  {basari.ikon}
                </div>
                <h4>{basari.baslik}</h4>
                <p>{basari.aciklama}</p>
                <div className="achievement-badge">{basari.sira}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="stats-modern">
          <h3 data-aos="fade-up">{dil === 'tr' ? 'Kariyer İstatistikleri' : 'Career Statistics'}</h3>
          <div className="stats-modern-grid">
            {yarisIstatistikleri.map((ist, indeks) => (
              <motion.div 
                key={ist.etiket}
                className="stat-modern-card"
                data-aos="zoom-in"
                data-aos-delay={indeks * 100}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-modern-value">{ist.deger}</div>
                <div className="stat-modern-label">{ist.etiket}</div>
                <div className="stat-modern-detail">{ist.detay}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="goals-modern">
          <h3 data-aos="fade-up">{dil === 'tr' ? 'Gelecek Hedefleri' : 'Future Goals'}</h3>
          <div className="goals-modern-grid">
            {hedefler.map((hedef, indeks) => (
              <motion.div 
                key={hedef.baslik}
                className="goal-modern-card"
                data-aos="fade-up"
                data-aos-delay={indeks * 100}
              >
                <div className="goal-modern-timeline">{hedef.zaman}</div>
                <h4>{hedef.baslik}</h4>
                <p>{hedef.aciklama}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
