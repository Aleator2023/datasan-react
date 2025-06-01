import { useEffect } from 'react';
import FunctionalFeaturesBlock from '../components/FunctionalFeaturesBlock.tsx';
import InstallationHero from '../components/InstallationHero.tsx';
import TechnicalDocsBlock from '../components/TechnicalDocsBlock.tsx';
import InstallationPricingBlock from '../components/InstallationPricingBlock.tsx';
import InstallationSupportBlock from '../components/InstallationSupportBlock.tsx';

const Installation = () => {
  useEffect(() => {
    document.title = 'Установка и эксплуатация – DataSan';
  }, []);

  return (
    <>
      <InstallationHero />
      <FunctionalFeaturesBlock />
      <TechnicalDocsBlock />
      <InstallationPricingBlock />
      <InstallationSupportBlock />
    </>
  );
};

export default Installation;