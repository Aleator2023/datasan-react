import React, { useState } from 'react';
import type { FormEvent } from 'react';
import '../styles/ModalForm.css'; 
import PhoneInputWithCountry from './PhoneInputWithCountry';

interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState<string | undefined>(undefined);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: phone ?? '',
    };

    console.log('Отправка данных на тестовый email:', data);
    alert('Данные отправлены на тестовый email');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <h2 className="heading">Получите бесплатное пошаговое руководство по деперсонализации данных!</h2>
        <p className="description">
          Введите контактные данные и мы отправим руководство Вам на почту
        </p>
        <form onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="ФИО" required className="input-field" />
          <div className="input-field phone-wrapper">
  <PhoneInputWithCountry value={phone} onChange={setPhone} />
</div>
          <input name="email" type="email" placeholder="Email" required className="input-field" />
          <button type="submit" className="submit-button">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;