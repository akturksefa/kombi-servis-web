import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaBuilding } from 'react-icons/fa';

const Contact = () => {


  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>İletişim</h1>
          <p>Bizimle iletişime geçin, size en iyi hizmeti sunalım</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaPhone />
              </div>
              <h3>Telefon</h3>
              <p>Hemen arayın, uzman ekibimiz size yardımcı olsun</p>
              <a href="tel:+905374915736" className="btn btn-primary">
                <FaPhone /> +90 537 491 57 36
              </a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaWhatsapp />
              </div>
              <h3>WhatsApp</h3>
              <p>WhatsApp ile hızlı iletişim kurun</p>
              <a href="https://wa.me/905374915736" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <FaWhatsapp /> WhatsApp ile Yaz
              </a>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaEnvelope />
              </div>
              <h3>E-posta</h3>
              <p>Detaylı bilgi için e-posta gönderin</p>
              <a href="mailto:info@burakisisistemleri.com" className="btn btn-primary">
                <FaEnvelope /> E-posta Gönder
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Address and Hours */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Adresimiz</h3>
              <p>
                <strong>Burak Isı Sistemleri</strong><br />
                Çakmak, Pınarlı Sk. No:38A<br />
                Ümraniye, İstanbul<br />
                <small style={{ color: '#666' }}>İstanbul'un her yerinden kolayca ulaşabilirsiniz</small>
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaClock />
              </div>
              <h3>Çalışma Saatleri</h3>
              <p>
                <strong>Normal Çalışma Saatleri:</strong><br />
                Pazartesi - Cuma: 08:00 - 18:00<br />
                Cumartesi: 09:00 - 18:00<br />
                <span style={{ color: '#ff6b35', fontWeight: 'bold' }}>Acil Durumlar: 7/24</span>
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaBuilding />
              </div>
              <h3>Şirket Bilgileri</h3>
              <p>
                <strong>Burak Isı Sistemleri</strong><br />
                15+ yıl deneyim<br />
                Lisanslı teknisyenler<br />
                Garantili hizmet<br />
                <small style={{ color: '#666' }}>Güvenilir çözüm ortağınız</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Address Info */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Konumumuz</h2>
          <div style={{ 
            textAlign: 'center', 
            background: 'white',
            padding: '2rem',
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: '#1e3c72', marginBottom: '1rem' }}>Adres Bilgileri</h3>
            <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
              <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: '#ff6b35' }} />
              <strong>Çakmak, Pınarlı Sk. No:38A</strong><br />
              Ümraniye, İstanbul
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="https://maps.google.com/?q=Çakmak,+Pınarlı+Sk.+No:38A,+Ümraniye,+İstanbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: '0.9rem' }}
              >
                <FaMapMarkerAlt /> Haritada Görüntüle
              </a>
              <a 
                href="https://wa.me/905374915736" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ fontSize: '0.9rem' }}
              >
                <FaWhatsapp /> WhatsApp ile Yol Tarifi Al
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section" style={{ backgroundColor: '#1e3c72', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Acil Durumlar İçin</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Kombi arızası mı var? 7/24 acil servis hizmetimizle yanınızdayız
          </p>
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', 
            padding: '2rem', 
            borderRadius: '15px',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#ff6b35', fontSize: '2rem', marginBottom: '1rem' }}>
              <FaPhone style={{ marginRight: '0.5rem' }} />
              +90 537 491 57 36
            </h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
              Acil durumlar için 7/24 hizmet veriyoruz
            </p>
          </div>
          <div className="cta-buttons">
            <a href="tel:+905374915736" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              <FaPhone /> Hemen Ara
            </a>
            <a href="https://wa.me/905374915736" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              <FaWhatsapp /> WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
