import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_pflb.svg';
import '../styles/header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="https://www.performance-lab.ru/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="DataSan Logo" className="logo" />
        </a>

        <nav className="nav">
          <a href="https://www.performance-lab.ru/" target="_blank" rel="noopener noreferrer">О компании</a>
          <a href="https://www.performance-lab.ru/software-testing" target="_blank" rel="noopener noreferrer">Услуги</a>
          <a href="https://www.performance-lab.ru/boomq" target="_blank" rel="noopener noreferrer">Продукты</a>
          <Link to="/installation">Установка и эксплуатация</Link>
        </nav>
      </div>

      <div className="email">
        <a href="mailto:datasan@pflb.ru">datasan@pflb.ru</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}></div>

      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href="https://www.performance-lab.ru/" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>О компании</a>
        <a href="https://www.performance-lab.ru/software-testing" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Услуги</a>
        <a href="https://www.performance-lab.ru/boomq" target="_blank" rel="noopener noreferrer" onClick={toggleMenu}>Продукты</a>
        <Link to="/installation" onClick={toggleMenu}>Установка и эксплуатация</Link>
      </div>
    </header>
  );
};

export default Header;