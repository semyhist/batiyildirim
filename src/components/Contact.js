import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Contact.css';
import { dilKullan } from '../context/LanguageContext';

const Contact = () => {
  const { dil } = dilKullan();
  const [formVerisi, setFormVerisi] = useState({
    isim: '',
    eposta: '',
    konu: '',
    mesaj: ''
  });
  const [gonderiliyor, setGonderiliyor] = useState(false);

  const inputDegisti = (e) => {
    setFormVerisi({
      ...formVerisi,
      [e.target.name]: e.target.value
    });
  };

  const formGonder = async (e) => {
    e.preventDefault();
    setGonderiliyor(true);
    
    setTimeout(() => {
      alert(dil === 'tr' 
        ? 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.'
        : 'Your message has been sent successfully! We will get back to you soon.');
      setFormVerisi({ isim: '', eposta: '', konu: '', mesaj: '' });
      setGonderiliyor(false);
    }, 1500);
  };

  const iletisimBilgileri = [
    {
      ikon: <FaEnvelope />,
      baslik: dil === 'tr' ? 'E-posta' : 'Email',
      bilgi: 'info@batiyildirim.com',
      link: 'mailto:info@batiyildirim.com'
    },
    {
      ikon: <FaPhone />,
      baslik: dil === 'tr' ? 'Telefon' : 'Phone',
      bilgi: '+90 533 967 28 49',
      link: 'tel:+905339672849'
    }
  ];

  const sosyalMedya = [
    { ikon: <FaInstagram />, isim: 'Instagram', url: 'https://www.instagram.com/batiyildirim/', renk: '#E4405F' },
    { ikon: <FaYoutube />, isim: 'YouTube', url: 'https://www.youtube.com/@batiyildirim', renk: '#FF0000' },
    { ikon: <FaLinkedin />, isim: 'LinkedIn', url: 'https://www.linkedin.com/in/bati-yildirim-a1683b346', renk: '#0077B5' }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.h2 className="section-title" data-aos="fade-up">
          {dil === 'tr' ? 'İletişim' : 'Contact'}
        </motion.h2>
        
        <div className="contact-content grid-2">
          <motion.div className="contact-info" data-aos="fade-right">
            <h3>{dil === 'tr' ? 'Benimle İletişime Geçin' : 'Get In Touch'}</h3>
            <p>
              {dil === 'tr' 
                ? 'Sponsorluk, medya işbirlikleri veya genel sorularınız için iletişime geçebilirsiniz.'
                : 'You can contact me for sponsorship, media collaborations or general inquiries.'}
            </p>
            
            <div className="contact-details">
              {iletisimBilgileri.map((bilgi, indeks) => (
                <motion.div 
                  key={bilgi.baslik}
                  className="contact-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: indeks * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">{bilgi.ikon}</div>
                  <div className="contact-text">
                    <h4>{bilgi.baslik}</h4>
                    <a href={bilgi.link}>{bilgi.bilgi}</a>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="social-section">
              <h4>{dil === 'tr' ? 'Sosyal Medya' : 'Social Media'}</h4>
              <div className="social-links">
                {sosyalMedya.map((sosyal) => (
                  <motion.a
                    key={sosyal.isim}
                    href={sosyal.url}
                    className="social-link"
                    style={{ '--social-color': sosyal.renk }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {sosyal.ikon}
                    <span>{sosyal.isim}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <motion.div className="contact-form-container" data-aos="fade-left">
            <form className="contact-form" onSubmit={formGonder}>
              <h3>{dil === 'tr' ? 'Mesaj Gönder' : 'Send Message'}</h3>
              
              <div className="form-group">
                <input
                  type="text"
                  name="isim"
                  placeholder={dil === 'tr' ? 'Adınız Soyadınız' : 'Your Name'}
                  value={formVerisi.isim}
                  onChange={inputDegisti}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="eposta"
                  placeholder={dil === 'tr' ? 'E-posta Adresiniz' : 'Your Email'}
                  value={formVerisi.eposta}
                  onChange={inputDegisti}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="konu"
                  placeholder={dil === 'tr' ? 'Konu' : 'Subject'}
                  value={formVerisi.konu}
                  onChange={inputDegisti}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="mesaj"
                  placeholder={dil === 'tr' ? 'Mesajınız' : 'Your Message'}
                  rows="6"
                  value={formVerisi.mesaj}
                  onChange={inputDegisti}
                  required
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-primary"
                disabled={gonderiliyor}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {gonderiliyor 
                  ? (dil === 'tr' ? 'Gönderiliyor...' : 'Sending...') 
                  : (dil === 'tr' ? 'Mesaj Gönder' : 'Send Message')}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="contact-footer" data-aos="fade-up">
          <div className="contact-card">
            <h3>Batı Yıldırım</h3>
            <p>{dil === 'tr' ? 'Porsche Carrera Cup İtalya Pilotu' : 'Porsche Carrera Cup Italy Driver'}</p>
            <p>Ghinzani Arco Motorsport</p>
            <p>{dil === 'tr' ? 'İstanbul, Türkiye' : 'Istanbul, Turkey'}</p>
            <blockquote>
              {dil === 'tr' 
                ? '"Pistte olmak benim için sadece yarışmak değil, tutkumu yaşamak demek."'
                : '"Being on the track is not just about racing for me, it\'s about living my passion."'}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
