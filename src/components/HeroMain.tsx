import '../styles/HeroMain.css';
import bg from '../assets/Vector 921.png';
import underline from '../assets/path.png';

const HeroMain = () => {
  return (
    <section className="hero-main">
      <img src={bg} alt="background pattern" className="hero-main-bg" />
      <div className="hero-main-content">
        <h1>
          <span className="highlight">
            DataSan
            <img src={underline} alt="underline" className="underline" />
          </span>
          <br />
          деперсонализация<br />
          базы данных
        </h1>
        <p>
          Обеспечьте безопасность данных: получите <strong>бесплатное</strong> пошаговое руководство по деперсонализации
        </p>
        <a href="#" className="hero-main-button">Получить руководство</a>
      </div>
    </section>
  );
};

export default HeroMain;