import React, { useState } from 'react';
import Link from 'next/link';

const SingleWishlistItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1)
  }
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }


  return (
    <>
      <tr >
        <td className="product-thumbnail">
          <Link href="/product-details">
            <a>
              <img src={item.img} alt="product-img" />
            </a>
          </Link>
        </td>
        <td className="product-name">
          <Link href="/product-details"><a>{item.title}</a></Link>
        </td>
        <td className="product-dprice">
          <span className="amount">${item.price}</span>
        </td>
        <td className="product-quantity">
          <div className="cart-plus-minus cdcart-plus-minus">
            <input type="text" onChange={() => setQuantity(quantity)} value={quantity} />
            <div onClick={handleDecrement} className="dec qtybutton">-</div>
            <div onClick={handleIncrement} className="inc qtybutton">+</div>
          </div>
        </td>
        <td className="product-subtotal">
          <span className="amount">${item.price}</span>
        </td>
        <td className="product-remove">
          <a href="#"><i className="fa fa-times"></i></a>
        </td>
      </tr>
    </>
  );
};

export default SingleWishlistItem;