import '../styles/SuitableBlock.css';
import chartGraphic from '../assets/vector2.svg';

const SuitableBlock = () => {
  return (
    <section className="suitable-section container rounded-4">
      <div className="row align-items-start gx-5">
        <div className="col-12 col-md-7">
          <h2 className="suitable-title">
            В каких случаях вам<br />
            подойдёт{' '}
            <span className="underline-wrapper">
              DataSan
              <span className="underline-bg"></span>
            </span>
          </h2>
          <p className="suitable-text">
            Если ваша компания занимается разработкой IT решений для своего бизнеса,
            и вы не хотите допускать утечки данных реальных пользователей, то DataSan
            будет незаменимым инструментом вашей инфраструктуры. Вы сможете оперативно
            отрабатывать инциденты или активнее привлекать к разработке третьих лиц,
            не ставя под угрозу данные реальных клиентов.
          </p>
        </div>

        <div className="col-md-5 d-none d-md-block">
          <img src={chartGraphic} alt="График" className="suitable-chart" />
        </div>
      </div>
    </section>
  );
};

export default SuitableBlock;