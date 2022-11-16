import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import projectSliderData from '../../data/portfolioData';

const projectData = projectSliderData.slice(0, 5)

const ProjectArea = () => {

  return (
    <>
      <section className="tpproject-area pb-110 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title mb-15">#Complete Project</span>
                <h2 className="tp-title">My Recent Works</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-test-main-wrapper tp-arrow-style tp-dot-style p-relative">
                <div className="tp-slide-active pt-50">
                  <Swiper navigation={{ nextEl: '.tp-slick-next', prevEl: '.tp-slick-prev', }}
                    modules={[Navigation, Pagination]} className="pb-80"
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
                    {projectData.map(item => {
                      return (
                        <SwiperSlide key={item.id}>
                          <div className="tpproject-2">
                            <div className="tpproject-2-thumbnail">
                              <img src={item.img} alt="" />
                            </div>
                            <div className="tpproject-2-text">
                              <span className="catagory mb-10">#{item.category}</span>
                              <h5 className="tpproject-2-title">
                                <Link href={`/portfolio-details/${item.id}`}>
                                  <a>{item.title}</a>
                                </Link>
                              </h5>
                              <div className="tpproject-btn mt-25 mb-10">
                                <Link href={`/portfolio-details/${item.id}`}>
                                  <a>
                                    <i className="flaticon-right-arrow-1"></i>
                                  </a>
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

                <div>
                  <button type="button" className="tp-slick-prev swiper-arrow"><i className="far fa-long-arrow-left"></i></button>
                  <button type="button" className="tp-slick-next swiper-arrow"><i className="far fa-long-arrow-right"></i></button>
                </div>

              </div>
            </div>
          </div>
          <div className="tpproject__shape-star tpproject__shape-star-1">
            <svg width="19" height="17" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 0L17.1432 9.67376H27.3148L19.0858 15.6525L22.229 25.3262L14 19.3475L5.77101 25.3262L8.9142 15.6525L0.685208 9.67376H10.8568L14 0Z"
                fill="#FFCC41" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectArea;