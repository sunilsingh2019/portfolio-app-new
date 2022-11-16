import dynamic from 'next/dynamic';
import FaqMain from '../components/Faq';
import SEO from '../components/seo';

const Faq = () => {
  return (
    <>
      <SEO pageTitle="Faq" />
      <FaqMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(Faq), { ssr: false });