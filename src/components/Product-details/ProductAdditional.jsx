import React from 'react';

const ProductAdditional = ({productItem}) => {
  return (
    <>
      <section className="product-additional-info pb-110">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="product-info-tab-area">
                <ul className="nav nav-tabs product-tabs" id="myTab" role="tablist">
                  <li className="nav-item product-tab-item" role="presentation">
                    <button className="nav-link product-tab-button  active" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button"
                      role="tab" aria-controls="about" aria-selected="true">Product Details</button>
                  </li>
                  <li className="nav-item product-tab-item" role="presentation">
                    <button className="nav-link product-tab-button" id="skills-tab" data-bs-toggle="tab" data-bs-target="#skills" type="button"
                      role="tab" aria-controls="skills" aria-selected="false">additional imformation</button>
                  </li>
                  <li className="nav-item product-tab-item" role="presentation">
                    <button className="nav-link product-tab-button" id="awards-tab" data-bs-toggle="tab" data-bs-target="#awards" type="button"
                      role="tab" aria-controls="awards" aria-selected="false">Review (09)</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="about" role="tabpanel" aria-labelledby="about-tab">
                    <div className="tab-content-wrapper mt-30">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                      <p className="tab-text mb-30">We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur</p>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interdum accumsan quis nec enim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et bibendum dui. Aenean consequat pulvinar luctus. Suspendisse consectetur tristique tortor</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                    <div className="product__desc-info mt-10 mb-20">
                      <ul>
                        <li>
                          <h6>Weight</h6>
                          <span>2 lbs</span>
                        </li>
                        <li>
                          <h6>Dimensions</h6>
                          <span>12 × 16 × 19 in</span>
                        </li>
                        <li>
                          <h6>Product</h6>
                          <span>Purchase this product on rag-bone.com</span>
                        </li>
                        <li>
                          <h6>Color</h6>
                          <span>Gray, Black</span>
                        </li>
                        <li>
                          <h6>Size</h6>
                          <span>S, M, L, XL</span>
                        </li>
                        <li>
                          <h6>Model</h6>
                          <span>Model	</span>
                        </li>
                        <li>
                          <h6>Shipping</h6>
                          <span>Standard shipping: $5,95</span>
                        </li>
                        <li>
                          <h6>Care Info</h6>
                          <span>Machine Wash up to 40ºC/86ºF Gentle Cycle</span>
                        </li>
                        <li>
                          <h6>Brand</h6>
                          <span>Kazen</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="awards" role="tabpanel" aria-labelledby="awards-tab">
                    <div className="product__details-review mt-40 mb-20">
                      <div className="row">
                        <div className="col-xl-4">
                          <div className="review-rate">
                            <h5>5.00</h5>
                            <div className="review-star">
                              <a href="#"><i className="fas fa-star"></i></a>
                              <a href="#"><i className="fas fa-star"></i></a>
                              <a href="#"><i className="fas fa-star"></i></a>
                              <a href="#"><i className="fas fa-star"></i></a>
                              <a href="#"><i className="fas fa-star"></i></a>
                            </div>
                            <span className="review-count">01 Review</span>
                          </div>
                        </div>
                        <div className="col-xl-8">
                          <div className="review-des-infod">
                            <h6>1 review for <span> Wireless Bluetooth Over-Ear Headphones</span></h6>
                            <div className="review-details-des">
                              <div className="author-image mr-15">
                                <a href="#">
                                  {productItem?.img ? <img src={"/" + "assets/img/author/author-sm-1.jpg"} alt="" /> 
                                  : <img src="assets/img/author/author-sm-1.jpg" alt="" />}
                                </a>
                              </div>
                              <div className="review-details-content">
                                <div className="str-info">
                                  <div className="review-star mr-15">
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                    <a href="#"><i className="fas fa-star"></i></a>
                                  </div>
                                  <div className="add-review-option">
                                    <a href="#">Add Review</a>
                                  </div>
                                </div>
                                <div className="name-date mb-30">
                                  <h6> admin – <span> May 27, 2021</span></h6>
                                </div>
                                <p>A light chair, easy to move around the dining table and about the room. Duis aute irure dolor in reprehenderit in <br /> voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="product__details-comment ">
                            <div className="comment-title mb-20">
                              <h3>Add a review</h3>
                              <p>Your email address will not be published. Required fields are marked *</p>
                            </div>
                            <div className="comment-rating mb-20">
                              <span>Overall ratings</span>
                              <ul>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                                <li><a href="#"><i className="fas fa-star"></i></a></li>
                              </ul>
                            </div>
                            <div className="comment-input-box">
                              <form >
                                <div className="row">
                                  <div className="col-xxl-6 col-xl-6">
                                    <div className="comment-input">
                                      <input type="text" placeholder="Your Name" />
                                    </div>
                                  </div>
                                  <div className="col-xxl-6 col-xl-6">
                                    <div className="comment-input">
                                      <input type="email" placeholder="Your Email" />
                                    </div>
                                  </div>
                                  <div className="col-xxl-12">
                                    <textarea placeholder="Your review" className="comment-input comment-textarea"></textarea>
                                  </div>
                                  <div className="col-xxl-12">
                                    <div className="comment-agree d-flex align-items-center mb-25">
                                      <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                          Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-xxl-12">
                                    <div className="comment-submit">
                                      <button type="submit" className="tp-sqbtn-border-2">Submit</button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default ProductAdditional;