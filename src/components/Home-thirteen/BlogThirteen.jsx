import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import blogData from '../../data/blogData';


const blogItems = blogData.slice(9, 14)

const BlogThirteen = () => {
  return (
    <>
      <section className="tppoblog-area grey-bg pt-135 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center">
                <span className="tpbs-sub-title mb-15">Blog & Article</span>
                <h3 className="tpbs-title">Read <span> Blog & Article</span></h3>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            <div className="col-xl-12">
              <div className="tpblog__slider tpblog__slider-active-2">

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
                  {blogItems.map(item => {
                    return (
                      <SwiperSlide key={item.id}>
                        <div className="tpblog">
                          <div className="tpblog__thumb tpblog__thumb-ds">
                            <Link href={`/blog-details/${item.id}`}>
                              <a>
                                <img src={item.img} alt="blog" />
                              </a>
                            </Link>
                          </div>
                          <div className="tpblog__content tpblog__content-2">
                            <div className="tpblog__meta tpblog__meta-2 mb-25">
                              <span className="tpblog__catagory">Business..</span>
                              <span className="tpblog__date">{item.date}</span>
                            </div>
                            <h5 className="tpblog__title">
                              <Link href={`/blog-details/${item.id}`}>
                                <a>{item.title}</a>
                              </Link>
                            </h5>
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

export default BlogThirteen;