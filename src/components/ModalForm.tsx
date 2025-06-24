import React, { useState } from 'react';
import '../styles/ModalForm.css';
import PhoneInputWithCountry from './PhoneInputWithCountry';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState<{ name?: boolean; email?: boolean; phone?: boolean }>({});
  const [submitError, setSubmitError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim();
    const validPhone = (phone?.length || 0) >= 6;

    const newErrors = {
      name: name === '',
      email: email === '',
      phone: !validPhone,
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (hasErrors) {
      setSubmitError(true);
      return;
    }

    setSubmitError(false);
    setIsSending(true);

    const formData = new FormData(form);
    formData.append('phone', phone ?? '');

    try {
      const response = await fetch('https://formsubmit.co/ajax/5176795@mail.ru', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        form.reset();
        setPhone(undefined);
        onClose();
      } else {
        alert('Ошибка: ' + result.message);
      }
    } catch (err) {
      console.error(err);
      alert('Ошибка сети. Попробуйте позже.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-close" onClick={onClose}>×</div>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="heading">Получите бесплатное пошаговое руководство по деперсонализации данных!</h2>
        <p className="description">
          Введите контактные данные и мы отправим руководство Вам на почту
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <input
            name="name"
            type="text"
            placeholder="ФИО"
            className={`input-field ${errors.name ? 'input-error' : ''}`}
          />
          {errors.name && <div className="error-message">Обязательное поле</div>}

          <div className={`phone-wrapper ${errors.phone ? 'input-error' : ''}`}>
            <PhoneInputWithCountry value={phone} onChange={setPhone} />
          </div>
          {errors.phone && <div className="error-message">Обязательное поле</div>}

          <input
            name="email"
            type="email"
            placeholder="Email"
            className={`input-field ${errors.email ? 'input-error' : ''}`}
          />
          {errors.email && <div className="error-message">Обязательное поле</div>}

          <input type="hidden" name="_captcha" value="false" />

          {submitError && (
            <div className="submit-error">Пожалуйста, заполните все обязательные поля</div>
          )}

          <button type="submit" className="submit-button" disabled={isSending}>
            {isSending ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;