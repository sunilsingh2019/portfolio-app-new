import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import portfolioData from '../../../data/portfolioData';

const portfolioItems = portfolioData.slice(46, 69);
const uniquePortfolioItems = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);


const PortfolioTwo = () => {
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
      <div className="tp-creative-lists-area pt-40 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative__menu tp-creative__menu-grid text-center filter-button-group mb-70">
                <button className={`tp-cr-btn ${active === 'all' && 'active'}`}
                  onClick={() => handleFilterItems('all')}>All</button>

                <button className={`tp-cr-btn ${active === 'WEB DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('WEB DESIGN')}>WEB DESIGN</button>

                <button className={`tp-cr-btn ${active === 'WEBSITE DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('WEBSITE DESIGN')}>WEBSITE DESIGN</button>

                <button className={`tp-cr-btn ${active === 'APPS' && 'active'}`}
                  onClick={() => handleFilterItems('APPS')}>APPS</button>

                <button className={`tp-cr-btn ${active === 'LANDING PAGE' && 'active'}`}
                  onClick={() => handleFilterItems('LANDING PAGE')}>LANDING PAGE</button>

                <button className={`tp-cr-btn ${active === 'BRANDING DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('BRANDING DESIGN')}>BRANDING DESIGN</button>

                <button className={`tp-cr-btn ${active === '3D DESIGN' && 'active'}`}
                  onClick={() => handleFilterItems('3D DESIGN')}>3D DESIGN</button>

              </div>
            </div>
          </div>
          <div className="row">
            {
              portfolios.map(item => {
                return (
                  <motion.div layout animate={{ scale: 1 }}
                    initial={{ scale: 0.9 }}
                    exit={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    key={item.id}
                    className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tpbs-project mb-70">
                      <div className="tpbs-project__thumb tpbs-project__thumb-grid mb-30">
                        <div className="tpbs-project__thumb-image">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>
                              <img src={item.img} alt="project-img" />
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="tpbs-project__content">
                        <span className="tpbs-project__category mb-10">WEBSITE DESIGN</span>
                        <h4 className="tpbs-project__title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        <div className="tpbs-project-btn mt-20">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a className="tpbs-btn-2">More Details <i className="fa-solid fa-arrow-right"></i></a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })
            }

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

export default PortfolioTwo;