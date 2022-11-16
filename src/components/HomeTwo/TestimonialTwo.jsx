import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const TestimonialTwo = () => {
  const testimonialData = [
    {
      id: 1,
      desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along',
      img: 'assets/img/testimonial/2/big/client-big-1.jpg',
      info: 'Rasalina De Willmson (CEO@Orix)'
    },
    {
      id: 2,
      desc: 'Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along.   Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.',
      img: 'assets/img/testimonial/2/big/client-big-2.jpg',
      info: 'Naim Ahmed (CEO@Gazi)'
    },
    {
      id: 3,
      desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along',
      img: 'assets/img/testimonial/2/big/client-big-3.jpg',
      info: 'Angel Macron (CEO@Pop)'
    },
  ]
  return (
    <>
      <section className="tpagency-ts-area p-relative box-plr-85">
        <div className="tpagency-wrapper" style={{backgroundImage:'url(assets/img/testimonial/ts-bg.png)', backgroundSize:'cover',backgroundPosition:'center'}}>
          <div className="container">
            <div className="tpagency-inner">
              <div className="row">
                <div className="col-xl-12">
                  <div className="tp-section-title text-center mb-60">
                    <span className="tp-sub-title-2 mb-20">CLIENT TESTIMONIAL</span>
                    <h2 className="tp-title tp-title-df">What our Customer Say</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-xxl-8 col-xl-8 col-lg-10">
                  <div className="tpagency-ts__slider tp-agency-ts-active p-relative">

                    <Swiper navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev', }}
                      modules={[Navigation, Autoplay]}
                      spaceBetween={25}
                      loop={true}
                      slidesPerView={1}
                      autoplay={{ delay: 6000 }}
                    >
                      {testimonialData.map(item => {
                        return (
                          <SwiperSlide key={item.id}>
                            <div className="tpagency-ts__slider-item text-center">
                              <p>{item.desc}</p>
                              <div className="client__ienfo text-center mt-65">
                                <div className="client__image mb-20">
                                  <img src={item.img} alt="ts-clinet" />
                                  <span className="quote">
                                    <i className="fas fa-quote-right"></i>
                                  </span>
                                </div>
                                <span className="designation-2"><a href="#">{item.info}</a></span>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      })
                      }
                    </Swiper>

                    <div>
                      <button type="button" className="tp-swiper-prev swiper-arrow">
                        <i className="far fa-long-arrow-left"></i></button>
                      <button type="button" className="tp-swiper-next swiper-arrow">
                        <i className="far fa-long-arrow-right"></i></button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialTwo;