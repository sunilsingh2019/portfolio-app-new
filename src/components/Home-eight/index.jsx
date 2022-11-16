import React from 'react';
import Footer from '../common/Footers/Footer';
import FooterFour from '../common/Footers/FooterFour';
import Header from '../common/Header';
import PortfolioThree from '../common/Portfolio/PortfolioThree';
import HeroAreaEight from './HeroAreaEight';

const index = () => {
  return (
    <>
      <Header headerEight={true} />
      <HeroAreaEight/>
      <PortfolioThree/>
      <FooterFour/>
    </>
  );
};

export default index;