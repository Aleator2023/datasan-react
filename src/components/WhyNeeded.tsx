import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WhyNeeded.css';

const WhyNeeded = () => {
  return (
    <section className="why-section container">
      <div className="row gx-4 align-items-start">
        {/* Левая часть: заголовок + картинка */}
        <div className="col-12 col-xl-6 order-1 order-xl-1">
          <h2 className="why-title">
            <span className="underline-wrapper">
              Для чего
              <span className="underline-bg"></span>
            </span>{' '}
            нужна  <br />деперсонализация
          </h2>

          <div className="why-image d-none d-xl-block mt-4">
            <img src="/src/assets/picture_1.png" alt="Схема деперсонализации" className="img-fluid border-0" />
          </div>
        </div>

        {/* Правая часть — текст */}
        <div className="col-12 col-xl-6 order-2 order-xl-2">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-12">
              <p>
                В целях разработки и тестирования программного обеспечения инженерам необходим доступ к базе данных —
                но это приводит к риску утечки персональных данных. Простое удаление или замещение не позволяет решить
                эту проблему, поскольку существенно ограничивает возможности инженеров: данные должны сохранять связи
                внутри базы.
              </p>
            </div>
            <div className="col-12 col-md-6 col-xl-12">
              <p>
                Наше решение позволяет заменить реальные персональные данные на искусственные, тем самым обеспечив инженеров
                полностью функциональной базой и в то же время делая их передачу третьим лицам нецелесообразной.
              </p>
            </div>
          </div>
        </div>

        {/* Картинка для md и меньше */}
        <div className="col-12 d-block d-xl-none order-3 mt-4">
          <div className="why-image">
            <img src="/src/assets/picture_1.png" alt="Схема деперсонализации" className="img-fluid border-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNeeded;