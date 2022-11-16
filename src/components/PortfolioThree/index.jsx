import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioOne from '../common/Portfolio/PortfolioOne';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="03 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioOne/>
      <FooterTwo/>
    </>
  );
};

export default index;