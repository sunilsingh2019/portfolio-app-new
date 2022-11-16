import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../common/Cta';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ServicesList from './ServicesList';
import ServicesPricing from './ServicesPricing';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="04 - OUR SERVICES" subtitle="Services" />
      <ServicesList/>
      <ServicesPricing/>
      <Cta padd="services-padd-cta"/>
      <BrandArea padd="services-brand"/>
      <FooterTwo/>
    </>
  );
};

export default index;