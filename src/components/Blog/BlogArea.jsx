import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Link from 'next/link';

import blogData from '../../data/blogData';
import BlogRightSide from '../common/BlogRightSide';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const blogItems = blogData.slice(0, 3);


const sliderImg = [
  {
    id: 1,
    img: 'assets/img/blog/blog-big-4.jpg'
  },
  {
    id: 2,
    img: 'assets/img/blog/blog-big-5.jpg'
  },
  {
    id: 3,
    img: 'assets/img/blog/blog-big-6.jpg'
  },
]

const BlogArea = () => {
  const {show,handleShow,handleClose} = useGlobalContext()
  return (
    <>
      <section className="postbox__area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20">
                {
                  blogItems.map(item => (
                    <article key={item.id} className="postbox__item mb-50">
                      <div className="postbox__thumb w-img mb-30">
                        <div className={item.class}>
                          {item.video ?
                            <><Link href={`/blog-details/${item.id}`}>
                              <a><img src={item.bigImg} alt="" />
                              <div className="postbox__tag-wrapper">
                                <span className="postbox__tag">Personal . Stories</span>
                              </div></a>
                            </Link> <button onClick={handleShow} className="play-btn pulse-btn popup-video">
                              <i className="fas fa-play"></i></button></>
                            : item.slider ? <>
                              <Swiper
                                navigation={{ nextEl: '.tp-swiper-next', prevEl: '.tp-swiper-prev' }}
                                modules={[Navigation, Pagination, Autoplay]}
                                className="swiper-wrapper"
                                spaceBetween={15}
                                slidesPerView={1}
                                autoplay={{ delay: 6000 }}
                              >
                                {sliderImg.map(item => {
                                  return (
                                    <SwiperSlide key={item.id}>
                                      <div className="postbox__slider-item">
                                        <img src={item.img} alt="" />
                                      </div>
                                    </SwiperSlide>
                                  )
                                })
                                }
                              </Swiper> <div >
                                <button className="tp-swiper-next swiper-arrow">
                                  <i className="far fa-long-arrow-right"></i></button>
                                <button className="tp-swiper-prev swiper-arrow">
                                  <i className="far fa-long-arrow-left"></i></button>
                              </div> </> : <Link href={`/blog-details/${item.id}`}>
                               <a ><img src={item.bigImg} alt="" /></a>
                            </Link>}
                        </div>
                        <div className="postbox__tag-wrapper">
                          <span className="postbox__tag">Personal . Stories</span>
                        </div>
                      </div>
                      <div className="postbox__content">
                        <div className="postbox__meta">
                          <span><a href="#"><i className="far fa-user"></i> {item.blogAuthor}</a></span>
                          <span><i className="far fa-calendar-check"></i> {item.date} </span>
                          <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                        </div>
                        <h3 className="postbox__title">
                          <Link href={`/blog-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h3>
                        <div className="postbox__text">
                          <p>This article reveals how something as trivial as administration in both software and As-a-service can be either a booster or bottleneck to a company’s productivity and innovation. It also provides several design aspects that UX practitioners should evaluate when designing the administration experience. </p>
                        </div>
                        <div className="postbox__read-more">
                          <Link href={`/blog-details/${item.id}`} className="tp-solid-btn">read more</Link>
                        </div>
                      </div>
                    </article>
                  ))
                }


                <div className="basic-pagination mb-50">
                  <nav>
                    <ul>
                      <li>
                        <Link href="/blog">
                          <a><i className="far fa-angle-left"></i></a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">1</Link>
                      </li>
                      <li>
                        <span className="current">2</span>
                      </li>
                      <li>
                        <Link href="/blog">3</Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <a><i className="far fa-angle-right"></i></a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

              </div>
            </div>
            {/* blog right side start */}
            <BlogRightSide />
            {/* blog right side end */}
          </div>
        </div>
      </section>


      <VideoModal show={show} handleClose={handleClose} videoId="oMhby921Ux4" />
    </>
  );
};

export default BlogArea;