import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import JobDetailsArea from './JobDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="JOB DETAILS" subtitle="Job Details" />
      <JobDetailsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;