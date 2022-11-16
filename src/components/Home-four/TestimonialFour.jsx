import React from 'react';
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const TestimonialFour = () => {
  const testimonialData = [
    {
      id: 1,
      img: 'assets/img/testimonial/3/ts-1.jpg',
      desc: <>“ I appreciate your amazing services and professional staff for all <br /> your hard work and creative thinking! It was fun, and I hope <br /> to work with you again soon “</>,
      name: 'Rasalina Willams'
    },
    {
      id: 2,
      img: 'assets/img/testimonial/3/ts-2.jpg',
      desc: <>“ A wonderful serenity has taken possession of my entire soul, like <br /> these sweet mornings of spring which I enjoy with my whole <br /> heart. I am alone, and feel the charm “</>,
      name: 'John Doe'
    },
    {
      id: 3,
      img: 'assets/img/testimonial/3/ts-3.jpg',
      desc: <>“ I throw myself down among the tall grass by the trickling stream; and, <br /> as I lie close to the earth, a thousand unknown plants <br /> are noticed by me: when I hear the buzz “</>,
      name: 'Mark Willams'
    },
    {
      id: 4,
      img: 'assets/img/testimonial/3/ts-4.jpg',
      desc: <>“ I appreciate your amazing services and professional staff for all <br /> your hard work and creative thinking! It was fun, and I hope <br /> to work with you again soon “</>,
      name: 'Rasalina Willams'
    },
  ]
  return (
    <>
      <div className="tpbs-testimonial-area tpbs-ts-overlay" style={{ backgroundImage: `url(assets/img/testimonial/3/testimonial-bg.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="tpbs-noise-bg" style={{ backgroundImage: `url(assets/img/testimonial/3/noise-bg.png)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="container">
          <div className="tpbs-ts-wrapper">
            <div className="tpbs-testimonial-slider tpbs-ts-slider-active">

              <Swiper
                modules={[Pagination]}
                className="pb-80"
                spaceBetween={25}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 6000 }}
              >
                {testimonialData.slice(0, 6).map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="tpbs-slider-item text-center">
                        <div className="tpbs-author-image mb-50">
                          <img src={item.img} alt="client-img" />
                        </div>
                        <div className="tpbs-quote mb-30">
                          <i className="fa-solid fa-quote-left"></i>
                        </div>
                        <div className="tpbs-review mb-40">
                          <p>{item.desc}</p>
                        </div>
                        <span className="tpbs-client-name"><a href="#">{item.name}</a></span>
                      </div>
                    </SwiperSlide>
                  )
                })
                }
              </Swiper>

            </div>
          </div>
        </div>
        <div className="tpbs__shape tpbs__shape-1">
          <img src="assets/img/shape/shape-1.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-4">
          <img src="assets/img/shape/shape-2.png" alt="shape-1" />
        </div>
        <div className="tpbs__shape tpbs__shape-3">
          <img src="assets/img/shape/shape-3.png" alt="shape-1" />
        </div>
      </div>
    </>
  );
};

export default TestimonialFour;