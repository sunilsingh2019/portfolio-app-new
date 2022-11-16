import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioThree from '../common/Portfolio/PortfolioThree';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="06 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioThree padd="pt-140"/>
      <FooterTwo/>
    </>
  );
};

export default index;