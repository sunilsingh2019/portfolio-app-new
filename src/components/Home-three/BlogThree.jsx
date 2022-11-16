import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation } from "swiper";
import blogData from '../../data/blogData';

const blogs = blogData.slice(0, 5)

const BlogThree = () => {
  return (
    <>
      <section className="blog__area pb-150 pt-140 grey-bg fix">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
              <h3 className="tpsec-title mb-70">Read Blog & Article</h3>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-2">
              <div className="blog-navigation-btn text-end">
                <button type="button" className="blog-slider-button-prev"><i className="fa-light fa-chevron-left"></i></button>
                <button type="button" className="blog-slider-button-next"><i className="fa-light fa-chevron-right"></i></button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="blog-slider-15 blog-slider-active-15 swiper-container">

                <Swiper className='swiper-wrapper' modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation={{ nextEl: '.blog-slider-button-next', prevEl: '.blog-slider-button-prev', }}
                  loop
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
                      slidesPerView: 2,
                    },
                  }}
                >
                  {blogs.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="blog-item-15 white-bg swiper-slide">
                          <div className="row">
                            <div className="col-xl-5">
                              <div className="blog-thumb-15">
                                <Link href={`/blog-details/${item.id}`}>
                                  <a>
                                    <img src={item.img3} alt="blog" />
                                  </a>
                                </Link>
                              </div>
                            </div>
                            <div className="col-xl-7">
                              <div className="blog-content-15">
                                <div className="blog-meta-15">
                                  <a href="#" className="blog-category">Business..</a>
                                  <span><a href="#">{item.date}</a></span>
                                </div>
                                <h3 className="blog-title-15">
                                  <Link href={`/blog-details/${item.id}`}>
                                    <a>{item.title}</a>
                                  </Link>
                                </h3>
                                <p>Methods and techniques to taking datamining for insights and years of 
                                  experience will.</p>

                                <Link href={`/blog-details/${item.id}`}>
                                  <a className="tpbs-btn-2">Read Details <i className="fa-solid fa-arrow-right"></i></a>
                                </Link>
                              </div>
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
      </section>
    </>
  );
};

export default BlogThree;