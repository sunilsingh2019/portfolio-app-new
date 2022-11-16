import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioFour from '../common/Portfolio/PortfolioFour';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="05 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioFour padd="pt-115 pb-130"/>
      <FooterTwo/>
    </>
  );
};

export default index;