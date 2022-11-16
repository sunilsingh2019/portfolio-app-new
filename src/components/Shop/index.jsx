import React from 'react';
import Header from '../common/Header';
import Breadcrumb from '../common/Breadcrumb';
import ShopArea from './ShopArea';
import FooterTwo from '../common/Footers/FooterTwo';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="SHOP" subtitle="Shop" />
      <ShopArea/>
      <FooterTwo/>
    </>
  );
};

export default index;