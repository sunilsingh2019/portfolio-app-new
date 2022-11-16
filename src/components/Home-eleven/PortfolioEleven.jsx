import Link from 'next/link';
import portfolioData from "../../data/portfolioData";

const portfolioItems = portfolioData.slice(123, 129)

const PortfolioEleven = () => {
  return (
    <>
      <div className="tp-project-area box-plr-155">
        <div className="container-fluid">
          <div className="row">
            {
              portfolioItems.map(item => {
                return (
                  <div key={item.id} className="col-xl-6 col-lg-6">
                    <div className="tppg-project mb-35">
                      <div className="tppg-project__thumb">
                        <div className="tppg-project__thumb-image">
                        <Link href={`/portfolio-details/${item.id}`}>
                          <a>
                            <img src={item.img} alt="project" />
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
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioEleven;