import dynamic from 'next/dynamic';
import HomeSevenMain from '../components/Home-seven';
import SEO from '../components/seo';

const HomeSeven = () => {
  return (
    <>
      <SEO pageTitle="Home Seven" />
      <HomeSevenMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(HomeSeven), { ssr: false });