import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import WishListArea from './WishListArea';

const index = () => {
  return (
    <>
      <Header />
      <Breadcrumb title="WISHLIST" subtitle="Wishlist" />
      <WishListArea />
      <FooterTwo />
    </>
  );
};

export default index;