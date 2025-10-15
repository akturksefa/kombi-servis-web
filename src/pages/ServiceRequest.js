import React, { useState } from 'react';
import { FaPhone, FaWrench, FaCheckCircle } from 'react-icons/fa';

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    serviceType: '',
    brand: '',
    model: '',
    problem: '',
    urgency: 'normal',
    preferredDate: '',
    preferredTime: '',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderimi burada yapılacak
    setIsSubmitted(true);
    
    // WhatsApp mesajı oluştur
    const message = `🔧 SERVİS TALEBİ

👤 Müşteri Bilgileri:
• Ad Soyad: ${formData.name}
• Telefon: ${formData.phone}
• E-posta: ${formData.email}
• Adres: ${formData.address}

🔧 Servis Bilgileri:
• Hizmet Türü: ${formData.serviceType}
• Marka: ${formData.brand}
• Model: ${formData.model}
• Problem: ${formData.problem}
• Aciliyet: ${formData.urgency}
• Tercih Edilen Tarih: ${formData.preferredDate}
• Tercih Edilen Saat: ${formData.preferredTime}

📝 Notlar: ${formData.notes}`;

    const whatsappUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      address: '',
      serviceType: '',
      brand: '',
      model: '',
      problem: '',
      urgency: 'normal',
      preferredDate: '',
      preferredTime: '',
      notes: ''
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div>
        <section className="hero" style={{ padding: '4rem 0' }}>
          <div className="container">
            <h1>Talep Gönderildi!</h1>
            <p>Servis talebiniz başarıyla alınmıştır</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              textAlign: 'center',
              background: 'white',
              padding: '3rem',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
            }}>
              <FaCheckCircle style={{ fontSize: '4rem', color: '#28a745', marginBottom: '1rem' }} />
              <h2 style={{ color: '#28a745', marginBottom: '1rem' }}>Teşekkürler!</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: '#666' }}>
                Servis talebiniz başarıyla alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.
                WhatsApp üzerinden de mesajınız gönderilmiştir.
              </p>
              <div className="cta-buttons">
                <button onClick={resetForm} className="btn btn-primary">
                  Yeni Talep
                </button>
                <a href="tel:+905551234567" className="btn btn-secondary">
                  <FaPhone /> Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Page Header */}
      <section className="hero" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1>Servis Talebi</h1>
          <p>Kombi ihtiyaçlarınız için hızlı ve kolay servis talebi oluşturun</p>
        </div>
      </section>

      {/* Service Types */}
      <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Hizmet Türlerimiz</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <FaWrench />
              </div>
              <h3>Teknik Servis</h3>
              <p>Kombi arızalarınız için uzman teknisyen hizmeti</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaCheckCircle />
              </div>
              <h3>Bakım Hizmeti</h3>
              <p>Periyodik bakım ve temizlik hizmeti</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <FaPhone />
              </div>
              <h3>Acil Servis</h3>
              <p>7/24 acil durum müdahale hizmeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Request Form */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="section-title">Servis Talep Formu</h2>
            <div style={{ 
              background: 'white', 
              padding: '2rem', 
              borderRadius: '10px', 
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)' 
            }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
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
                    <label htmlFor="phone">Telefon *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="email">E-posta</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="serviceType">Hizmet Türü *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Seçiniz</option>
                      <option value="teknik-servis">Teknik Servis</option>
                      <option value="bakim">Bakım Hizmeti</option>
                      <option value="acil-servis">Acil Servis</option>
                      <option value="montaj">Montaj/Kurulum</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="address">Adres *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    placeholder="Tam adresinizi yazın..."
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="brand">Kombi Markası</label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="Örn: Bosch, Vaillant, Ariston"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="problem">Problem/Arıza Açıklaması *</label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    placeholder="Kombinizde yaşadığınız problemi detaylı olarak açıklayın..."
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="form-group">
                    <label htmlFor="urgency">Aciliyet</label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Acil</option>
                      <option value="emergency">Çok Acil</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="preferredDate">Tercih Edilen Tarih</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="preferredTime">Tercih Edilen Saat</label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                    >
                      <option value="">Seçiniz</option>
                      <option value="09:00-12:00">09:00 - 12:00</option>
                      <option value="12:00-15:00">12:00 - 15:00</option>
                      <option value="15:00-18:00">15:00 - 18:00</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes">Ek Notlar</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Eklemek istediğiniz notlar..."
                  />
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                    <FaPhone /> Servis Talebi Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section" style={{ backgroundColor: '#1e3c72', color: 'white' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Hemen İletişime Geçin</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            Acil durumlar için 7/24 hizmet veriyoruz
          </p>
          <div className="cta-buttons">
            <a href="tel:+905551234567" className="btn btn-primary">
              <FaPhone /> Hemen Ara
            </a>
            <a href="https://wa.me/905551234567" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaPhone /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceRequest;
