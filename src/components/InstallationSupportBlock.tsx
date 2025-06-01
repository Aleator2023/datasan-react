import '../styles/InstallationSupportBlock.css';
import vector9 from '../assets/vector9.png';

const InstallationSupportBlock = () => {
  return (
    <section className="installation-support-block">
      <img src={vector9} alt="фон" className="support-bg" />
      <div className="support-content">
        <h2>Возникли проблемы?</h2>
        <p>
          Обратитесь в службу техподдержки ООО «Перфоманс Лаб Сервисез» по адресу{' '}
          <a href="mailto:datasan@pflb.ru">datasan@pflb.ru</a>.
        </p>
        <a href="mailto:datasan@pflb.ru" className="btn btn-danger">Связаться с нами</a>
      </div>
    </section>
  );
};

export default InstallationSupportBlock;