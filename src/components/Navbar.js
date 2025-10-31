import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import './Navbar.css';
import { dilKullan } from '../context/LanguageContext';
import { ceviriler } from '../translations';

const Navbar = () => {
  const [menuAcik, setMenuAcik] = useState(false);
  const [kaydirma, setKaydirma] = useState(false);
  const { dil, dilDegistir } = dilKullan();
  const metin = ceviriler[dil];

  useEffect(() => {
    const kaydirmaKontrol = () => {
      setKaydirma(window.scrollY > 50);
    };
    window.addEventListener('scroll', kaydirmaKontrol);
    return () => window.removeEventListener('scroll', kaydirmaKontrol);
  }, []);

  const menuOgeleri = [
    { isim: metin.menu.anasayfa, link: '#home' },
    { isim: metin.menu.hakkimda, link: '#about' },
    { isim: metin.menu.kariyer, link: '#career' },
    { isim: metin.menu.basarilar, link: '#achievements' },
    { isim: metin.menu.galeri, link: '#gallery' },
    { isim: metin.menu.haberler, link: '#news' },
    { isim: metin.menu.iletisim, link: '#contact' }
  ];

  return (
    <motion.nav 
      className={`navbar ${kaydirma ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <h2>BATI YILDIRIM</h2>
        </div>
        
        <ul className={`nav-menu ${menuAcik ? 'active' : ''}`}>
          {menuOgeleri.map((oge, indeks) => (
            <motion.li 
              key={oge.isim}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: indeks * 0.1 }}
            >
              <a 
                href={oge.link} 
                onClick={() => setMenuAcik(false)}
                className="nav-link"
              >
                {oge.isim}
              </a>
            </motion.li>
          ))}
        </ul>
        
        <div className="nav-actions">
          <button className="lang-toggle" onClick={dilDegistir}>
            <FaGlobe /> {dil === 'tr' ? 'EN' : 'TR'}
          </button>
          <div className="hamburger" onClick={() => setMenuAcik(!menuAcik)}>
            {menuAcik ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
