import React, { useEffect, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PhoneInputWithCountryProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

const PhoneInputWithCountry: React.FC<PhoneInputWithCountryProps> = ({ value, onChange }) => {
  const [defaultCountry, setDefaultCountry] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(data => {
        if (data?.country_code) {
          setDefaultCountry(data.country_code.toLowerCase());
        } else {
          setDefaultCountry('ru');
        }
      })
      .catch(() => {
        setDefaultCountry('ru');
      });
  }, []);

  if (!defaultCountry) return null;

  return (
    <PhoneInput
      defaultCountry={defaultCountry}
      value={value || ''}
      onChange={onChange}
      inputClassName="custom-phone-input-field"
      className="custom-phone-input-container"
      placeholder="999-999-9999"
    />
  );
};

export default PhoneInputWithCountry;