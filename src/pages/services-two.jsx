import dynamic from 'next/dynamic';
import SEO from '../components/seo';
import ServicesTwoMain from '../components/Services-two';

const ServicesTwo = () => {
  return (
    <>
      <SEO pageTitle="Services Two" />
      <ServicesTwoMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(ServicesTwo), {ssr: false});