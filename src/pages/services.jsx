import dynamic from 'next/dynamic';
import SEO from '../components/seo';
import ServicesMain from '../components/Services';

const Services = () => {
  return (
    <>
      <SEO pageTitle="Services" />
      <ServicesMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(Services), {ssr: false});