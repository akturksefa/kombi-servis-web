import React from 'react';
import { FaAward, FaUsers, FaHandshake, FaCog } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Hakkımızda</h1>
          <p>Burak Isı Sistemleri olarak sektördeki deneyimimizi ve kalite anlayışımızı tanıyın</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title">Hikayemiz</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              2009 yılında kurulan Burak Isı Sistemleri, kombi satışı ve teknik servis hizmeti alanında 
              faaliyet gösteren güvenilir bir firmadır. 15 yılı aşkın deneyimimizle binlerce müşterimizin 
              ısı ihtiyaçlarını karşılamış bulunmaktayız.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              Kaliteli hizmet anlayışımız, müşteri memnuniyeti odaklı yaklaşımımız ve sektördeki 
              güvenilirliğimizle öne çıkmaktayız. Uzman teknisyen kadromuz ve modern ekipmanlarımızla 
              her türlü kombi arızasını çözüyor, yeni kombi satışında en uygun fiyatları sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Değerlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaHandshake />
              </div>
              <h3>Güvenilirlik</h3>
              <p>
                Müşterilerimizin güvenini kazanmak ve korumak bizim için en önemli değerdir. 
                Her işimizde şeffaflık ve dürüstlük ilkesini benimseriz.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaCog />
              </div>
              <h3>Kalite</h3>
              <p>
                En kaliteli ürünleri kullanarak, uzman teknisyenlerimizle en iyi hizmeti sunmayı 
                hedefliyoruz. Kalite bizim vazgeçilmezimizdir.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaUsers />
              </div>
              <h3>Müşteri Memnuniyeti</h3>
              <p>
                Müşteri memnuniyeti bizim önceliğimizdir. Her müşterimizin ihtiyacını 
                anlayarak, en uygun çözümü sunuyoruz.
              </p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaAward />
              </div>
              <h3>Profesyonellik</h3>
              <p>
                Sektördeki deneyimimiz ve sürekli gelişim anlayışımızla profesyonel 
                hizmet sunuyoruz. İşimizi en iyi şekilde yapmaya odaklanıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Ekibimiz</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              Burak Isı Sistemleri ekibi, kombi sektöründe uzmanlaşmış, deneyimli teknisyenlerden oluşmaktadır. 
              Her ekibimiz üyesi, sürekli eğitim alarak kendini geliştirmekte ve en güncel teknik bilgilere 
              sahip olmaktadır.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
              Müşterilerimize en iyi hizmeti sunabilmek için ekip çalışmasına önem veriyor, 
              her projeyi titizlikle planlıyor ve eksiksiz teslim ediyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Sertifikalarımız</h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
              Burak Isı Sistemleri olarak, sektördeki güvenilirliğimizi kanıtlayan çeşitli sertifikalara sahibiz. 
              Bu sertifikalar, kaliteli hizmet anlayışımızın ve profesyonelliğimizin göstergesidir.
            </p>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
              <div className="service-card">
                <h3>ISO 9001:2015</h3>
                <p>Kalite Yönetim Sistemi Sertifikası</p>
              </div>
              <div className="service-card">
                <h3>Teknik Servis Yetkisi</h3>
                <p>Yetkili Teknik Servis Belgesi</p>
              </div>
              <div className="service-card">
                <h3>İSG Sertifikası</h3>
                <p>İş Sağlığı ve Güvenliği Belgesi</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
