import '../styles/TechnicalDocsBlock.css';
import downloadIcon from '../assets/vector10.svg';

const documents = [
  {
    title: 'Инструкция по установке экземпляра ПО',
    file: 'src/assets/downloads/DataSan. Инструкция по установке.pdf',
  },
  {
    title: 'Описание функциональных характеристик экземпляра ПО',
    file: 'src/assets/downloads/DataSan. Функциональные характеристики.pdf',
  },
  {
    title: 'Описание процессов, обеспечивающих поддержание жизненного цикла, в том числе устранение неисправностей и совершенствование, а также информацию о персонале, необходимом для обеспечения такой поддержки',
    file: 'src/assets/downloads/DataSan. Описание процессов, обеспечивающих поддержание жизненного цикла ПО.pdf',
  },
  {
    title: 'Описание технических средств хранения исходного текста и объектного кода программного обеспечения, а также технических средств компиляции исходного текста в объектный код программного обеспечения',
    file: 'src/assets/downloads/DataSan. Описание средств хранения исходного кода.pdf',
  },
  {
    title: 'Информация, необходимая для эксплуатации экземпляра ПО',
    file: 'src/assets/downloads/DataSan. Руководство по эксплуатации.pdf',
  },
  {
    title: 'Описание технических средств, необходимых для активации, выпуска, распространения, управления лицензионными ключами ПО',
    file: 'src/assets/downloads/DataSan. Описание технических средств, необходимых для управления лицензионными ключами ПО.pdf',
  },
  {
    title: 'Описание технической архитектуры ПО',
    file: 'src/assets/downloads/DataSan. Описание технической архитектуры программного обеспечения.pdf',
  },
];

const TechnicalDocsBlock = () => {
  return (
    <section className="tech-docs container">
      <h2 className="tech-docs-title">Техническая документация</h2>
      <div className="tech-docs-list">
        {documents.map((doc, idx) => (
          <a
            key={idx}
            href={doc.file}
            download
            className="tech-doc-item"
          >
            <span className="doc-title">{doc.title}</span>
            <img src={downloadIcon} alt="Скачать" className="download-icon" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default TechnicalDocsBlock;