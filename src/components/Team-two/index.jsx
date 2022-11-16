import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import TeamTwoArea from './TeamTwoArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="02 - OUR TEAM" subtitle="Our Team" />
      <TeamTwoArea/>
      <FooterTwo/>
    </>
  );
};

export default index;