import Link from 'next/link';
import shopData from "../../data/shopData";

const RelatedProduct = () => {
  return (
    <>
      <div className="related-product-area pb-80">
        <div className="container">
          <h4 className="related-product-title mb-40"><b>Realated</b> Product</h4>
          <div className="row">
            {
              shopData.slice(0, 3).map(item => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
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
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedProduct;