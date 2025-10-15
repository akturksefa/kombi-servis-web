import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi burada yapılacak
    alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 41.0082, // İstanbul koordinatları
    lng: 28.9784
  };

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
          <div className="contact-grid">
            <div className="contact-info">
              <h3>İletişim Bilgileri</h3>
              
              <div className="contact-item">
                <FaPhone />
                <div>
                  <strong>Telefon</strong>
                  <br />
                  <a href="tel:+905551234567">+90 555 123 45 67</a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaWhatsapp />
                <div>
                  <strong>WhatsApp</strong>
                  <br />
                  <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer">
                    +90 555 123 45 67
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaEnvelope />
                <div>
                  <strong>E-posta</strong>
                  <br />
                  <a href="mailto:info@burakisisistemleri.com">
                    info@burakisisistemleri.com
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Adres</strong>
                  <br />
                  Merkez Mahallesi, Isı Sistemleri Sokak No:123
                  <br />
                  Beşiktaş, İstanbul
                </div>
              </div>
              
              <div className="contact-item">
                <FaClock />
                <div>
                  <strong>Çalışma Saatleri</strong>
                  <br />
                  Pazartesi - Cuma: 08:00 - 18:00
                  <br />
                  Cumartesi: 09:00 - 15:00
                  <br />
                  <span style={{ color: '#ff6b35' }}>Acil Durumlar: 7/24</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-info">
              <h3>Mesaj Gönderin</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Ad Soyad *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">E-posta *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Konu *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Konu Seçin</option>
                    <option value="kombi-satisi">Kombi Satışı</option>
                    <option value="teknik-servis">Teknik Servis</option>
                    <option value="bakim">Bakım Hizmeti</option>
                    <option value="montaj">Montaj ve Kurulum</option>
                    <option value="diger">Diğer</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Mesajınız *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Konumumuz</h2>
          <div style={{ borderRadius: '10px', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "YOUR_GOOGLE_MAPS_API_KEY"}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={15}
                options={{
                  zoomControl: true,
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: true,
                }}
              >
                <Marker 
                  position={center}
                  title="Burak Isı Sistemleri"
                  label="Burak Isı Sistemleri"
                />
              </GoogleMap>
            </LoadScript>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1rem' }}>
            <p style={{ color: '#666' }}>
              <FaMapMarkerAlt style={{ marginRight: '0.5rem', color: '#ff6b35' }} />
              Merkez Mahallesi, Isı Sistemleri Sokak No:123, Beşiktaş, İstanbul
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Hızlı İletişim</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
            Acil durumlar için hemen bizimle iletişime geçin
          </p>
          <div className="cta-buttons">
            <a href="tel:+905551234567" className="btn btn-primary">
              <FaPhone /> Hemen Ara
            </a>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
