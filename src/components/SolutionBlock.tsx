import '../styles/SolutionBlock.css';

const SolutionBlock = () => {
  return (
    <section className="solution-section container rounded-4">
      <div className="row align-items-center gx-5">
        {/* Левый блок с текстом и кнопкой */}
        <div className="col-12 col-md-6">
          <h2 className="solution-title">
            Наше решение<br />
            позволяет обезличивать<br />
            данные в ключевых <strong>СУБД</strong>
          </h2>
          <p className="solution-text">
            Свяжитесь с нами, чтобы обсудить чем может быть полезен DataSan для вашей базы данных.
          </p>
          <button className="solution-btn">
            Связаться с нами
          </button>
        </div>

        {/* Правый блок с волной */}
        <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
        </div>
      </div>
    </section>
  );
};

export default SolutionBlock;