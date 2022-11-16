import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import TeamArea from './TeamArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="OUR TEAM" subtitle="Our Team" />
      <TeamArea/>
      <BrandArea padd="team-brand"/>
      <FooterTwo/>
    </>
  );
};

export default index;