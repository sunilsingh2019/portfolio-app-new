import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import Header from '../common/Header';
import TestimonialThree from '../Home-three/TestimonialThree';
import ServicesCta from './ServicesCta';
import ServicesList from './ServicesList';
import VideoArea from './VideoArea';
import FooterTwo from '../common/Footers/FooterTwo';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="03 - OUR SERVICES" subtitle="Services" />
      <ServicesList/>
      <VideoArea/>
      <TestimonialThree servicesTesti="tpfrn-testimonial-area-2 pt-130 pb-110" />
      <ServicesCta/>
      <BrandArea padd="services-padd"/>
      <FooterTwo/>
    </>
  );
};

export default index;