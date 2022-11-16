import React from 'react';
import counterData from '../../data/counterData';
import Counter from '../common/Counter';

const AboutCounter = () => {
  return (
    <>
      <section className="tpfact-area">
        <div className="container">
          <div className="row g-0">
            {counterData.map(item => {
              return (
                <div key={item.id} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                  <div className={`tpfact__item tpfact__item-df tpfact-border-right text-center mb-30 
                     ${item.border === false && 'border-end-0'}`}>
                    <div className="fact-icon mb-40">
                      <img src={item.iconImg} alt="fact-icon" />
                    </div>
                    <div className="fact-number mb-20">
                      <Counter number={item.number} />
                    </div>
                    <span className="fact-title">{item.title}</span>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCounter;