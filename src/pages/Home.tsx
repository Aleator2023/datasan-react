import HeroMain from '../components/HeroMain';
import WhyNeeded from '../components/WhyNeeded';
import SolutionBlock from '../components/SolutionBlock';
import SuitableBlock from '../components/SuitableBlock';
import AdvantagesBlock from '../components/AdvantagesBlock';
import InstallationInfoBlock from '../components/InstallationInfoBlock';
import FeaturesBlock from '../components/FeaturesBlock';

const Home = () => {
  return (
    <>
      <HeroMain />
      <WhyNeeded />
      <SolutionBlock />
      <SuitableBlock />
      <AdvantagesBlock />
      <InstallationInfoBlock />
      <FeaturesBlock />
    </>
  );
};

export default Home;