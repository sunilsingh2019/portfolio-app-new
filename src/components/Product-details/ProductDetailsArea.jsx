import Link from 'next/link';

const ProductDetailsArea = () => {
  return (
    <>
      <div className="product-details pt-140 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="product__details-nav d-sm-flex align-items-start mb-40">
                <div className="product__details-thumb">
                  <div className="tab-content" id="productThumbContent">
                    <div className="tab-pane fade show active" id="thumbOne" role="tabpanel" aria-labelledby="thumbOne-tab">
                      <div className="product__details-nav-thumb w-img">
                        <img src="assets/img/product/nav/product-nav-big-1.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="thumbTwo" role="tabpanel" aria-labelledby="thumbTwo-tab">
                      <div className="product__details-nav-thumb w-img">
                        <img src="assets/img/product/nav/product-nav-big-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="thumbThree" role="tabpanel" aria-labelledby="thumbThree-tab">
                      <div className="product__details-nav-thumb w-img">
                        <img src="assets/img/product/nav/product-nav-big-2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="thumbFour" role="tabpanel" aria-labelledby="thumbFour-tab">
                      <div className="product__details-nav-thumb w-img">
                        <img src="assets/img/product/nav/product-nav-big-2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-tabs flex-sm-column justify-content-between" id="productThumbTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="thumbOne-tab" data-bs-toggle="tab" data-bs-target="#thumbOne" type="button" role="tab" aria-controls="thumbOne" aria-selected="true">
                      <img src="assets/img/product/nav/product-nav-1.jpg" alt="" />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="thumbTwo-tab" data-bs-toggle="tab" data-bs-target="#thumbTwo" type="button" role="tab" aria-controls="thumbTwo" aria-selected="false">
                      <img src="assets/img/product/nav/product-nav-2.jpg" alt="" />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="thumbThree-tab" data-bs-toggle="tab" data-bs-target="#thumbThree" type="button" role="tab" aria-controls="thumbThree" aria-selected="false">
                      <img src="assets/img/product/nav/product-nav-3.jpg" alt="" />
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="thumbFour-tab" data-bs-toggle="tab" data-bs-target="#thumbFour" type="button" role="tab" aria-controls="thumbThree" aria-selected="false">
                      <img src="assets/img/product/nav/product-nav-4.jpg" alt="" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="product__details-content mb-40">
                <h5 className="product-dtitle mb-15"><b>Laptop</b> Carry bag </h5>
                <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                <div className="product-dinfo mt-20">
                  <div className="product-rating">
                    <a href="#"><i className="fa-solid fa-star"></i></a>
                    <a href="#"><i className="fa-solid fa-star"></i></a>
                    <a href="#"><i className="fa-solid fa-star"></i></a>
                    <a href="#"><i className="fa-solid fa-star"></i></a>
                    <a href="#"><i className="fa-light fa-star"></i></a>
                  </div>
                  <span className="review-count">(4 customer review)</span>
                </div>
                <h5 className="product-dprice mt-30">$208.00 <del>/308</del></h5>
                <h6 className="product-model-title mt-30 mb-15">Model</h6>
                <div className="model-list mb-40">
                  <a href="#">tyk</a>
                  <a href="#">ffd2</a>
                  <a href="#">23tt</a>
                  <a href="#">r454</a>
                  <a href="#">45hy</a>
                </div>
                <div className="pro-quan-area d-sm-flex align-items-center mb-20">
                  <div className="product-quantity-title mb-20">
                    <label>Quantity</label>
                  </div>
                  <div className="product-quantity mr-20 mb-20">
                    <div className="cart-plus-minus">
                      <input type="text" defaultValue="1" />
                      <div className="dec qtybutton">-</div>
                      <div className="inc qtybutton">+</div>
                    </div>
                  </div>
                </div>
                <div className="product-button">
                  <Link href="/cart">
                    <a className="tp-sqbtn-border-2 mr-20">Add to cart</a>
                  </Link>
                  <Link href="/cart">
                    <a className="tp-sqbtn-active-2">Buy now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsArea;