import dynamic from 'next/dynamic';
import HomeThreeMain from '../components/Home-three';
import SEO from '../components/seo';

const HomeThree = () => {
  return (
    <>
      <SEO pageTitle="Home Three" />
      <HomeThreeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeThree), { ssr: false });