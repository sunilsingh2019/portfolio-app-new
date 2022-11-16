import React from 'react';
import SEO from '../components/seo';
import CartMain from '../components/Cart';

const cart = () => {
  return (
    <>
      <SEO pageTitle="Cart" />
      <CartMain/>
    </>
  );
};

export default cart;