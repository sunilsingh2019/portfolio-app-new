import dynamic from 'next/dynamic';
import HomeSixMain from '../components/Home-six';
import SEO from '../components/seo';

const HomeSix = () => {
  return (
    <>
      <SEO pageTitle="Home Six" />
      <HomeSixMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeSix), { ssr: false });