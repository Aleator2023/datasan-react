import '../styles/FunctionalFeaturesBlock.css';

const features = [
  {
    number: '01',
    text: (
      <>
        Внедрение функций для обработки:
        <ul>
          <li>уникальных типов данных, например, ОГРН и ИНН;</li>
          <li>динамических типов данных, таких как транслитерация ФИО;</li>
        </ul>
      </>
    )
  },
  {
    number: '02',
    text: (
      <>
        Защита данных за счёт кодирования:
        <ul>
          <li>хеширование — основной метод кодирования, реализованный на основе MD5;</li>
          <li>мэппинг — метод кодирования, реализованный на основе сопоставления символов;</li>
        </ul>
      </>
    )
  },
  {
    number: '03',
    text: (
      <>Деперсонализация конфиденциальной информации и персональных данных в базах данных PostgreSQL с сохранением работоспособности системы и консистентности данных</>
    )
  },
  {
    number: '04',
    text: (
      <>Многопоточность, позволяющая использовать инструмент в многосерверных конфигурациях стенда для ускорения процесса деперсонализации</>
    )
  },
  {
    number: '05',
    text: (
      <>Внедрение функций обработки данных в общий процесс деперсонализации базы данных</>
    )
  },
  {
    number: '06',
    text: (
      <>Очистка вспомогательных объектов по окончании процесса деперсонализации данных</>
    )
  },
  {
    number: '07',
    text: (
      <>Встраивание деперсонализации базы данных в процессы разработки</>
    )
  }
];

const FunctionalFeaturesBlock = () => {
  return (
    <section className="functional-block container">
    <h2 className="section-title">
  <span className="underline-wrapper">
    Функциональные
    <span className="underline-bg"></span>
  </span>
  <br />
  возможности
</h2>

<div className="features-grid">
  {features.map((item, idx) => (
    <div key={idx} className="feature-box">
      <span className="feature-number">{item.number}</span>
      <div className="feature-text">{item.text}</div>
    </div>
  ))}
</div>
    </section>
  );
};

export default FunctionalFeaturesBlock;