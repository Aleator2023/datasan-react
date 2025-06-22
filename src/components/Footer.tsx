import '../styles/Footer.css';
import logo from '../assets/logo_pflb.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-block">
          <img src={logo} alt="Перфоманс Лаб" className="footer-logo" />
        </div>

        <div className="footer-company-block">
          <div className="footer-company-name">
            ООО «Перфоманс Лаб Сервисез»
          </div>
          <div className="footer-company-info">
            ОГРН 1117746950155<br />
            ИНН 7730655651<br />
            Адрес: 426077, УР, г. Ижевск, ул. Пушкинская, д.165, офис 901.<br />
            <a href="mailto:datasan@pflb.ru">datasan@pflb.ru</a>
          </div>
        </div>

        <div className="footer-links-block">
          <div className="footer-link">
            <a href="#">Пользовательское соглашение</a>
          </div>
          <div className="footer-link">
            <a href="#">Политика защиты и обработки персональных данных</a>
          </div>
        </div>

        <div className="footer-copy">
          © 2011–2025 Перфоманс Лаб Сервисез<br />
          тестирование и обеспечение качества
        </div>
      </div>
    </footer>
  );
};

export default Footer;