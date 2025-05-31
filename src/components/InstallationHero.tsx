import { Link } from 'react-router-dom';
import '../styles/InstallationHero.css';
import bgImage from '../assets/Vector 921.png'; 

const InstallationHero = () => {
  return (
    <section className="installation-hero">
      <img src={bgImage} alt="background" className="installation-hero-bg" />
      <div className="installation-hero-content">
      <h1 className="installation-title">
  <span className="underline-wrapper">
    DataSan
    <span className="underline-bg"></span>
  </span>
  <br />
  установка<br />
  и эксплуатация
</h1>
        <Link to="/" className="installation-button">О продукте</Link>
      </div>
    </section>
  );
};

export default InstallationHero;