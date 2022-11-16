import React from 'react';
import SingleWishlistItem from './SingleWishlistItem';

const wishlistData = [
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

const WishListArea = () => {
  return (
    <>
      <div className="cart-area pt-140 pb-140">
        <div className="container custome-container">
          <div className="row">
            <div className="col-12">
              <form>
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
                        wishlistData.map(item => (
                          <SingleWishlistItem key={item.id} item={item} />
                        ))
                      }

                    </tbody>
                  </table>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishListArea;