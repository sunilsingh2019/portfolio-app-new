import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import BrandArea from '../../components/common/BrandArea';
import Breadcrumb from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/common/Footers/FooterTwo';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import ServiceContact from '../../components/Service-details/ServiceContact';

import servicesData from '../../data/servicesData';

const ServiceDetails = () => {
  const router = useRouter();
  const [serviceItem, setServiceItem] = useState({});
  const id = router.query.id;

  useEffect(() => {
    if (!id) {

    }
    else {
      setServiceItem(servicesData.find(item => item.id == id))
    }
  }, [id])

  return (
    <>
      <SEO pageTitle="Profile Details" />
      <Header />
      <Breadcrumb title="SERVICE DETAILS" subtitle="Service Details"/>

      <div className="services-details-area pt-140 pb-105">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src="/assets/img/services/services-d1.jpg" alt="services-sm-img" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img src="/assets/img/services/services-d2.jpg" alt="services-sm-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h4 className="services-d-title mb-25">{serviceItem.title}</h4>
              <p className="services-text mb-25">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate.</p>
              <p className="services-text mb-45">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Error sit voluptatem accusantium doloremque,</p>
              <h5 className="services-sm-title mb-25">4 Simple Steps</h5>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              </p>
              <div className="row mt-70">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">01</span>
                    </div>
                    <h6 className="step-title mt-40">Step One</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                    <div className="step-item-shape shape-1">
                      <img src="/assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">

                      <span className="step-number">02</span>
                    </div>
                    <h6 className="step-title mt-40">Step Two</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                    <div className="step-item-shape shape-1 d-none d-lg-block">
                      <img src="/assets/img/shape/arrow-shape-2.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">03</span>
                    </div>
                    <h6 className="step-title mt-40">Step Three</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                    <div className="step-item-shape shape-1">
                      <img src="/assets/img/shape/arrow-shape-1.png" alt="arrow-shape" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="step-item text-center mb-30">
                    <div className="step-number-wrapper">
                      <span className="step-number">04</span>
                    </div>
                    <h6 className="step-title mt-40">Step Four</h6>
                    <p>Sed quia non numquam eius <br /> modi tempora incidunt s</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ServiceContact */}
      <ServiceContact />
      {/*BrandArea  */}
      <BrandArea padd="services-padd" />
      {/*FooterTwo  */}
      <FooterTwo />

    </>
  );
};

export default dynamic(()=> Promise.resolve(ServiceDetails), {ssr: false});