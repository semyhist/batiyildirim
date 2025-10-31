import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';
import { useDil } from '../context/LanguageContext';
import { ceviriler } from '../translations';

const Footer = () => {
  const suankiYil = new Date().getFullYear();
  const { dil } = useDil();
  const metin = ceviriler[dil];

  const menuLinkleri = dil === 'tr' ? {
    'Hızlı Linkler': [
      { isim: 'Ana Sayfa', link: '#home' },
      { isim: 'Hakkımda', link: '#about' },
      { isim: 'Kariyer', link: '#career' },
      { isim: 'Başarılar', link: '#achievements' }
    ],
    'İçerik': [
      { isim: 'Galeri', link: '#gallery' },
      { isim: 'Haberler', link: '#news' },
      { isim: 'İletişim', link: '#contact' },
      { isim: 'Medya Kiti', link: '#' }
    ]
  } : {
    'Quick Links': [
      { isim: 'Home', link: '#home' },
      { isim: 'About', link: '#about' },
      { isim: 'Career', link: '#career' },
      { isim: 'Achievements', link: '#achievements' }
    ],
    'Content': [
      { isim: 'Gallery', link: '#gallery' },
      { isim: 'News', link: '#news' },
      { isim: 'Contact', link: '#contact' },
      { isim: 'Media Kit', link: '#' }
    ]
  };

  const sosyalMedya = [
    { ikon: <FaInstagram />, isim: 'Instagram', url: 'https://www.instagram.com/batiyildirim/' },
    { ikon: <FaYoutube />, isim: 'YouTube', url: 'https://www.youtube.com/@batiyildirim' },
    { ikon: <FaLinkedin />, isim: 'LinkedIn', url: 'https://www.linkedin.com/in/bati-yildirim-a1683b346' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>BATI YILDIRIM</h3>
            <p>{dil === 'tr' ? 'Porsche Carrera Cup İtalya Pilotu' : 'Porsche Carrera Cup Italy Driver'}</p>
            <p className="footer-quote">
              {dil === 'tr' 
                ? '"Pistte olmak benim için sadece yarışmak değil, tutkumu yaşamak demek."'
                : '"Being on the track is not just about racing for me, it\'s about living my passion."'}
            </p>
            
            <div className="footer-social">
              {sosyalMedya.map((sosyal, indeks) => (
                <motion.a
                  key={sosyal.isim}
                  href={sosyal.url}
                  className="social-icon"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: indeks * 0.1 }}
                  viewport={{ once: true }}
                >
                  {sosyal.ikon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {Object.entries(menuLinkleri).map(([kategori, linkler], kategoriIndeks) => (
            <motion.div 
              key={kategori}
              className="footer-links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: kategoriIndeks * 0.1 }}
              viewport={{ once: true }}
            >
              <h4>{kategori}</h4>
              <ul>
                {linkler.map((link, indeks) => (
                  <motion.li 
                    key={link.isim}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (kategoriIndeks * 0.1) + (indeks * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <a href={link.link}>{link.isim}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
          
          <motion.div 
            className="footer-contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>{dil === 'tr' ? 'İletişim' : 'Contact'}</h4>
            <p>{dil === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}</p>
            <p>info@batiyildirim.com</p>
            
            <div className="footer-stats">
              <div className="stat">
                <span className="stat-number">2025</span>
                <span className="stat-label">{dil === 'tr' ? 'Sezon' : 'Season'}</span>
              </div>
              <div className="stat">
                <span className="stat-number">ITA</span>
                <span className="stat-label">Porsche Cup</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>
              &copy; {suankiYil} Batı Yıldırım. {metin.altbilgi.telif}
            </p>
            <p className="footer-love">
              {metin.altbilgi.gelistirici}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
