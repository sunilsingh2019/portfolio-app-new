import dynamic from 'next/dynamic';
import SEO from '../components/seo';
import ServicesFourMain from '../components/Services-four';

const ServicesFour = () => {
  return (
    <>
      <SEO pageTitle="Services Four" />
      <ServicesFourMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(ServicesFour), {ssr: false});