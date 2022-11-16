import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import portfolioData from '../../../data/portfolioData';


const portfolioItems = portfolioData.slice(103, 123);
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
      <div id="tp-creative" className="tp-creative-lists-area tp-creative-padding pt-200 pb-140">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-xl-12">
              <div className="tpproject__menu text-center filter-button-group mb-70">
                <button className={active === 'all' ? 'active' : ''} onClick={() => handleFilterItems('all')}>
                  All <span className="count-number">09</span></button>

                <button className={active === 'TRAVEL' ? 'active' : ''} onClick={() => handleFilterItems('TRAVEL')}>TRAVEL<span className="count-number">03</span> </button>

                <button className={active === 'PRODUCT' ? 'active' : ''} onClick={() => handleFilterItems('PRODUCT')}>PRODUCT<span className="count-number">03</span> </button>

                <button className={active === 'BRANDING' ? 'active' : ''} onClick={() => handleFilterItems('BRANDING')}>BRANDING <span className="count-number">03</span> </button>

                <button className={active === 'MINIMAL' ? 'active' : ''} onClick={() => handleFilterItems('MINIMAL')}>MINIMAL<span className="count-number">03</span> </button>

                <button className={active === 'ADVENTURE' ? 'active' : ''} onClick={() => handleFilterItems('ADVENTURE')}>ADVENTURE<span className="count-number">03</span> </button>

                <button className={active === 'WEDDING' ? 'active' : ''} onClick={() => handleFilterItems('WEDDING')}>WEDDING<span className="count-number">03</span> </button>

                <button className={active === 'EVENTS' ? 'active' : ''} onClick={() => handleFilterItems('EVENTS')}>EVENTS<span className="count-number">02</span> </button>
              </div>
            </div>
          </div>


          <div className="">
            <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 900: 3 }} >
              <Masonry gutter="25px">
                {
                  portfolios.map((item) => {
                    return (
                      <motion.div layout animate={{ scale: 1 }}
                        initial={{ scale: 0.9 }}
                        exit={{ scale: 1 }}
                        transition={{ duration: 0.8 }}
                        key={item.id}>
                        <div className="tppg-project mb-30">
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
                            <span className="tppg-project-tag mb-10">{item.category}</span>
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
              </Masonry>
            </ResponsiveMasonry>
          </div>



          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative-button text-center">
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

export default PortfolioFive;