import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import './News.css';
import { dilKullan } from '../context/LanguageContext';

const News = () => {
  const { dil } = dilKullan();
  
  const haberler = [
    {
      id: 1,
      baslik: dil === 'tr' 
        ? 'Batı Yıldırım 2025 Sezonunda Porsche Carrera Cup İtalya\'da'
        : 'Batı Yıldırım in Porsche Carrera Cup Italy 2025 Season',
      ozet: dil === 'tr'
        ? '16 yaşındaki Türk pilot Batı Yıldırım, 2025 sezonunda Ghinzani Arco Motorsport takımıyla Porsche Carrera Cup İtalya\'da yarışıyor.'
        : '16-year-old Turkish driver Batı Yıldırım is racing in Porsche Carrera Cup Italy with Ghinzani Arco Motorsport team in 2025 season.',
      tarih: '2025-04-15',
      kategori: dil === 'tr' ? 'Yarış' : 'Race',
      resim: '/2025-PCCI-2-BatiYildirim-02.jpg',
      onecikarilan: true
    },
    {
      id: 2,
      baslik: dil === 'tr' ? 'Ghinzani Arco Motorsport ile Yeni Sezon' : 'New Season with Ghinzani Arco Motorsport',
      ozet: dil === 'tr'
        ? 'Batı Yıldırım, profesyonel takım Ghinzani Arco Motorsport ile 2025 sezonuna hazırlanıyor.'
        : 'Batı Yıldırım is preparing for the 2025 season with professional team Ghinzani Arco Motorsport.',
      tarih: '2025-03-20',
      kategori: dil === 'tr' ? 'Başarı' : 'Success',
      resim: '/BatiYildirim_Porsche_Italya_2025_04042025_2.jpg'
    },
    {
      id: 3,
      baslik: dil === 'tr' ? 'Misano\'da Test Sürüşleri' : 'Test Drives at Misano',
      ozet: dil === 'tr'
        ? 'Batı Yıldırım, Misano pistinde Porsche 911 GT3 Cup ile test sürüşleri gerçekleştirdi.'
        : 'Batı Yıldırım completed test drives with Porsche 911 GT3 Cup at Misano circuit.',
      tarih: '2025-02-10',
      kategori: dil === 'tr' ? 'Antrenman' : 'Training',
      resim: '/batiyildirim-misanotest-2.jpg'
    },
    {
      id: 4,
      baslik: dil === 'tr' ? 'Karting\'den Porsche\'ye: Bir Başarı Hikayesi' : 'From Karting to Porsche: A Success Story',
      ozet: dil === 'tr'
        ? '7 yaşında karting ile başlayan yolculuk, bugün Porsche Carrera Cup İtalya\'ya ulaştı.'
        : 'The journey that started with karting at age 7 has reached Porsche Carrera Cup Italy today.',
      tarih: '2024-12-15',
      kategori: dil === 'tr' ? 'Özel Haber' : 'Special News',
      resim: '/BatiYildirim_WSKEuroSeries2023-1.jpg'
    },
    {
      id: 5,
      baslik: dil === 'tr' ? 'WSK Euro Series\'te Türk Bayrağı' : 'Turkish Flag at WSK Euro Series',
      ozet: dil === 'tr'
        ? 'Batı Yıldırım, WSK Euro Series\'te Türkiye\'yi başarıyla temsil etti.'
        : 'Batı Yıldırım successfully represented Turkey at WSK Euro Series.',
      tarih: '2023-11-20',
      kategori: dil === 'tr' ? 'Yarış' : 'Race',
      resim: '/BatiYildirim_WSKEuroSeries2023-3.jpg'
    },
    {
      id: 6,
      baslik: dil === 'tr' ? 'Türk Motorsporuna Genç Yetenek' : 'Young Talent for Turkish Motorsport',
      ozet: dil === 'tr'
        ? 'Uluslararası arenada Türkiye\'yi temsil eden genç pilot, ülkemiz motorsporuna umut ışığı oluyor.'
        : 'The young driver representing Turkey in the international arena brings hope to our country\'s motorsport.',
      tarih: '2023-10-05',
      kategori: dil === 'tr' ? 'Analiz' : 'Analysis',
      resim: '/24739_713_YLDIRIM-BATI-EGEMINI-ROK_8013-1024x682.jpg'
    }
  ];

  const tarihFormatla = (tarihStr) => {
    const secenekler = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(tarihStr).toLocaleDateString('tr-TR', secenekler);
  };

  const kategoriRengi = (kategori) => {
    const renkler = {
      'Başarı': '#28a745', 'Success': '#28a745',
      'Yarış': '#ff6b35', 'Race': '#ff6b35',
      'Özel Haber': '#6f42c1', 'Special News': '#6f42c1',
      'Antrenman': '#fd7e14', 'Training': '#fd7e14',
      'Analiz': '#20c997', 'Analysis': '#20c997'
    };
    return renkler[kategori] || '#6c757d';
  };

  return (
    <section id="news" className="news section">
      <div className="container">
        <motion.h2 className="section-title" data-aos="fade-up">
          {dil === 'tr' ? 'Haberler & Medya' : 'News & Media'}
        </motion.h2>
        
        <div className="news-grid">
          {haberler.map((haber, indeks) => (
            <motion.article
              key={haber.id}
              className={`news-card ${haber.onecikarilan ? 'featured' : ''}`}
              data-aos="fade-up"
              data-aos-delay={indeks * 100}
              whileHover={{ y: -5 }}
            >
              <div className="news-image">
                <img src={haber.resim} alt={haber.baslik} />
                <div className="news-category" style={{ backgroundColor: kategoriRengi(haber.kategori) }}>
                  {haber.kategori}
                </div>
              </div>
              
              <div className="news-content">
                <div className="news-meta">
                  <FaCalendar />
                  <span>{tarihFormatla(haber.tarih)}</span>
                </div>
                
                <h3>{haber.baslik}</h3>
                <p>{haber.ozet}</p>
                
                <button className="read-more">
                  {dil === 'tr' ? 'Devamını Oku' : 'Read More'}
                  <FaArrowRight />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
