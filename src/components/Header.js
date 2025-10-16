import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            Burak Isı Sistemleri
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/" className={isActive('/')} onClick={() => setIsMenuOpen(false)}>
              Ana Sayfa
            </Link>
            <Link to="/hakkimizda" className={isActive('/hakkimizda')} onClick={() => setIsMenuOpen(false)}>
              Hakkımızda
            </Link>
            <Link to="/hizmetler" className={isActive('/hizmetler')} onClick={() => setIsMenuOpen(false)}>
              Hizmetler
            </Link>
            <Link to="/referanslar" className={isActive('/referanslar')} onClick={() => setIsMenuOpen(false)}>
              Referanslar
            </Link>
            <Link to="/iletisim" className={isActive('/iletisim')} onClick={() => setIsMenuOpen(false)}>
              İletişim
            </Link>
          </nav>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
