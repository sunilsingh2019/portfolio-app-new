import React from 'react';
import SEO from '../components/seo';
import BlogMain from '../components/Blog';

const blog = () => {
  return (
    <>
      <SEO pageTitle="Blog" />
      <BlogMain/>
    </>
  );
};

export default blog;