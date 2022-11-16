import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import BlogGridArea from './BlogGridArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Blog Grid" subtitle="Blog" />
      <BlogGridArea/>
      <FooterTwo/>
    </>
  );
};

export default index;