import React from 'react';
import BrandArea from '../common/BrandArea';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import FaqArea from './FaqArea';
import FaqGetInTouch from './FaqGetInTouch';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="FAQ" subtitle="Ask Question" />
      <FaqArea/>
      <FaqGetInTouch/>
      <BrandArea padd="faq-brand"/>
      <FooterTwo/>
    </>
  );
};

export default index;