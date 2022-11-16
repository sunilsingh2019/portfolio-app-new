import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import ProductAdditional from './ProductAdditional';
import ProductDetailsArea from './ProductDetailsArea';
import RelatedProduct from './RelatedProduct';

const index = () => {
  return (
    <>
     <Header/> 
     <Breadcrumb title="PRODUCT DETAILS" subtitle="Product Details" />
     <ProductDetailsArea/>
     <ProductAdditional/>
     <RelatedProduct/>
     <FooterTwo/>
    </>
  );
};

export default index;