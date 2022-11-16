import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper";
import portfolioData from '../../data/portfolioData';

const PortfolioThree = () => {
  return (
    <>
      <section className="tpfrn-project-area pt-140 pb-115">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
              <h3 className="tpsec-title">Latest Works</h3>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-4">
              <div className="tpfrn-nav-wrapper p-relative">
                <div className="trfrn-arrow-display tpfrn-arrow-wrap">
                  <button type="button" className="tp-swiper-prev swiper-arrow trfrn-arrow-style">
                    <i className="fa-light fa-chevron-left"></i></button>
                  <button type="button" className="tp-swiper-next swiper-arrow trfrn-arrow-style">
                    <i className="fa-light fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-xxl-12">
              <div className="tpfrn-project__slider tpfrn-slide-active swiper-container">

                <Swiper navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev', }}
                  modules={[Navigation]}
                  spaceBetween={25}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 6000 }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    550: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    992: {
                      slidesPerView: 3,
                    },
                  }}
                >
                  {portfolioData.slice(0, 6).map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpfrn-project">
                          <div className="tpfrn-project__thumb mb-40">
                            <Link href={`/portfolio-details/${item.id}`}>
                              <a>
                                <img src={item.img3} alt="project-img" />
                              </a>
                            </Link>
                          </div>
                          <div className="tpfrn-project__content">
                            <span className="tpfrn-project-sub-title mb-10">#{item.category}</span>
                            <h5 className="tpfrn-project-title">
                              <Link href={`/portfolio-details/${item.id}`}>
                                <a>{item.title}</a>
                              </Link>
                            </h5>
                            <div className="tpservices__btn mt-20">
                              <Link href={`/portfolio-details/${item.id}`}>
                                <a><i className="flaticon-right-arrow-1"></i></a>
                              </Link>
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
          <div className="row">
            <div className="col-xxl-12">
              <div className="project-more-btn text-center mt-35">
                <Link href="/portfolio">
                  <a className="tp-solid-btn">View All Project</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioThree;