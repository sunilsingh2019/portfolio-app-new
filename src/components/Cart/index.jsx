import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import CartArea from './CartArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="CART" subtitle="Cart" />
      <CartArea/>
      <FooterTwo/>
    </>
  );
};

export default index;