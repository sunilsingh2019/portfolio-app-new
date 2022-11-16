import React from 'react';
import BrandArea from '../common/BrandArea';
import Footer from '../common/Footers/Footer';
import FooterThree from '../common/Footers/FooterThree';
import Header from '../common/Header';
import AboutFour from './AboutFour';
import BlogFour from './BlogFour';
import CtaFour from './CtaFour';
import HeroSliderFour from './HeroSliderFour';
import PortfolioFour from './PortfolioFour';
import ServicesFour from './ServicesFour';
import TestimonialFour from './TestimonialFour';
import VideoAreaFour from './VideoAreaFour';

const HomeFourMain = () => {
  return (
    <>
      <Header/>
      <HeroSliderFour/>
      <AboutFour/>
      <ServicesFour/>
      <VideoAreaFour/>
      <PortfolioFour/>
      <CtaFour/>
      <BrandArea hideTopBar={true} />
      <TestimonialFour/>
      <BlogFour/>
      <FooterThree/>
    </>
  );
};

export default HomeFourMain;