import '../styles/FeaturesBlock.css';
import background from '../assets/vector1.png';
import jenkins from '../assets/vector5.svg';
import gitlab from '../assets/vector6.svg';

const FeaturesBlock = () => {
  return (
    <section className="extra-section position-relative rounded-4 text-white overflow-hidden">
      <img src={background} alt="background" className="extra-bg" />

      <div className="container py-5 position-relative z-1">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="extra-title">Дополнительные возможности</h2>
            <p className="extra-subtext">
              Мы можем легко интегрировать наше решение<br />
              в существующие производственные процессы.
            </p>
          </div>

          <div className="col-lg-6 d-flex flex-column align-items-end gap-3">
            <div className="integration-box bg-light-blue">
              <img src={jenkins} alt="Jenkins" className="integration-img" />
            </div>
            <div className="integration-box bg-light-pink">
              <img src={gitlab} alt="GitLab" className="integration-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBlock;