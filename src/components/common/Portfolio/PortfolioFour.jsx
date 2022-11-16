import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import portfolioData from '../../../data/portfolioData';


const portfolioItems = portfolioData.slice(91, 103);
const uniquePortfolioItems = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const PortfolioFour = ({ padd }) => {
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
      <div id="tp-creative" className={`tp-creative-lists-area ${padd ? padd : 'pt-50 pb-140'}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative__menu tp-creative__menu-grid tp-creative__menu-curve text-center filter-button-group mb-80">
                <button className={`tp-cr-btn ${active === 'all' && 'active'}`}
                  onClick={() => handleFilterItems('all')}>All</button>

                <button className={`tp-cr-btn ${active === 'WEDDING' && 'active'}`}
                  onClick={() => handleFilterItems('WEDDING')}>WEDDING</button>

                <button className={`tp-cr-btn ${active === 'BIRTHDAY PARTY' && 'active'}`}
                  onClick={() => handleFilterItems('BIRTHDAY PARTY')}>BIRTHDAY PARTY</button>

                <button className={`tp-cr-btn ${active === 'EVENTS' && 'active'}`}
                  onClick={() => handleFilterItems('EVENTS')}>EVENTS</button>

                <button className={`tp-cr-btn ${active === 'PRINT DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('PRINT DESIGN')}>PRINT DESIGN</button>

                <button className={`tp-cr-btn ${active === '3D DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('3D DESIGN')}>3D DESIGN</button>

                <button className={`tp-cr-btn ${active === 'PRODUCT DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('PRODUCT DESIGN')}>PRODUCT DESIGN</button>
              </div>
            </div>
          </div>
          <div className="row grid-masonry">
            {
              portfolios.map(item => {
                return (
                  <motion.div layout animate={{ scale: 1 }}
                    initial={{ scale: 0.9 }}
                    exit={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tppg-project mb-35">
                      <div className="tppg-project__thumb">
                        <div className="tppg-project__thumb-image">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>
                              <img src={item.img} alt="project-img" />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="tppg-project__content">
                        <span className="tppg-project-tag mb-10">WEDDING TOUCH</span>
                        <h4 className="tppg-project-title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            }

          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative-button text-center mt-35">
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

export default PortfolioFour;