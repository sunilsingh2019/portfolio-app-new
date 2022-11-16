import Link from 'next/link';
import SingleItem from './SingleItem';

const cartData = [
  {
    id: 1,
    img: 'assets/img/product/sm/sm-product-1.jpg',
    title: 'yellow Ambrella',
    price: 130.00,
  },
  {
    id: 2,
    img: 'assets/img/product/sm/sm-product-2.jpg',
    title: 'Round Bag-pack',
    price: 10.50,
  },
]


const CartArea = () => {

  return (
    <>
      <div className="cart-area pt-140 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="product-thumbnail">Images</th>
                        <th className="cart-product-name">Product</th>
                        <th className="product-mprice">Unit Price</th>
                        <th className="product-quantity">Quantity</th>
                        <th className="product-subtotal">Total</th>
                        <th className="product-remove">Remove</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        cartData.map(item => (
                          <SingleItem key={item.id} item={item}/>
                        ))
                      }

                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <input required id="coupon_code" className="input-text" name="coupon_code" 
                        placeholder="Coupon code" type="text" />
                        <button className="tp-sqbtn-active-2" name="apply_coupon" type="submit">Apply
                          coupon</button>
                      </div>
                      <div className="coupon2">
                        <button className="tp-sqbtn-active-2" name="update_cart" type="submit">Update cart</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-end">
                  <div className="col-md-5">
                    <div className="cart-page-total">
                      <h2>Cart total</h2>
                      <ul className="mb-20">
                        <li>Subtotal <span>$250.00</span></li>
                        <li>Total <span>$250.00</span></li>
                      </ul>
                      <div className="checkout_btn f-right">
                        <Link href="/checkout"><a className="tp-sqbtn-active-2"> checkout</a></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartArea;