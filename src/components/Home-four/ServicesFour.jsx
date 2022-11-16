import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";
import servicesData from '../../data/servicesData';

const ServicesFour = () => {
  return (
    <>
      <div className="tpbs-services-area pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-10">
              <div className="tpbs-section-wrapper mb-30">
                <span className="tpbs-sub-title mb-15">Our Services</span>
                <h3 className="tpbs-title">Our Service is equipped <br /> <span>with exclusive features.</span></h3>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-2">
              <div className="tpbs-nav-wrapper p-relative">
                <div className="tpbss-arrow-display">
                  <button type="button" className="tp-swiper-prev swiper-arrow trfrn-arrow-style">
                    <i className="fa-light fa-chevron-left"></i></button>
                  <button type="button" className="tp-swiper-next swiper-arrow trfrn-arrow-style">
                    <i className="fa-light fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-25">
            <div className="col-xxl-12">
              <div className="tpbs-services__slider tpbs-services__slider-active">

                <Swiper modules={[Navigation]}
                  spaceBetween={25}
                  slidesPerView={1}
                  navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev', }}
                  autoplay={{ delay: 6000 }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 4,
                    },
                  }}
                >
                  {servicesData.slice(8, 13).map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpservices tpservices-tpbs">
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
                              <Link href={`/service-details/${item.id}`}>More Details</Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesFour;