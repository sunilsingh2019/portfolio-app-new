import dynamic from 'next/dynamic';
import SEO from '../../components/seo';
import ServiceDetailsMain from '../../components/Service-details';

const ServiceDetails = () => {
  return (
    <>
      <SEO pageTitle="Service Details" />
      <ServiceDetailsMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(ServiceDetails), {ssr: false});