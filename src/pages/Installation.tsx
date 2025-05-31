import FunctionalFeaturesBlock from '../components/FunctionalFeaturesBlock.tsx';
import InstallationHero from '../components/InstallationHero.tsx';
import TechnicalDocsBlock from '../components/TechnicalDocsBlock.tsx';

const Installation = () => {
  return (
    <>
      <InstallationHero />
      <FunctionalFeaturesBlock />
      <TechnicalDocsBlock />
    </>
  );
};

export default Installation;