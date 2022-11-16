import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper";

const TestimonialThree = ({servicesTesti}) => {
  const testimonialData = [
    {
      id: 1,
      img: 'assets/img/testimonial/2/big/client-big-1.jpg',
      name: 'Rasalina De Willmson (CEO@Orix)'
    },
    {
      id: 2,
      img: 'assets/img/testimonial/2/big/client-big-4.jpg',
      name: 'William De Smith (CEO@Orix)'
    },
    {
      id: 3,
      img: 'assets/img/testimonial/2/big/client-big-3.jpg',
      name: 'Rasalina De Willmson (CEO@Orix)'
    },
    {
      id: 4,
      img: 'assets/img/testimonial/2/big/client-big-2.jpg',
      name: 'Sanji De Smith (CEO@Orix)'
    },
  ]
  return (
    <>
      <section className={servicesTesti ? servicesTesti : 'tpfrn-testimonial-area grey-bg pt-130 pb-125'}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10">
              <h3 className="tpsec-title">Trusted By Clients</h3>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-4 col-sm-2">
              <div className="tpfrn-nav-wrapper p-relative">
                <div className="trfrn-arrow-display2 tpfrn-arrow-wrap">
                  <button type="button" className="tp-swiper-prev swiper-arrow trfrn-arrow-style">
                    <i className="fa-light fa-chevron-left"></i></button>
                  <button type="button" className="tp-swiper-next swiper-arrow trfrn-arrow-style">
                    <i className="fa-light fa-chevron-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-xl-12">
              <div className="tpfrn-testimonial__slider tpfrn-ts-slider-active">

                <Swiper modules={[Navigation]}
                  spaceBetween={200}
                  slidesPerView={1}
                  navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev', }}
                  autoplay={{ delay: 6000 }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween:0,
                    },
                    550: {
                      slidesPerView: 1,
                      spaceBetween:10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween:10,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween:20
                    },
                    1200: {
                      slidesPerView: 2,
                      spaceBetween:70
                    },
                    1400: {
                      slidesPerView: 2,
                      spaceBetween:50
                    },
                    1600: {
                      slidesPerView: 2,
                      spaceBetween:200
                    },
                  }}
                >
                  {testimonialData.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpfrn-ts-item">
                          <div className="client">
                            <div className="client-image mb-20">
                              <img src={item.img} alt="ts-clinet" />
                              <span className="quote">
                                <i className="fas fa-quote-right"></i>
                              </span>
                            </div>
                            <span className="client-designation mb-20"><a href="#">{item.name}</a></span>
                            <p className="review-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital  divide with additional clickthroughs from DevOps. Nanotechnology immersion along</p>
                            <div className="social-icon">
                              <a href="#"><i className="fab fa-twitter"></i></a>
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

export default TestimonialThree;