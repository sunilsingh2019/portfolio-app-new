import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PricingArea from './PricingArea';

const index = () => {
  return (
    <>
     <Header/>
     <Breadcrumb title="PRICE & PLAN" subtitle="PRICE & PLAN" /> 
     <PricingArea/>
     <BrandArea padd="pricing-brand" />
     <FooterTwo/>
    </>
  );
};

export default index;