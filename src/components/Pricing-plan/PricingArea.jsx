import Link from 'next/link';
import pricingData from '../../data/pricingData';

const PricingArea = () => {

  return (
    <>
      <div className="pricing-plan-area-2 pt-140 pb-110">
        <div className="container">
          <div className="row">
            {
              pricingData.map(item => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="pricing-plan-item pr-plan-item-border mb-30">
                    <div className="pricing-meta mb-40">
                      <span className="pricing-name">{item.name}</span>
                      <div className="pricing-star">
                        {item.ratings}
                      </div>
                    </div>
                    <div className="plan-price plan-price-2 plan-price-4 text-center mb-40 d-flex justify-content-between align-items-center">
                      <h4 className="price"><span>$</span>{item.price}.00</h4>
                      <p>{item.date}</p>
                    </div>
                    <div className="plan-list">
                      {item.planList}
                    </div>
                    <div className="pricing-plan-btn mt-45">
                      <Link href="/cart">
                        <a className={item.active ? 'tp-sqbtn-active w-100' : 'tp-sqbtn-border w-100'}>Purchase now</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>


      <div className="pricing-plan-area grey-bg pt-130 pb-110">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tpbs-section-wrapper text-center mb-30">
                <span className="tp-sub-title mb-15">#Price & Plan</span>
                <h3 className="tpbs-title">Suitable Pricing plan for <br /> <span>all Business</span></h3>
              </div>
            </div>
          </div>
          <div className="row mt-35">
            {
              pricingData.map(item => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div className="pricing-plan-item pricing-plan-item-df mb-30">
                    <div className="pricing-meta mb-40">
                      <span className="pricing-name">{item.name}</span>
                      <div className="pricing-star">
                        {item.ratings}
                      </div>
                    </div>
                    <div className="plan-price plan-price-3 text-center mb-40 d-flex justify-content-between align-items-center">
                      <h4 className="price price-2"><span>$</span>{item.price}.00</h4>
                      <p>{item.date}</p>
                    </div>
                    <div className="plan-list plan-list-2">
                      {item.planList}
                    </div>
                    <div className="pricing-plan-btn mt-45">
                      <Link href="/cart" >
                        <a className={item.active ? 'tp-sqbtn-active w-100' : 'tp-sqbtn-border w-100'}>Purchase now</a>
                      </Link>
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

export default PricingArea;