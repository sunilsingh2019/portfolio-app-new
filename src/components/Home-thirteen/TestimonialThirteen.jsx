import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const TestimonialThirteen = () => {
  const testimonialData = [
    {
      id: 1,
      review: '“ I appreciate your amazing services and professional staff for all your hard work and creative thinking! It was fun, and I hope to work with you again soon “',
      name:'Rasalina De Willmson (CEO@Orix)'
    },
    {
      id: 2,
      review: '“ It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that “',
      name:'Naim Ahmed(CEO@Gazi)'
    },
    {
      id: 3,
      review: "“ If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of textprinting and typesetting industry “",
      name:'Angilna Macron(CEO@Orix)'
    },
    {
      id: 4,
      review: "“ The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here established “",
      name:'Josef Anderson (CEO@Orix)'
    },
  ]
  return (
    <>
      <div className="tppo-testimonial-area grey-bg box-plr-155">
        <div className="container-fluid">
          <div className="tppo-testimonial-wrapper white-bg pt-135 pb-135">
            <div className="row">
              <div className="col-xl-12">
                <div className="tpbs-section-wrapper text-center mb-30">
                  <span className="tpbs-sub-title mb-15">Testimonial</span>
                  <h3 className="tpbs-title">Do Good <span> For Others</span></h3>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="tppotestimonial-slider tppotestimonial-slider-active p-relative">

                  <Swiper modules={[Navigation]}
                    spaceBetween={25}
                    slidesPerView={1}
                    navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev', }}
                    autoplay={{ delay: 6000 }}
                  >
                    {testimonialData.map(item => {
                      return (
                        <SwiperSlide key={item.id}>
                          <div className="tppotetsimonial-item text-center">
                            <div className="tppotestimonial-icon mb-45">
                              <i className="fa-brands fa-twitter"></i>
                            </div>
                            <p className="tppotestimonial-text mb-50">{item.review}</p>
                            <span className="tpbs-client-name"><a href="#">{item.name}</a></span>
                          </div>
                        </SwiperSlide>
                      )
                    })
                    }
                  </Swiper>

                  <div>
                    <button type="button" className="tp-swiper-prev swiper-arrow">
                      <i className="fa-light fa-chevron-left"></i></button>
                    <button type="button" className="tp-swiper-next swiper-arrow">
                      <i className="fa-light fa-chevron-right"></i></button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialThirteen;