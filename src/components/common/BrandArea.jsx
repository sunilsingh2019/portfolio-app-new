import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const BrandArea = ({hideTopBar = false,homeFiveBrand,brand,about,padd}) => {
  const brandData = [
    {
      id: 1,
      img:'/assets/img/brand/2/brand-1.png'
    },
    {
      id: 2,
      img:'/assets/img/brand/2/brand-2.png'
    },
    {
      id: 3,
      img:'/assets/img/brand/2/brand-3.png'
    },
    {
      id: 4,
      img:'/assets/img/brand/2/brand-4.png'
    },
    {
      id: 5,
      img:'/assets/img/brand/2/brand-5.png'
    },
    {
      id: 6,
      img:'/assets/img/brand/2/brand-1.png'
    },
    {
      id: 7,
      img:'/assets/img/brand/2/brand-2.png'
    },
  ]
  return (
    <>
      <section id="brand" className={`tpbrand-area${brand ? brand : ''} 
      ${hideTopBar ? 'pt-135 pb-115' : `pt-115 pb-40 ${homeFiveBrand && 'pb-120'}`} ${about && about} ${padd && padd}`}>
        <div className="container">
          <div className="row">
            {!hideTopBar && <div className="col-xl-12">
              <div className="tp-section-title text-center mb-50">
                <span className="tp-sub-title">#Top Integration</span>
              </div>
            </div>}
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbrand__slider-active">

                <Swiper modules={[Autoplay]}
                  spaceBetween={25}
                  slidesPerView={1}
                  autoplay={{ delay: 4000 }}
                  loop={true}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    550: {
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
                    1400: {
                      slidesPerView: 5,
                    },
                  }}
                >
                  {brandData.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpbrand__slider-item">
                          <a href="#"><img src={item.img} alt="brand" /></a>
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

export default BrandArea;