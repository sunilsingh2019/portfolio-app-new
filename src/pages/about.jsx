import dynamic from 'next/dynamic';
import AboutMain from '../components/About'
import SEO from '../components/seo';

const About = () => {
  return (
    <>
      <SEO pageTitle="About" />
      <AboutMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(About), { ssr: false });