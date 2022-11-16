import dynamic from 'next/dynamic';
import ComingSoonMain from '../components/Coming-soon';
import SEO from '../components/seo';

const ComingSoon = () => {
  return (
    <>
      <SEO pageTitle="Coming Soon" />
      <ComingSoonMain />
    </>
  );
};

export default dynamic(()=> Promise.resolve(ComingSoon), {ssr: false});