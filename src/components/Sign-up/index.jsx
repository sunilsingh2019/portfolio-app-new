import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import SignUpArea from './SignUpArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Sign Up" subtitle="Sign Up" />
      <SignUpArea/>
      <FooterTwo/>
    </>
  );
};

export default index;