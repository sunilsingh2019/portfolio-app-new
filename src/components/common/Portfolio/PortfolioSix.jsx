import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import portfolioData from "../../../data/portfolioData";

const portfolioFirstItem = portfolioData.slice(129, 130);
const portfolioMasonaryItems = portfolioData.slice(130, 134)

const PortfolioSix = ({ padd }) => {
  return (
    <>
      <div className={`tp-furniture-project box-plr-155 ${padd ? padd : ''}`}>
        <div className="container-fluid">
          <div className="row">
            {
              portfolioFirstItem.map(item => {
                return (
                  <div key={item.id} className="col-lg-12">
                    <div className="tpbs-project mb-90">
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
                        <span className="tpbs-project__category mb-10">{item.category}</span>
                        <h4 className="tpbs-project__title-2">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>

          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2 }} >
            <Masonry gutter="25px">
              {
                portfolioMasonaryItems.map((item, index) => {
                  return (
                    <div key={item.id}>
                      <div className="tpbs-project mb-90">
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
                          <span className="tpbs-project__category mb-10">{item.category}</span>
                          <h4 className="tpbs-project__title-2">
                            <Link href={`/portfolio-details/${item.id}`}>
                              <a>{item.title}</a>
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </Masonry>
          </ResponsiveMasonry>

        </div>
      </div>
    </>
  );
};

export default PortfolioSix;