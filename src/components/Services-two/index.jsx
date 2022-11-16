import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Cta from '../common/Cta';
import Header from '../common/Header';
import ServicesList from './ServicesList';
import VideoArea from './VideoArea';
import FooterTwo from '../common/Footers/FooterTwo';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="02 - OUR SERVICES" subtitle="Services" />
      <ServicesList/>
      <VideoArea/>
      <Cta padd="services-padd-cta"/>
      <BrandArea padd="services-brand"/>
      <FooterTwo/>
    </>
  );
};

export default index;