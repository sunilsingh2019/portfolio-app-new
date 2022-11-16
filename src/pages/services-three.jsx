import dynamic from 'next/dynamic';
import SEO from '../components/seo';
import ServicesThreeMain from '../components/Services-three';

const ServicesThree = () => {
  return (
    <>
     <SEO pageTitle="Services Three" />
     <ServicesThreeMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(ServicesThree), {ssr: false});