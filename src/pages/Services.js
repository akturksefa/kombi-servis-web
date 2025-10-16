import React from 'react';
import { 
  FaShoppingCart, 
  FaWrench, 
  FaCheckCircle, 
  FaTools, 
  FaPhone, 
  FaShieldAlt,
  FaTruck,
  FaClock
} from 'react-icons/fa';

const Services = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Hizmetlerimiz</h1>
          <p>Kombi satışı ve teknik servis konusunda sunduğumuz kapsamlı hizmetler</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Ana Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaShoppingCart />
              </div>
              <h3>Kombi Satışı</h3>
              <p>
                En kaliteli kombi markalarının satışını yapıyoruz. Müşterilerimizin ihtiyaçlarına 
                uygun, enerji verimli ve ekonomik kombi seçenekleri sunuyoruz.
              </p>
              <ul style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '1rem' }}>
                <li>Marka garantili kombiler</li>
                <li>Enerji verimli modeller</li>
                <li>Uygun ödeme seçenekleri</li>
                <li>Ücretsiz montaj hizmeti</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaWrench />
              </div>
              <h3>Teknik Servis</h3>
              <p>
                Uzman teknisyenlerimizle kombi arızalarınızı hızlı ve güvenilir şekilde çözüyoruz. 
                7/24 acil servis hizmeti veriyoruz.
              </p>
              <ul style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '1rem' }}>
                <li>Arıza tespiti ve onarım</li>
                <li>Yedek parça değişimi</li>
                <li>7/24 acil servis</li>
                <li>Garantili işçilik</li>
              </ul>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaCheckCircle />
              </div>
              <h3>Bakım Hizmetleri</h3>
              <p>
                Düzenli bakım ile kombinizin ömrünü uzatın ve enerji tasarrufu sağlayın. 
                Periyodik bakım programlarımızla kombinizi her zaman verimli tutun.
              </p>
              <ul style={{ textAlign: 'left', marginTop: '1rem', paddingLeft: '1rem' }}>
                <li>Periyodik bakım</li>
                <li>Temizlik ve kontrol</li>
                <li>Verimlilik testi</li>
                <li>Bakım raporu</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Ek Hizmetlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaTools />
              </div>
              <h3>Montaj ve Kurulum</h3>
              <p>
                Yeni kombi montajı ve kurulumu hizmeti. Uzman ekibimizle güvenli ve 
                profesyonel montaj yapıyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaTruck />
              </div>
              <h3>Nakliye Hizmeti</h3>
              <p>
                Kombi nakliyesi ve teslimat hizmeti. Ürününüzü güvenli şekilde 
                adresinize ulaştırıyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaShieldAlt />
              </div>
              <h3>Garanti Hizmetleri</h3>
              <p>
                Tüm işlemlerimizde garanti kapsamında hizmet veriyoruz. 
                Müşteri memnuniyeti garantimiz var.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaClock />
              </div>
              <h3>7/24 Destek</h3>
              <p>
                Acil durumlar için 7/24 teknik destek hattımız. 
                Her zaman yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Hizmet Sürecimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#ff6b35', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                1
              </div>
              <h3>İletişim</h3>
              <p>
                Telefon, WhatsApp veya web sitemizden bizimle iletişime geçin. 
                İhtiyacınızı belirtin.
              </p>
            </div>
            
            <div className="service-card">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#ff6b35', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                2
              </div>
              <h3>Değerlendirme</h3>
              <p>
                Uzman ekibimiz ihtiyacınızı değerlendirir ve size en uygun 
                çözümü önerir.
              </p>
            </div>
            
            <div className="service-card">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#ff6b35', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                3
              </div>
              <h3>Hizmet</h3>
              <p>
                Anlaşma sonrası hızlı ve kaliteli hizmet sunuyoruz. 
                İşinizi zamanında teslim ediyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <div style={{ 
                width: '60px', 
                height: '60px', 
                backgroundColor: '#ff6b35', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                margin: '0 auto 1rem'
              }}>
                4
              </div>
              <h3>Takip</h3>
              <p>
                Hizmet sonrası müşteri memnuniyeti takibi yapıyoruz. 
                Garanti kapsamında destek sağlıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#1e3c72', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Hizmet Almak İstiyor musunuz?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Uzman ekibimizle iletişime geçin, size en uygun çözümü sunalım
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

export default Services;
