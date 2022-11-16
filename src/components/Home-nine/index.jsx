import React from 'react';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import PortfolioFour from '../common/Portfolio/PortfolioFour';
import CtaNine from './CtaNine';
import HeroAreaNine from './HeroAreaNine';

const index = () => {
  return (
    <>
      <Header homeNine={true} />
      <HeroAreaNine/>
      <CtaNine/>
      <PortfolioFour/>
      <FooterTwo/>
    </>
  );
};

export default index;