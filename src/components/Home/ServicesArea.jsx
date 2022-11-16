import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesArea = () => {

  return (
    <>
      <section className="tpservices-area pt-115 pb-85 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title mb-15">#What DO you want</span>
                <h2 className="tp-title">My Service Area</h2>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              servicesData.slice(0, 4).map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tpservices tpservices-2 text-center mb-30">
                      <div className="tpservices__icon mb-30">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tpservices__content">
                        <h4 className="tpservices__title mb-25">
                          <Link href={`/service-details/${item.id}`}>
                            <a >{item.title}</a>
                          </Link>
                        </h4>
                        <div className="tpservices__btn mt-30">
                          <Link href={`/service-details/${item.id}`}>
                            <a>
                              <span></span>
                              <span></span>
                              <span></span>
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
          <div className="tpservices__shape-star tpservices__shape-star-1">
            <svg width="19" height="17" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
                fill="#1C99FE" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesArea;