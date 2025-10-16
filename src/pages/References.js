import React from 'react';
import { FaStar, FaQuoteLeft, FaUser, FaBuilding, FaPhone } from 'react-icons/fa';

const References = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      company: "Yılmaz Ailesi",
      rating: 5,
      comment: "Burak Isı Sistemleri'nden kombi aldık. Hem fiyat hem de hizmet kalitesi çok iyi. Montajı da çok profesyonel yaptılar. Kesinlikle tavsiye ederim."
    },
    {
      id: 2,
      name: "Fatma Demir",
      company: "Demir Apartmanı",
      rating: 5,
      comment: "Kombimizde sorun vardı, çok hızlı müdahale ettiler. Teknisyenleri çok bilgili ve güler yüzlü. 7/24 hizmet vermeleri çok büyük avantaj."
    },
    {
      id: 3,
      name: "Mehmet Kaya",
      company: "Kaya İnşaat",
      rating: 5,
      comment: "İş yerimiz için kombi satışı yaptılar. Hem teknik hem de ticari konularda çok yardımcı oldular. Garantili hizmet anlayışları takdire şayan."
    },
    {
      id: 4,
      name: "Ayşe Özkan",
      company: "Özkan Ailesi",
      rating: 5,
      comment: "Bakım hizmeti aldık. Kombimiz eskisi gibi çalışmaya başladı. Enerji faturası da düştü. Teşekkürler Burak Isı Sistemleri."
    },
    {
      id: 5,
      name: "Mustafa Çelik",
      company: "Çelik Apartmanı",
      rating: 5,
      comment: "Apartmanımızda toplu kombi değişimi yaptık. Hem zamanında teslim hem de montaj konusunda hiç sorun yaşamadık. Çok memnunuz."
    },
    {
      id: 6,
      name: "Zeynep Arslan",
      company: "Arslan Ailesi",
      rating: 5,
      comment: "Acil durumda aradık, gece yarısı geldiler. Kombimizi hemen düzelttiler. Bu kadar hızlı hizmet beklemiyorduk. Teşekkürler."
    }
  ];

  const stats = [
    { number: "15+", label: "Yıl Deneyim" },
    { number: "5000+", label: "Mutlu Müşteri" },
    { number: "7/24", label: "Teknik Servis" },
    { number: "%100", label: "Müşteri Memnuniyeti" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        style={{
          color: index < rating ? '#ffc107' : '#e9ecef',
          marginRight: '0.2rem'
        }}
      />
    ));
  };

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Referanslarımız</h1>
          <p>Müşterilerimizin deneyimleri ve memnuniyetleri bizim en büyük gücümüz</p>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ backgroundColor: '#1e3c72', color: 'white' }}>
        <div className="container">
          <div className="services-grid">
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#ff6b35', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1.2rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Müşteri Yorumları</h2>
          <div className="services-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="service-card">
                <div style={{ marginBottom: '1rem' }}>
                  {renderStars(testimonial.rating)}
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <FaQuoteLeft style={{ color: '#ff6b35', fontSize: '1.5rem', marginBottom: '0.5rem' }} />
                  <p style={{ fontStyle: 'italic', lineHeight: '1.6' }}>
                    "{testimonial.comment}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FaUser style={{ color: '#ff6b35' }} />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <br />
                    <small style={{ color: '#666' }}>
                      <FaBuilding style={{ marginRight: '0.3rem' }} />
                      {testimonial.company}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Güven Göstergeleri</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>15+ Yıl Deneyim</h3>
              <p>
                Sektörde 15 yılı aşkın deneyimimizle binlerce müşteriye hizmet verdik. 
                Bu süreçte edindiğimiz tecrübe ve bilgi birikimi ile size en iyi hizmeti sunuyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <h3>5000+ Mutlu Müşteri</h3>
              <p>
                Bugüne kadar 5000'den fazla müşterimize hizmet verdik. 
                Her müşterimizin memnuniyeti bizim için en önemli önceliktir.
              </p>
            </div>
            
            <div className="service-card">
              <h3>7/24 Teknik Servis</h3>
              <p>
                Acil durumlar için 7/24 teknik servis hizmeti veriyoruz. 
                Kombi arızalarınız için her zaman yanınızdayız.
              </p>
            </div>
            
            <div className="service-card">
              <h3>%100 Garanti</h3>
              <p>
                Tüm işlemlerimizde garanti kapsamında hizmet veriyoruz. 
                Müşteri memnuniyeti garantimiz vardır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Sertifikalar ve Belgeler</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              Kaliteli hizmet anlayışımızı kanıtlayan sertifikalarımız ve sektördeki güvenilirliğimiz
            </p>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="service-card">
                <h3>ISO 9001:2015</h3>
                <p>Kalite Yönetim Sistemi Sertifikası ile hizmet kalitemizi garanti altına alıyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Teknik Servis Yetkisi</h3>
                <p>Yetkili teknik servis belgemiz ile resmi onaylı hizmet veriyoruz.</p>
              </div>
              <div className="service-card">
                <h3>İSG Sertifikası</h3>
                <p>İş Sağlığı ve Güvenliği belgemiz ile güvenli çalışma ortamı sağlıyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Ticaret Sicil Belgesi</h3>
                <p>Resmi ticaret sicil belgemiz ile yasal güvence altında hizmet veriyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ backgroundColor: '#1e3c72', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Siz de Müşterimiz Olmak İster misiniz?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Binlerce mutlu müşterimiz arasına katılın, kaliteli hizmetin farkını yaşayın
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

export default References;
