import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PrivacyContent from './PrivacyContent';
import SearchArea from './SearchArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="HELP CENTER" subtitle="Help Center" />
      <SearchArea/>
      <PrivacyContent/>
      <FooterTwo/>
    </>
  );
};

export default index;