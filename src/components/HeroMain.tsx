import '../styles/HeroMain.css';
import bg from '../assets/Vector 921.png';
import underline from '../assets/path.png';

const HeroMain = () => {
  return (
    <section className="hero-main position-relative overflow-hidden">
      <img src={bg} alt="background pattern" className="hero-main-bg position-absolute top-0 start-0 w-100 h-100 object-fit-cover" />
      <div className="container position-relative py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-semibold mb-4">
              <span className="highlight position-relative d-inline-block">
                DataSan
                <img src={underline} alt="underline" className="underline position-absolute start-0" />
              </span>
              <br />
              деперсонализация<br />
              базы данных
            </h1>
            <p className="lead mb-4">
              Обеспечьте безопасность данных: получите <strong>бесплатное</strong> пошаговое руководство по деперсонализации
            </p>
            <a href="#" className="btn btn-danger px-4 py-2">Получить руководство</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMain;