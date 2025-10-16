import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = "905374915736";
  const defaultMessage = "Merhaba! Burak Isı Sistemleri hakkında bilgi almak istiyorum.";

  const handleClick = () => {
    const message = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      onClick={handleClick}
      title="WhatsApp ile İletişime Geçin"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
