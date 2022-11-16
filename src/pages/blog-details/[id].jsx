import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Yup from 'yup';

import Breadcrumb from '../../components/common/Breadcrumb';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import blogData from '../../data/blogData';
import BlogRightSide from '../../components/common/BlogRightSide';
import VideoModal from '../../components/common/VideoModal';
import useGlobalContext from '../../hooks/useGlobalContext';
import FooterTwo from '../../components/common/Footers/FooterTwo';
import { useFormik } from 'formik';
import ErrorMsg from '../../components/common/ErrorMsg';



const recentBlog = blogData.slice(0, 2);

const BlogDetails = () => {
  const router = useRouter();
  const [blogItem, setBlogItem] = useState({});
  const { show, handleShow, handleClose } = useGlobalContext();
  const id = router.query.id;

  const handleOnSubmit = (values, { resetForm }) => {
    alert(`${values.name + "\n" + values.email + "\n"  + values.msg}`);
    resetForm()
  }
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      msg: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required().label("Name"),
      email: Yup.string().required().email().label("Email"),
      msg: Yup.string().required().min(20).label("Message"),
    }),
    onSubmit: handleOnSubmit,
  })

  useEffect(() => {
    if (!id) {

    }
    else {
      setBlogItem(blogData.find(item => item.id == id))
    }
  }, [id]);
  return (
    <>
      <SEO pageTitle="Blog Details" />
      <Header />
      <Breadcrumb title="BLOG DETAILS" subtitle="Blog Details" />

      <section className="postbox__area pt-120 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="postbox__wrapper pr-20 mb-60">
                <h3 className="postbox__title-df"> {blogItem?.title}</h3>
                <div className="postbox__meta mt-50">
                  <span className="postdetails-tag"><a href="#">Finance & Businss</a></span>
                  <span><a href="#"><i className="far fa-user"></i> John Smith</a></span>
                  <span><i className="far fa-calendar-check"></i> {blogItem?.date} </span>
                  <span><a href="#"><i className="fal fa-comments"></i> 02 Comments</a></span>
                </div>
                <p className="postd-text mt-30 mb-50"><b>Quick summary :</b>  The way you present your product or service is essential to its success — or at least it could be if you know how to do it right. The first impression you make on people is crucial. When selling a product, you want that first impression to be as positive and remarkable as possible. If you have managed to draw them in, you will need to introduce the product within a few seconds.</p>
                <blockquote>
                  <p>The way you present your product or service is essential to its success — or at least it could be if you know how to do it right. On the Web, like anywhere else, the first impression you make on people is crucial. When selling a product, you want that first impression to be as positive and remarkable as possible.
                  </p>
                  <p>Once people visit your website, make sure to attract their attention. If you have managed to draw them in, you will need to introduce the product within a few seconds. According to last year’s Google Analytics benchmarking report, bounce rates in the US were as high as 42.5%. If people don’t understand what you are offering them or how it works, they will lose interest quickly. Show them that your product is just what they want, that it’s useful and that it adds some kind of value to their lives.</p>
                </blockquote>
                <div className="postbox__thumb postbox__video w-img p-relative mb-50">
                  <Link href="/blog-details">
                    <a>
                      <img src={"/" + "assets/img/blog/blog-big-2.jpg"} alt="" />
                    </a>
                  </Link>
                  <button onClick={handleShow} className="play-btn pulse-btn popup-video"><i className="fas fa-play"></i></button>
                </div>
                <h4 className="postbox__title-sm mb-30">Surprise Your Visitors :</h4>
                <p>Another great way to attract attention is by surprising visitors. Offer them something they did not expect; make them pause and think to make sense of what they see. We like to be surrounded by the familiar, and things that don’t fit our expectations automatically draw our attention.</p>
                <p>Nike presents its new running shoes in the shape of wings, with the promise of a “Super-natural ride.” The arrangement of these multi-colored shoes and the fade in the middle almost force people to take a second look. The visual is not only appealing, but attracts attention because people are not sure whether they are looking at wings or shoes or both.One such example is the brand Evian. How could boring water possibly attract attention? Quite simple, actually. Come up with a product-related slogan, such as “Live young,” and then translate that slogan into a visual campaign using some great humor. A couple of years back, Evian’s funny campaign videos went viral — proof that its unique approach works.</p>
                <div className="row mt-50">
                  <div className="col-xl-6 col-lg-6">
                    <div className="blogd-image mb-60 w-img">
                      <img src={"/" + "assets/img/blog/blog-dsm-1.jpg"} alt="blog-img" />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="blogd-image mb-60 w-img">
                      <img src={"/" + "assets/img/blog/blog-dsm-2.jpg"} alt="blog-img" />
                    </div>
                  </div>
                </div>
                <div className="bolgd-tags-wrapper">
                  <h5 className="blogd-tag-title">Tagged with:</h5>
                  <div className="tags-list">
                    <a href="#">landing </a>
                    <a href="#">Charity </a>
                    <a href="#">book </a>
                    <a href="#">Design </a>
                    <a href="#">website</a>
                  </div>
                </div>
                <h4 className="rcpost-title mt-50 mb-50">Recent Post:</h4>
                <div className="row">
                  {recentBlog.map(item => (
                    <div key={item.id} className="col-xl-6 col-lg-6 col-md-6">
                      <div className="blog-grid-item mb-50">
                        <div className="blog-grid-thumb mb-30">
                          <div className="grid-image w-img">
                            <img src={"/" + item.gridImg} alt="blog-img" />
                          </div>
                        </div>
                        <div className="blog-grid-content">
                          <span className="blog-grid-tag mb-20">{item.category}</span>
                          <h4 className="blog-grid-title mb-15">
                            <Link href={`/blog-details/${item.id}`}><a>{item.title}</a></Link>
                          </h4>
                          <span className="blog-grid-date">
                            <i className="fa-light fa-calendar-days"></i> {item.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                <div className="postbox__comment border-top pt-60 mb-65">
                  <div className="postbox-meta mb-30">
                    <h3 className="postbox__comment-title">3 Comments</h3>
                    <div className="postshare-option mb-20">
                      <h3 className="postbox-share-title">Share</h3>
                      <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                      <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                      <a href="#"><i className="fa-brands fa-facebook"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="postbox__comment-box">
                        <div className="postbox__comment-info d-flex">
                          <div className="postbox__comment-avater mr-20">
                            <img src={"/" + "assets/img/blog/comments/comment-1.jpg"} alt="" />
                          </div>
                          <div className="postbox__comment-name">
                            <h5>Johan Ritaxon</h5>
                            <span className="post-meta"> July 14, 2022</span>
                          </div>
                        </div>
                        <div className="postbox__comment-text ml-65">
                          <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how your father my lady absolutely.</p>
                          <div className="postbox__comment-reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="children">
                      <div className="postbox__comment-box">
                        <div className="postbox__comment-info d-flex">
                          <div className="postbox__comment-avater mr-20">
                            <img src={"/" + "assets/img/blog/comments/comment-2.jpg"} alt="" />
                          </div>
                          <div className="postbox__comment-name">
                            <h5>Rohan De Spond</h5>
                            <span className="post-meta"> July 14, 2022</span>
                          </div>
                        </div>
                        <div className="postbox__comment-text ml-65">
                          <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how your father my lady absolutely.</p>
                          <div className="postbox__comment-reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="postbox__comment-box">
                        <div className="postbox__comment-info d-flex">
                          <div className="postbox__comment-avater mr-20">
                            <img src={"/" + "assets/img/blog/comments/comment-3.jpg"} alt="" />
                          </div>
                          <div className="postbox__comment-name">
                            <h5>Iqbal Hossain</h5>
                            <span className="post-meta"> July 14, 2022</span>
                          </div>
                        </div>
                        <div className="postbox__comment-text ml-65">
                          <p>So I said lurgy dropped a clanger Jeffrey bugger cuppa gosh David blatant have it, standard A bit of how your father my lady absolutely.</p>
                          <div className="postbox__comment-reply">
                            <a href="#">Reply</a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="postbox__comment-form border-top pt-60">
                  <h3 className="postbox__comment-form-title">Post a Comment :</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="postbox__comment-input">
                          <input id='name' value={values.name} onChange={handleChange} onBlur={handleBlur} type="text" placeholder="Enter Your Name" />
                          {touched.name && <ErrorMsg error={errors.name} />}
                        </div>
                      </div>
                      <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="postbox__comment-input">
                          <input id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} type="email" placeholder="Enter Your Email" />
                          {touched.email && <ErrorMsg error={errors.email} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__comment-input">
                          <textarea id='msg' value={values.msg} onChange={handleChange} onBlur={handleBlur} placeholder="Write  Your Comment..."></textarea>
                          {touched.msg && <ErrorMsg error={errors.msg} />}
                        </div>
                      </div>
                      <div className="col-xxl-12">
                        <div className="postbox__comment-btn mt-10">
                          <button type="submit" className="tp-solid-btn">Post Comment</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* BlogRightSide */}
            <BlogRightSide dynamicRoute={true} />
            {/* BlogRightSide */}
          </div>
        </div>
      </section>

      {/* Footer start */}
      <FooterTwo />
      {/* Footer end */}


      <VideoModal show={show} handleClose={handleClose} videoId="oMhby921Ux4" />
    </>
  );
};

export default BlogDetails;