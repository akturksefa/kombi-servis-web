import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Burak Isı Sistemleri</h3>
            <p>
              Kombi satışı ve teknik servis hizmeti konusunda güvenilir çözüm ortağınız. 
              Kaliteli hizmet anlayışımızla yanınızdayız.
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/hakkimizda">Hakkımızda</Link>
              <Link to="/hizmetler">Hizmetler</Link>
              <Link to="/referanslar">Referanslar</Link>
              <Link to="/iletisim">İletişim</Link>
              <Link to="/servis-talebi">Servis Talebi</Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>İletişim Bilgileri</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaPhone />
                <a href="tel:+905551234567">+90 555 123 45 67</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaEnvelope />
                <a href="mailto:info@burakisisistemleri.com">info@burakisisistemleri.com</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaMapMarkerAlt />
                <span>Merkez Mahallesi, Isı Sistemleri Sokak No:123, İstanbul</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaWhatsapp />
                <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h3>Sosyal Medya</h3>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#1877f2' }}>
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem', color: '#e4405f' }}>
                <FaInstagram />
              </a>
              <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" 
                 style={{ fontSize: '1.5rem', color: '#25d366' }}>
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Burak Isı Sistemleri. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
