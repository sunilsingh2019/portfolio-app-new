import Link from 'next/link';
import { Pagination, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


const HeroSliderFour = () => {
  const sliderData = [
    {
      id: 1,
      bg: 'assets/img/slider/slider-2-1.jpg',
      title: 'WE PROVIDE BEST SERVICE WITH EXCLUSIVE FEATURES',
      subtitle: <>Business <span>Growth</span></>
    },
    {
      id: 2,
      bg: 'assets/img/slider/slider-2-1.jpg',
      title: 'WE PROVIDE BEST SERVICE WITH EXCLUSIVE METARIALS',
      subtitle: <>Business <span>Health</span></>
    },
    {
      id: 3,
      bg: 'assets/img/slider/slider-2-1.jpg',
      title: 'WE PROVIDE BEST SERVICE WITH EXCLUSIVE SUPPORT',
      subtitle: <>Business <span>Strong</span></>
    },
  ]
  return (
    <>
      <div className="tpbs-area p-relative">
        <div className="tpbs-slider tpbs-slider-active">

          <Swiper
            modules={[Pagination, EffectFade]}
            spaceBetween={25}
            slidesPerView={1}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000 }}
          >
            {sliderData.slice(0, 6).map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="tpbs-slider__item tpbs-slider__height text-center" style={{ backgroundImage: `url(${item.bg})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className="dot-bg-iamge" data-background="assets/img/bg/dot-img.png"></div>
                    <div className="tpbs-slider__item-content p-relative">
                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <span className="tp-sub-title-2 mb-30"><a>{item.title}</a></span>
                            <h3 className="tpbs-slider__item-title">{item.subtitle}</h3>
                            <div className="tpbs-btn mt-40">
                              <Link href="/services">
                                <a className="tp-solid-btn">Free Consultation</a>
                              </Link>
                            </div>
                          </div>
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
        <div className="tpbs__shape tpbs__shape-1">
          <img src="assets/img/shape/shape-1.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-2">
          <img src="assets/img/shape/shape-2.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="assets/img/shape/shape-3.png" alt="shape-1" />
        </div>
      </div>
    </>
  );
};

export default HeroSliderFour;