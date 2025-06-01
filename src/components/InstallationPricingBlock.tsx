import '../styles/InstallationPricingBlock.css';
import bgImage from '../assets/vector4.svg';


const InstallationPricingBlock = () => {
    return (
      <section className="installation-pricing-block">
        <img src={bgImage} alt="Фон" className="pricing-bg" />
        <div className="pricing-content">
          <div className="pricing-text">
            <h2>Стоимость DataSan</h2>
            <p>
              Для получения информации о стоимости DataSan<br />
              напишите нам на почту <a href="mailto:datasan@pflb.ru">datasan@pflb.ru</a>
            </p>
          </div>
          <a href="mailto:datasan@pflb.ru" className="btn btn-danger">Связаться с нами</a>
        </div>
      </section>
    );
  };
  
  export default InstallationPricingBlock;