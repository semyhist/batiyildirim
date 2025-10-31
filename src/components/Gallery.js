import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';
import { useDil } from '../context/LanguageContext';

const Gallery = () => {
  const { dil } = useDil();
  const [seciliResim, setSeciliResim] = useState(null);
  const [aktifIndeks, setAktifIndeks] = useState(0);
  const [aktifKategori, setAktifKategori] = useState('all');

  const resimler = [
    { id: 1, src: '/2025-PCCI-2-BatiYildirim-02.jpg', baslik: 'Porsche Carrera Cup İtalya 2025', kategori: 'race' },
    { id: 2, src: '/2025-PCCI-2-BatiYildirim-05.jpg', baslik: 'Yarış Anı', kategori: 'race' },
    { id: 3, src: '/BatiYildirim_Porsche_Italya_2025_04042025_2.jpg', baslik: 'Porsche İtalya 2025', kategori: 'race' },
    { id: 4, src: '/BatiYildirim-2025-003.jpg', baslik: 'Sezon 2025', kategori: 'race' },
    { id: 5, src: '/batiyildirim-misanotest-2.jpg', baslik: 'Misano Test Sürüşü', kategori: 'training' },
    { id: 6, src: '/batiyildirim-porsche-italya-20.jpg', baslik: 'Porsche 911 GT3 Cup', kategori: 'car' },
    { id: 7, src: '/24739_713_YLDIRIM-BATI-EGEMINI-ROK_8013-1024x682.jpg', baslik: 'ROK Cup Yarışları', kategori: 'karting' },
    { id: 8, src: '/BatiYildirim_WSKEuroSeries2023-1.jpg', baslik: 'WSK Euro Series 2023', kategori: 'karting' },
    { id: 9, src: '/BatiYildirim_WSKEuroSeries2023-3.jpg', baslik: 'WSK Euro Series', kategori: 'karting' },
    { id: 10, src: '/BatiYildirim_WSKEuroSeries2023-4.jpg', baslik: 'Karting Dönemi', kategori: 'karting' }
  ];

  const kategoriler = [
    { id: 'all', isim: dil === 'tr' ? 'Tümü' : 'All' },
    { id: 'race', isim: 'Porsche Cup' },
    { id: 'karting', isim: 'Karting' },
    { id: 'training', isim: dil === 'tr' ? 'Antrenman' : 'Training' },
    { id: 'car', isim: dil === 'tr' ? 'Araçlar' : 'Cars' }
  ];
  
  const filtrelenmisResimler = aktifKategori === 'all' 
    ? resimler 
    : resimler.filter(r => r.kategori === aktifKategori);

  const modalAc = (resim, indeks) => {
    setSeciliResim(resim);
    setAktifIndeks(indeks);
  };

  const modalKapat = () => setSeciliResim(null);

  const sonrakiResim = () => {
    const yeniIndeks = (aktifIndeks + 1) % filtrelenmisResimler.length;
    setAktifIndeks(yeniIndeks);
    setSeciliResim(filtrelenmisResimler[yeniIndeks]);
  };

  const oncekiResim = () => {
    const yeniIndeks = aktifIndeks === 0 ? filtrelenmisResimler.length - 1 : aktifIndeks - 1;
    setAktifIndeks(yeniIndeks);
    setSeciliResim(filtrelenmisResimler[yeniIndeks]);
  };

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <motion.h2 className="section-title" data-aos="fade-up">
          {dil === 'tr' ? 'Galeri' : 'Gallery'}
        </motion.h2>
        
        <div className="gallery-filters" data-aos="fade-up" data-aos-delay="200">
          {kategoriler.map(kat => (
            <button
              key={kat.id}
              className={`filter-btn ${aktifKategori === kat.id ? 'active' : ''}`}
              onClick={() => setAktifKategori(kat.id)}
            >
              {kat.isim}
            </button>
          ))}
        </div>
        
        <div className="gallery-scroll-container">
          <motion.div className="gallery-scroll">
            {filtrelenmisResimler.map((resim, indeks) => (
              <motion.div
                key={resim.id}
                className="gallery-scroll-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: indeks * 0.05 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => modalAc(resim, indeks)}
              >
                <img src={resim.src} alt={resim.baslik} />
                <div className="gallery-overlay">
                  <h4>{resim.baslik}</h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      <AnimatePresence>
        {seciliResim && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={modalKapat}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={modalKapat}>
                <FaTimes />
              </button>
              
              <button className="modal-nav prev" onClick={oncekiResim}>
                <FaChevronLeft />
              </button>
              
              <img src={seciliResim.src} alt={seciliResim.baslik} />
              
              <button className="modal-nav next" onClick={sonrakiResim}>
                <FaChevronRight />
              </button>
              
              <div className="modal-info">
                <h3>{seciliResim.baslik}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
