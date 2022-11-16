import dynamic from 'next/dynamic';
import SEO from '../components/seo';
import TeamMain from '../components/Team';

const Team = () => {
  return (
    <>
      <SEO pageTitle="Team" />
      <TeamMain/>
    </>
  );
};

export default dynamic(()=> Promise.resolve(Team), {ssr: false});