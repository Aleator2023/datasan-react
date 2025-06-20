import { useState } from 'react';
import ModalForm from './ModalForm';
import '../styles/SolutionBlock.css';

const SolutionBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="solution-section container rounded-4">
      <div className="row align-items-center gx-5">
        <div className="col-12 col-md-9">
          <h2 className="solution-title">
            Наше решение<br />
            позволяет обезличивать<br />
            данные в ключевых <strong>СУБД</strong>
          </h2>
          <p className="solution-text">
            Свяжитесь с нами, чтобы обсудить чем может быть полезен <br /> DataSan для вашей базы данных.
          </p>
          <button className="solution-btn" onClick={openModal}>
            Связаться с нами
          </button>
        </div>

        <div className="col-12 col-md-3 text-center mt-4 mt-md-0">
          {/* изображение или иллюстрация если нужно */}
        </div>
      </div>

      <ModalForm isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default SolutionBlock;