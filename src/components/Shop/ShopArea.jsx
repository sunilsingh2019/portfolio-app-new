import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";

import shopData from '../../data/shopData';

const ShopArea = () => {
  const [shopItems, setShopItems] = useState(shopData);
  const handleChange = e => {
    if (e.target.value === 'Short by New') {
      setShopItems(shopData)
    }
    if (e.target.value === 'Short by Popular') {
      setShopItems(shopData.filter(item => item.saleTag))
    }
    if (e.target.value === 'Short by Trending') {
      setShopItems(shopData.slice(4, 9))
    }
    if (e.target.value === 'Short by Price') {
      setShopItems(shopData.sort((a, b) => a.price - b.price))
    }
  }
  return (
    <>
      <div className="shop-area pt-140 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="shop-meta">
                <div className="find-result">
                  <span className="search-result">Showing 1–{shopItems.length} of {shopData.length} results</span>
                </div>
                <div className="shop-info">
                  <div className="shop-nav">
                    <div className="shop-nav-item">
                      <i className="fa-solid fa-grid"></i>
                    </div>
                    <div className="shop-nav-item">
                      <i className="fa-solid fa-list"></i>
                    </div>
                  </div>
                  <div className="select-option">
                    <select onChange={handleChange} name="Default Sorting" id="transport">
                      <option>Short by New</option>
                      <option>Short by Popular</option>
                      <option>Short by Trending</option>
                      <option>Short by Price</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-60">
            {
              shopItems.map(item => (
                <motion.div key={item.id} layout animate={{ scale: 1 }}
                initial={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.8 }} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="product-item mb-50">
                    <div className="product-thumb mb-30">
                      <div className="product-image w-img">
                        <img src={item.img} alt="product-img" />
                      </div>
                      {item.saleTag && <div className="sale-tag">
                        <span className="new">{item.saleTag}</span>
                      </div>}
                    </div>
                    <div className="product-content text-center">
                      <h5 className="product-title mb-10">
                        <Link href={`/product-details/${item.id}`}>
                          <a>{item.title}</a>
                        </Link>
                      </h5>
                      <span className="product-price mb-5">${item.price}.00</span>
                      <div className="product-rating">
                        {item.rating}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default ShopArea;