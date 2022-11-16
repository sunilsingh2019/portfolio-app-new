import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import TestimonialFour from '../Home-four/TestimonialFour';
import AboutArea from './AboutArea';
import AboutCounter from './AboutCounter';
import CtaImages from './CtaImages';
import NeroxAwards from './NeroxAwards';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="ABOUT NEROX" subtitle=" About Us" />
      <AboutArea/>
      <AboutCounter/>
      <CtaImages/>
      <BrandArea brand="-2" about="about-brand" />
      <TestimonialFour/>
      <NeroxAwards/>
      <FooterTwo/>
    </>
  );
};

export default index;