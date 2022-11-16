import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PrivacyContent from './PrivacyContent';


const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="PRIVACY & POLICY" subtitle="PRIVACY & POLICY" />
      <PrivacyContent/>
      <FooterTwo/>
    </>
  );
};

export default index;