import React from 'react';
import FooterThree from '../common/Footers/FooterThree';
import Header from '../common/Header';
import BioArea from './BioArea';
import BlogThirteen from './BlogThirteen';
import EventArea from './EventArea';
import HeroAreaThirteen from './HeroAreaThirteen';
import PortfolioThirteen from './PortfolioThirteen';
import ServicesThirteen from './ServicesThirteen';
import TestimonialThirteen from './TestimonialThirteen';

const index = () => {
  return (
    <>
      <Header/>
      <HeroAreaThirteen/>
      <BioArea/>
      <ServicesThirteen/>
      <PortfolioThirteen/>
      <EventArea/>
      <TestimonialThirteen/>
      <BlogThirteen/>
      <FooterThree/>
    </>
  );
};

export default index;