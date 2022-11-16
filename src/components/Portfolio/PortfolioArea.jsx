import React from 'react';
import Link from 'next/link';
import portfolioData from '../../data/portfolioData';
import Pagination from '../common/Pagination';

const portfolioItems = portfolioData.slice(0, 9)

const PortfolioArea = () => {
  return (
    <>
      <div className="project-list-area pt-140 pb-130">
        <div className="container">
          <div className="row">
            {
              portfolioItems.map(item => (
                <div key={item.id} className="col-xl-4">
                  <div className="tpproject-2 mb-30">
                    <div className="tpproject-2-thumbnail" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                    <div className="tpproject-2-text">
                      <span className="catagory mb-10">{item.category}</span>
                      <h5 className="tpproject-2-title">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h5>
                      <div className="tpproject-btn mt-25 mb-10">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <a>
                            <i className="flaticon-right-arrow-1"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          {/* pagination start */}
          <Pagination />
          {/* pagination end */}
        </div>
      </div>
    </>
  );
};

export default PortfolioArea;