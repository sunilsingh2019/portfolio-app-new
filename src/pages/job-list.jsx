import dynamic from 'next/dynamic';
import JobListMain from '../components/JobList';
import SEO from '../components/seo';

const JobList = () => {
  return (
    <>
      <SEO pageTitle="Job List" />
      <JobListMain />
    </>
  );
};

export default dynamic(()=> Promise.resolve(JobList), {ssr: false});