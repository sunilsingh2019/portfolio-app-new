import Link from 'next/link';
import servicesData from '../../data/servicesData';

const servicesItems = servicesData.slice(13, 19)

const ServicesThirteen = () => {
  return (
    <>
      <div className="tppo-services-area grey-bg pt-135 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center mb-30">
                <span className="tpbs-sub-title mb-15">My Services</span>
                <h3 className="tpbs-title">Policy <span> positions</span></h3>
              </div>
            </div>
          </div>
          <div className="row mt-35">
            {
              servicesItems.map(item => {
                return (
                  <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tppo-services-item text-center mb-30">
                      <div className="tppo-services-icon mb-50">
                        <i className={item.icon}></i>
                      </div>
                      <div className="tppo-services-shape tppo-services-shape-1">
                        <img src="assets/img/icon/po-ser-shape-1.png" alt="shape" />
                      </div>
                      <div className="tppo-services-shape tppo-services-shape-2">
                        <img src="assets/img/icon/po-ser-shape-2.png" alt="shape" />
                      </div>
                      <h5 className="tppo-services-title">
                        <Link href={`/service-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h5>
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

export default ServicesThirteen;