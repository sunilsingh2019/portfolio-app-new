import Link from 'next/link';
import servicesData from '../../data/servicesData';

const servicesItems = servicesData.slice(19, 22);

const EventArea = () => {
  return (
    <>
      <div className="tpevent-area grey-bg pb-100">
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
            <div className="col-xl-12">
              {
                servicesItems.map(item => {
                  return (
                    <div key={item.id} className="tpevent-item mb-40">
                      <div className="tpevent-image">
                        <img src={item.img} alt="event-img" />
                      </div>
                      <div className="tp-event-content">
                        <h4 className="tpevent-title mb-30">
                          <Link href={`/service-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        <h6 className="tpevent-sm-title mb-30">Programme  --- <span>{item.date}</span></h6>
                        <p>The United States and China relations will cast a pall over relations and the global. <br /> During the early months, major</p>
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

export default EventArea;