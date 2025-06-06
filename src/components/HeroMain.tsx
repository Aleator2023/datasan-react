import '../styles/HeroMain.css';

const HeroMain = () => {
  return (
    <section className="hero-main">
      <div className="hero-bg-inner">
        <div className="hero-main-content">
          <h1 className="hero-main-title">
            <span className="underline-wrapper">
              DataSan
              <span className="underline-bg"></span>
            </span>
            <br />
            деперсонализация<br />
            базы данных
          </h1>
          <p className="hero-main-text">
            Обеспечьте безопасность данных: 
            <br /> получите <strong>бесплатное</strong> пошаговое 
            <br /> руководство по деперсонализации
          </p>
          <a href="#" className="hero-main-button">Получить руководство</a>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;