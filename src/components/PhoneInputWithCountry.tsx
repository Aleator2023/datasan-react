import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import type { Country } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import styles from '../styles/PhoneInputWithCountry.module.css';

interface PhoneInputWithCountryProps {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
}

const PhoneInputWithCountry: React.FC<PhoneInputWithCountryProps> = ({ value, onChange }) => {
  const [country, setCountry] = useState<Country>('RU');
  const [hasGeoUpdated, setHasGeoUpdated] = useState<boolean>(false);

  useEffect(() => {
    fetch('https://ipapi.co/json')
      .then(res => res.json())
      .then(data => {
        if (data?.country_code) {
          const detected = data.country_code.toUpperCase() as Country;
          if (!hasGeoUpdated) {
            setCountry(detected);
            setHasGeoUpdated(true);
          }
        }
      })
      .catch(() => {
        // оставим 'RU', если не удалось определить
        setCountry('RU');
      });
  }, [hasGeoUpdated]);

  return (
    <div className={styles.phoneInputWrapper}>
      <PhoneInput
        defaultCountry="RU"
        country={country}
        onCountryChange={(c) => setCountry(c as Country)}
        international
        countryCallingCodeEditable={false}
        value={value}
        onChange={onChange}
        placeholder="999-999-9999"
      />
    </div>
  );
};

export default PhoneInputWithCountry;