import React from 'react';
import Footer from '../common/Footers/Footer';
import Header from '../common/Header';
import AboutThree from './AboutThree';
import BlogThree from './BlogThree';
import CtaOneThree from './Cta-1-Three';
import CtaTwoThree from './Cta-2-three';
import HeroThree from './HeroThree';
import PortfolioThree from './PortfolioThree';
import ServicesThree from './ServicesThree';
import TestimonialThree from './TestimonialThree';

const HomeThreeMain = () => {
	return (
		<div className='body-bg-3'>
		  <Header/>
			<HeroThree/>
			<AboutThree/>
			<ServicesThree/>
			<CtaOneThree/>
			<PortfolioThree/>
			<TestimonialThree/>
			<CtaTwoThree/>
			<BlogThree/>
			<Footer/>
		</div>
	);
};

export default HomeThreeMain;