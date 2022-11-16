import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioSix from '../common/Portfolio/PortfolioSix';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="04 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioSix padd="pt-140 pb-40" />
      <FooterTwo/>
    </>
  );
};

export default index;