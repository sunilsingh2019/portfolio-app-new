import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import BlogDetailsArea from './BlogDetailsArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea/>
      <FooterTwo/>
    </>
  );
};

export default index;