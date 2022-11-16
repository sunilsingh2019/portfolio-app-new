import React from 'react';
import counterData from '../../data/counterData';
import Counter from '../common/Counter';

const CounterTwo = () => {
  
  return (
    <>
      <section className="tpfact-area box-plr-85">
        <div className="container-fluid">
          <div className="tpfact-wrapper grey-bg">
            <div className="tpfact-wrapper pb-90">
              <div className="container">
                <div className="row">
                  {
                    counterData.map(item => {
                      return (
                        <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
                          <div className="tpfact__item text-center mb-30">
                            <div className="fact-icon mb-40">
                              <i className={item.icon}></i>
                            </div>
                            <div className="fact-number mb-20">
                              <Counter number={item.number}/>
                            </div>
                            <span className="fact-title">
                              <a>{item.title}</a>
                            </span>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterTwo;