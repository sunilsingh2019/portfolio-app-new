import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesList = () => {
  return (
    <>
      <div className="tpservices-area pt-140 pb-110">
        <div className="container">
          <div className="row">
            {
              servicesData.slice(8, 12).map(item => (
                <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="tpservices tpservices-tpbs mb-30">
                    <div className="tpservices__icon mb-20">
                      <i className={item.icon}></i>
                    </div>
                    <div className="tpservices__content">
                      <h4 className="tpservices__title mb-15">
                        <Link href={`/service-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h4>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                      <div className="tpservices__btn mt-30">
                        <Link href={`/service-details/${item.id}`}>
                          <a>More Details</a>
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