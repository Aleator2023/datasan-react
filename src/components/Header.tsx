import '../styles/header.css';
import logo from '../assets/logo_pflb.svg';
import { Link } from 'react-router-dom';

const Header = () => {
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
</header>
  );
};

export default Header;