import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import CheckoutArea from './CheckoutArea';
import CouponArea from './CouponArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="CHECKOUT" subtitle="Checkout" />
      <CouponArea/>
      <CheckoutArea/>
      <FooterTwo/>
    </>
  );
};

export default index;