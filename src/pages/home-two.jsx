import dynamic from 'next/dynamic';
import HomeTwoMain from '../components/HomeTwo';
import SEO from '../components/seo';

const HomeTwo = () => {
  return (
    <>
      <SEO pageTitle="Home Two" />
      <HomeTwoMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeTwo), { ssr: false });