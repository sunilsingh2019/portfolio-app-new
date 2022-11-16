import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Testimonial = ({padd}) => {
  const testimonialData = [
    {
      id: 1,
      img: "assets/img/testimonial/4/ts-1.jpg",
      name: 'Rasalina Wilamsn'
    },
    {
      id: 2,
      img: "assets/img/testimonial/4/ts-2.jpg",
      name: 'Alexa Dimandy'
    },
    {
      id: 3,
      img: "assets/img/testimonial/4/ts-3.jpg",
      name: 'Angilina Marko'
    },
    {
      id: 4,
      img: "assets/img/testimonial/4/ts-4.jpg",
      name: 'Naim Ahmed'
    },
    {
      id: 5,
      img: "assets/img/testimonial/4/ts-2.jpg",
      name: 'Alexa Dimandy'
    },
  ]
  return (
    <>
      <section className={`tptestimonial-area grey-bg p-relative pt-110 pb-105 ${padd ? padd : ''}`}>
        <div className="tptestimonial__inner">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-section-title text-center">
                  <h3 className="tpds-title">Read Some <span>Review <br /> of My Work</span></h3>
                </div>
              </div>
            </div>
            <div className="row mt-60">
              <div className="col-xl-12">
                <div className="tpm-ts-slider tpm-ts-slider-active">

                  <Swiper modules={[Pagination]} className="pb-80"
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
                    {testimonialData.map(item => {
                      return (
                        <SwiperSlide key={item.id}>
                          <div className="tpm-ts-slider-item">
                            <div className="tptestimonial tpm-testimonial white-bg">
                              <div className="client__info mb-30">
                                <div className="client__image client__image-tpm mr-15">
                                  <img src={item.img} alt="author-img" />
                                  <span className="ts-quote"><i className="fas fa-quote-right"></i></span>
                                </div>
                                <div className="client__content">
                                  <h5 className="client__name mb-10">{item.name}</h5>
                                  <span className="client__ts-degination">/ CLIENT OF COMPANY</span>
                                </div>
                              </div>
                              <p>For your car we will do everything – advice, repairs and maintenance. We are the preferred choice by many car owners because our experience and knowledge is self-evident.For your car we will do everything – advice, repairs and maintenance. </p>
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
      </section>
    </>
  );
};

export default Testimonial;