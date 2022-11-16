import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper";

const HeroSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: <>Introduce Our Creative <br /> Digital Agency.</>
    },
    {
      id: 2,
      title: <>Introduce Our Creative <br /> Digital Agency.</>
    },
    {
      id: 3,
      title: <>Introduce Our Creative <br /> Digital Agency.</>
    }
  ]
  return (
    <>
      <section className="tpagency-area p-relative box-plr-85">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="tpagency__slider tp-agency-slide-active p-relative">

                <Swiper navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev', }}
                  modules={[Navigation, EffectFade, Autoplay]}
                  spaceBetween={25}
                  loop={true}
                  effect="fade"
                  slidesPerView={1}
                  autoplay={{ delay: 6000 }}
                >
                  {sliderData.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpagency__slider-item tpagency__slider-height text-center d-flex align-items-center" style={{ backgroundImage: 'url(assets/img/slider/slider-img-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                          <div className="tp-agency-slider-inner">
                            <h2 className="tpagency-title">Introduce Our Creative <br /> Digital Agency.</h2>
                            <div className="tpagency-button mt-60">
                              <Link href="/services">
                                <a className="tp-white-btn">See Nerox Project</a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    )
                  })
                  }
                </Swiper>

                <div>
                  <button type="button" className="tp-swiper-prev swiper-arrow"><i className="far fa-long-arrow-left"></i></button>
                  <button type="button" className="tp-swiper-next swiper-arrow"><i className="far fa-long-arrow-right"></i></button>
                </div>

              </div>
              <div className="tpagency__down-btn">
                <a href="#tpservices-area"><i className="far fa-long-arrow-down"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSlider;