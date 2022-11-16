import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesList = () => {
  return (
    <>
      <div className="tpservices-area pt-140 pb-110">
        <div className="container">
          <div className="row">
            {
              servicesData.slice(0, 8).map(item => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpservices tpservices-3 text-center mb-30">
                    <div className="tpservices__icon mb-30">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpservices__content">
                      <h4 className="tpservices__title mb-25">
                        <Link href={`/service-details/${item.id}`}>
                          <a>{item.title}</a>
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
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesList;