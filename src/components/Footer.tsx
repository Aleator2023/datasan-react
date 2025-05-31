import '../styles/Footer.css';
import logo from '../assets/logo_pflb.svg';

const Footer = () => {
  return (
    <footer className="footer container-fluid py-5 px-4 px-md-5">
      <div className="row align-items-start g-4">
        {/* Логотип */}
        <div className="col-md-4 d-flex align-items-center">
          <img src={logo} alt="Перфоманс Лаб" className="footer-logo" />
        </div>

        {/* Центр с реквизитами */}
        <div className="col-md-4">
          <div className="footer-info">
            <strong>ООО «Перфоманс Лаб Сервисез»</strong><br />
            ОГРН 1117746950155<br />
            ИНН 7730655651<br />
            Адрес: 426077, УР, г. Ижевск, ул. Пушкинская, д.165, офис 901.<br />
            <a href="mailto:datasan@pflb.ru">datasan@pflb.ru</a>
          </div>
        </div>

        {/* Правые ссылки */}
        <div className="col-md-4 text-md-end">
          <div className="footer-links">
            <div><a href="#">Пользовательское соглашение</a></div>
            <div><a href="#">Политика защиты и обработки персональных данных</a></div>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-4 text-muted small">
        © 2011–2024 Перфоманс Лаб Сервисез<br />
        тестирование и обеспечение качества
      </div>
    </footer>
  );
};

export default Footer;