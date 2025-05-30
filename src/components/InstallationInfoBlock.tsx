import '../styles/InstallationInfoBlock.css';
import vector4 from '../assets/vector4.svg';
import { Link } from 'react-router-dom';

const InstallationInfoBlock = () => {
  return (
    <section className="install-section d-flex align-items-center">
      <img src={vector4} alt="Background art" className="install-bg" />
      <div className="container position-relative z-1 py-5">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="install-title mb-0">
              Подробнее об установке <br /> и эксплуатации
            </h2>
          </div>
          <div className="col-md-4 text-md-end mt-3 mt-md-0">
            <Link to="/installation" className="btn install-btn">
              Узнать подробнее
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationInfoBlock;