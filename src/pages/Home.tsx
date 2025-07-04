import { useEffect } from 'react';
import HeroMain from '../components/HeroMain';
import WhyNeeded from '../components/WhyNeeded';
import SolutionBlock from '../components/SolutionBlock';
import SuitableBlock from '../components/SuitableBlock';
import AdvantagesBlock from '../components/AdvantagesBlock';
import InstallationInfoBlock from '../components/InstallationInfoBlock';
import FeaturesBlock from '../components/FeaturesBlock';
import HelpSection from '../components/HelpSection';

const Home = () => {
  useEffect(() => {
    document.title = 'DataSan - Деперсонализация базы данных';
  }, []);
  return (
    <>
      <HeroMain />
      <WhyNeeded />
      <SolutionBlock />
      <SuitableBlock />
      <AdvantagesBlock />
      <InstallationInfoBlock />
      <FeaturesBlock />
      <HelpSection />
    </>
  );
};

export default Home;