import React, { useState } from 'react';
import '../styles/HeroMain.css';
import ModalForm from './ModalForm';

const HeroMain = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
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
            <button className="hero-main-button" onClick={() => setModalOpen(true)}>
              Получить руководство
            </button>
          </div>
        </div>
      </section>
      <ModalForm isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default HeroMain;