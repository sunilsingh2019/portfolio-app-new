import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioDetailsArea from './PortfolioDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="PROJECT DETAILS" subtitle="PROJECT DETAILS" />
      <PortfolioDetailsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;