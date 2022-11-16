import Link from 'next/link';
import portfolioData from '../../data/portfolioData';

const portfolioItemsSm = portfolioData.slice(134, 138)
const portfolioItemBig = portfolioData.slice(138, 139)

const PortfolioThirteen = () => {
  return (
    <>
      <div className="tp-political-project grey-bg pb-95 box-plr-155">
        <div className="container-fluid">
          <div className="row">

            <div className="col-xl-8">
              <div className="row">
                {
                  portfolioItemsSm.map(item => {
                    return (
                      <div key={item.id} className="col-xl-6 col-md-6">
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
                            <span className="tppg-project-tag mb-10">LAW & COURT</span>
                            <h4 className="tppg-project-title">
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
            </div>

            <div className="col-xl-4">
              {
                portfolioItemBig.map(item => {
                  return (
                    <div key={item.id} className="tppg-project mb-35">
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
                        <span className="tppg-project-tag mb-10">LAW & COURT</span>
                        <h4 className="tppg-project-title">
                          <Link href={`/portfolio-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioThirteen;