import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioTwoArea from './PortfolioTwoArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="02 - PORTFOLIO" subtitle="Portfolio" />
      <PortfolioTwoArea/>
      <FooterTwo/>
    </>
  );
};

export default index;