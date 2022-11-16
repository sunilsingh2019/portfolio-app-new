import dynamic from 'next/dynamic';
import AboutMeMain from '../components/AboutMe';
import SEO from '../components/seo';

const AboutMe = () => {
  return (
    <>
     <SEO pageTitle="About Me"  />
     <AboutMeMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(AboutMe), {ssr: false});