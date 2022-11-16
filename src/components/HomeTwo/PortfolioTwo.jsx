import Link from 'next/link';
import portfolioData from '../../data/portfolioData';

const PortfolioTwo = () => {

  return (
    <>
      <section className="tpproject-area-2 pt-115 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title-2 mb-15">WORK GALLERY</span>
                <h2 className="tp-title">Recent Case Studies</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              portfolioData.slice(0, 6).map(item => {
                return (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tpproject-2 tpproject-3 mb-30">

                      <div className="tpproject-2-thumbnail" style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                      <div className="tpproject-2-text">
                        <span className="catagory mb-10">#WEB DESIGN</span>
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
                )
              })
            }

            <div className="col-xl-12">
              <div className="tpproject-btn mt-40 text-center">
                <Link href="/portfolio">
                  <a className="tp-solid-btn">View All Project</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioTwo;