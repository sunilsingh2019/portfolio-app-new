import React from 'react';
import BrandArea from '../common/BrandArea';
import Footer from '../common/Footers/Footer';
import Header from '../common/Header';
import AboutArea from './AboutArea';
import BlogArea from './BlogArea';
import Cta from './Cta';
import HeroArea from './HeroArea';
import ProjectArea from './ProjectArea';
import ServicesArea from './ServicesArea';
import Testimonial from './Testimonial';

const HomeMain = ({data}) => {
  return (
    <>
      <Header data={data}/>
      <HeroArea/>
      <AboutArea/>
      <ServicesArea/>
      <ProjectArea/>
      <Testimonial/>
      <BrandArea/>
      <BlogArea/>
      <Cta/>
      <Footer  data={data}/>
    </>
  );
};

export default HomeMain;