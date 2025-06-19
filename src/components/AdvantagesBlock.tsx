import '../styles/AdvantagesBlock.css';
import performanceImg from '../assets/vector3.png';

const AdvantagesBlock = () => {
  return (
    <section className="advantages-section container">
      <h2 className="advantages-title">Преимущества нашего решения</h2>
      <div className="row gy-4 gx-4">

        <div className="col-12 col-md-6 col-lg-3">
          <div className="adv-card violet">
            <div className="adv-number">01</div>
            <div className="adv-text">
              <p>Не требует дополнительной инфраструктуры</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="adv-card yellow">
            <div className="adv-number">02</div>
            <div className="adv-text">
              <p>Настраиваемые методы маскирования</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="adv-card blue">
            <div className="adv-number">03</div>
            <div className="adv-text">
              <p>Позволяет обезличивать интеграционные тестовые среды</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="adv-card light">
            <div className="adv-number">04</div>
            <div className="adv-text">
              <p>ИНН, номера счетов и другие поля сохраняют контрольные суммы</p>
            </div>
          </div>
        </div>

        <div className="col-12">
  <div className="adv-card adv-card-performance pink d-flex flex-column flex-lg-row align-items-start justify-content-between">
    <div className="performance-text d-flex flex-column justify-content-between">
      <div className="adv-number">05</div>
      <p><strong>DataSan</strong> обезличивает<br />1 000 000 строк <br />менее чем за минуту</p>
    </div>
    <div className="adv-image mt-4 mt-lg-0">
      <img src={performanceImg} alt="Производительность DataSan" />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default AdvantagesBlock;