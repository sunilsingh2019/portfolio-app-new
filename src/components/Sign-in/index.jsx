import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import FooterTwo from '../common/Footers/FooterTwo';
import Header from '../common/Header';
import LoginArea from './LoginArea';

const index = () => {
  return (
    <>
      <Header/>
      <Breadcrumb title="Login" subtitle="Login" />
      <LoginArea/>
      <FooterTwo/>
    </>
  );
};

export default index;