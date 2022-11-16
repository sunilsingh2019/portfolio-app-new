import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import BlogArea from './BlogArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Blog" subtitle="Blog" />
      <BlogArea/>
      <FooterTwo/>
    </>
  );
};

export default index;