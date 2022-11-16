import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesFive = () => {
  return (
    <>
      <section className="tpservices-area grey-bg pt-120 pb-135">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-section-title p-relative">
                <div className="separator">
                </div>
                <h3 className="tpds-title"> <span>Service</span> Area</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpservices-info">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc.</p>
              </div>
            </div>
          </div>
          <div className="row g-0 mt-70">
            {
              servicesData.slice(3, 7).map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-lg-3 col-md-6">
                    <div className="tpservices tp-mds-services tpservices-border mb-30">
                      <div className="tpservices__icon mb-30">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tpservices__content">
                        <h4 className="tpservices__title mb-25">
                          <Link href={`/service-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        <p>Methods and techniques to taking raw data - mining for insights and years of experience will.</p>
                        <div className="tpservices__btn mt-30">
                          <Link href={`/service-details/${item.id}`}>
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

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesFive;