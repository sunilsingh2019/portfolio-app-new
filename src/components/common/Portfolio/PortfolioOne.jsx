import React, { useState } from 'react';
import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import portfolioData from '../../../data/portfolioData';
import SinglePortfolio from './SinglePortfolio';

const portfolioItems = portfolioData.slice(19, 46);
const uniquePortfolioItems = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const PortfolioOne = () => {
  const [portfolios, setPortfolios] = useState(uniquePortfolioItems);
  const [active, setIsActive] = useState('all');
  // handleFilterItems
  const handleFilterItems = category => {
    setIsActive(category)
    if (category === 'all') {
      setPortfolios(uniquePortfolioItems)
    }
    else {
      const filterItems = portfolioItems.filter(item => item.category === category)
      setPortfolios(filterItems)
    }
  }
  return (
    <>
      <div className="tp-creative-lists-area tp-creative-padding pt-140 pb-140">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative__menu text-center filter-button-group mb-70">
                <button className={active === 'all' ? 'active' : ''}
                  onClick={() => handleFilterItems('all')}>All</button>

                <button className={active === 'WEB DESIGN' ? 'active' : ''}
                  onClick={() => handleFilterItems('WEB DESIGN')}>WEB DESIGN</button>

                <button className={active === 'BRANDING DESIGN' ? 'active' : ''}
                  onClick={() => handleFilterItems('BRANDING DESIGN')}>BRANDING DESIGN</button>

                <button className={active === 'MOTION DESIGN' ? 'active' : ''}
                  onClick={() => handleFilterItems('MOTION DESIGN')}>MOTION DESIGN</button>

                <button className={active === 'PRINT DESIGN' ? 'active' : ''}
                  onClick={() => handleFilterItems('PRINT DESIGN')}>PRINT DESIGN</button>

                <button className={active === '3D DESIGN' ? 'active' : ''}
                  onClick={() => handleFilterItems('3D DESIGN')}>3D DESIGN</button>

                <button className={active === 'PRODUCT DESIGN' ? 'active' : ''}
                  onClick={() => handleFilterItems('PRODUCT DESIGN')}>PRODUCT DESIGN</button>
              </div>
            </div>
          </div>

          <div className="">
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 900: 3 }} >
              <Masonry gutter="25px">
                {
                  portfolios.map((item, index) => {
                    return (
                      <SinglePortfolio key={item.id} item={item} index={index} portfolios={portfolios} />
                    )
                  })
                }
              </Masonry>
            </ResponsiveMasonry>
          </div>

          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative-button text-center mt-40">
                <Link href="/portfolio">
                  <a className="tp-solid-btn">Load More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioOne;