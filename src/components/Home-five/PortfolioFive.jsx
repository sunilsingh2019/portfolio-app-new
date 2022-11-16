import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

import portfolioData from '../../data/portfolioData';



const portfolioItems = portfolioData.slice(9, 19);

const uniquePortfolioItems = portfolioItems.filter(
  (arr, index, self) =>
    index === self.findIndex((t) => t.img === arr.img && t.State === arr.State)
);

const PortfolioFive = () => {
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
      <section className="tpproject-area-minimal pt-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <h2 className="tpds-title">My Latest <span>Project</span></h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-xl-12">
              <div className="tpproject__menu text-center filter-button-group mb-40">
                <button className={active === 'all' ? 'active' : ''} onClick={() => handleFilterItems('all')}>All
                  <span className="count-number">4</span></button>
                <button className={active === 'WEB DESIGN' ? 'active' : ''} onClick={() => handleFilterItems('WEB DESIGN')}> WEB DESIGN <span className="count-number">2</span> </button>
                <button className={active === 'WEBSITE DESIGN' ? 'active' : ''} onClick={() => handleFilterItems('WEBSITE DESIGN')}>WEBSITE DESIGN <span className="count-number">2</span> </button>
                <button className={active === 'APP DESIGN' ? 'active' : ''} onClick={() => handleFilterItems('APP DESIGN')}>APPS <span className="count-number">2</span> </button>
                <button className={active === 'LANDING PAGE' ? 'active' : ''} onClick={() => handleFilterItems('LANDING PAGE')}>LANDING PAGE <span className="count-number">2</span> </button>
                <button className={active === 'BRANDING DESIGN' ? 'active' : ''} onClick={() => handleFilterItems('BRANDING DESIGN')}>BRANDING DESIGN <span className="count-number">2</span> </button>
              </div>
            </div>
          </div>
          <div className="row grid mt-30">
            {
              portfolios.map(item => {
                return (
                  <motion.div animate={{ scale: 1 }}
                    initial={{ scale: 0.9 }}
                    exit={{ scale: 1 }}
                    transition={{ duration: 0.8 }} layout
                    key={item.id}
                    className="col-xl-6 col-lg-6 c1 c2 c5">
                    <div className="tpproject tpproject-5 mb-30">
                      <div className="tpproject__thumb">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <a>
                            <img src={item.img} alt="project" />
                          </a>
                        </Link>
                      </div>
                      <div className="tpproject__content text-center">
                        <span className="catagory mb-20">Web Design</span>
                        <h5 className="tpproject__title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h5>
                        <div className="tpproject__btn mt-20">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>
                              <i className="flaticon-right-arrow-1"></i>
                            </a>
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
              <div className="tpproject-button mt-20 text-center">
                <Link href='/portfolio-details'>
                  <a className="tp-solid-btn">View More Project</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioFive;