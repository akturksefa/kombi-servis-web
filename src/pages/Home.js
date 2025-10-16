import React from 'react';
import { Link } from 'react-router-dom';
import { FaWrench, FaShoppingCart, FaPhone, FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Burak Isı Sistemleri</h1>
          <p>
            Kombi satışı ve teknik servis hizmeti konusunda güvenilir çözüm ortağınız. 
            Kaliteli hizmet anlayışımızla evinizin ısı ihtiyaçlarını karşılıyoruz.
          </p>
          <div className="cta-buttons">
            <a href="tel:+905374915736" className="btn btn-primary">
              <FaPhone /> Hemen Ara
            </a>
            <Link to="/hizmetler" className="btn btn-secondary">
              Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaShoppingCart />
              </div>
              <h3>Kombi Satışı</h3>
              <p>
                En kaliteli kombi markalarının satışını yapıyoruz. 
                Uygun fiyat ve kaliteli ürünlerle evinizi ısıtın.
              </p>
              <Link to="/hizmetler" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Detaylar
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaWrench />
              </div>
              <h3>Teknik Servis</h3>
              <p>
                Uzman teknisyenlerimizle kombi arızalarınızı hızlı ve 
                güvenilir şekilde çözüyoruz.
              </p>
              <Link to="/hizmetler" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Detaylar
              </Link>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaCheckCircle />
              </div>
              <h3>Bakım Hizmetleri</h3>
              <p>
                Düzenli bakım ile kombinizin ömrünü uzatın ve 
                enerji tasarrufu sağlayın.
              </p>
              <Link to="/hizmetler" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Detaylar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Neden Burak Isı Sistemleri?</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>15+ Yıl Deneyim</h3>
              <p>
                Sektörde 15 yılı aşkın deneyimimizle güvenilir hizmet sunuyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <h3>7/24 Servis</h3>
              <p>
                Acil durumlar için 7/24 teknik servis hizmeti veriyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Garantili Hizmet</h3>
              <p>
                Tüm işlemlerimizde garanti kapsamında hizmet veriyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <h3>Uygun Fiyat</h3>
              <p>
                Kaliteli hizmeti en uygun fiyatlarla sunuyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Hemen İletişime Geçin</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#666' }}>
            Kombi ihtiyaçlarınız için uzman ekibimizle iletişime geçin
          </p>
          <div className="cta-buttons">
            <a href="tel:+905374915736" className="btn btn-primary">
              <FaPhone /> Hemen Ara
            </a>
            <a href="https://wa.me/905374915736" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaPhone /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
