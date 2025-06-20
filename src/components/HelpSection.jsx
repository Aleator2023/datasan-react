import { useState } from 'react';
import ModalForm from './ModalForm';
import '../styles/HelpSection.css';
import vector7 from '../assets/vector7.svg';
import vector8 from '../assets/vector8.svg';

const HelpSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  return (
    <section className="help-section container-fluid py-5 px-3 px-md-5">
      <div className="help-title mb-4">
        <h2>Помощь Перфоманс Лаб<br />в проектах по деперсонализации</h2>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="help-box help-left position-relative">
            <img src={vector7} alt="Внедрение" className="help-icon" />
            <div className="help-inner-box p-4">
              <h2 className="mb-3">&nbsp;&nbsp;&nbsp;Внедрение</h2>
              <ul className="help-list">
                <li>Установим инструмент</li>
                <li>Обучим персонал</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="help-box help-right position-relative">
            <img src={vector8} alt="Поддержка" className="help-icon" />
            <div className="help-inner-box p-4">
              <h2 className="mb-3">&nbsp;&nbsp;&nbsp;Поддержка</h2>
              <ul className="help-list">
                <li>Поможем восстановить настройки в случае сбоев</li>
                <li>Поставляем обновление ПО бесплатно</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="help-footer d-flex flex-column flex-md-row align-items-start justify-content-between">
  <p className="help-footer-text mb-3 mb-md-0">
    Мы будем рады подробнее рассказать о нашем продукте и провести демонстрацию.
    Для этого оставьте заявку здесь или напишите напрямую на адрес{' '}
    <a href="mailto:datasan@pflb.ru">datasan@pflb.ru</a>.
  </p>

  <button className="help-footer-button mt-2 mt-md-0" onClick={onOpenModal}>
    Связаться с нами
  </button>
</div>

      <ModalForm isOpen={isModalOpen} onClose={onCloseModal} />
    </section>
  );
};

export default HelpSection;