const faqData = [
  {
    id: 1,
    headingNum: 'headingOne',
    collapseNum: 'collapseOne',
    expanded: true,
    show: true,
    title: 'How Can I Take Your Service ?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 2,
    headingNum: 'headingTwo',
    collapseNum: 'collapseTwo',
    title: 'Are You Ready to Take Our Digital Service?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 3,
    headingNum: 'headingThree',
    collapseNum: 'collapseThree',
    title: 'What is The Prize of Website Design?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 4,
    headingNum: 'headingFour',
    collapseNum: 'collapseFour',
    title: 'How to Deal With Nerox?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 5,
    headingNum: 'headingFive',
    collapseNum: 'collapseFive',
    title: 'Want to Create Account in Nerox Website',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },

  {
    id: 6,
    headingNum: 'flush-headingOne',
    collapseNum: 'flush-collapseOne',
    title: 'How to Deal With Nerox Digital Agency ?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
    expanded: true,
    show: true,
  },
  {
    id: 7,
    headingNum: 'flush-headingTwo',
    collapseNum: 'flush-collapseTwo',
    title: 'What is the payment Mathod ?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 8,
    headingNum: 'flush-headingThree',
    collapseNum: 'flush-collapseThree',
    title: 'How can i join Nerox Agency ?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 9,
    headingNum: 'flush-headingFour',
    collapseNum: 'flush-collapseFour',
    title: 'How can i apply for job ?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
  {
    id: 10,
    headingNum: 'flush-headingFive',
    collapseNum: 'flush-collapseFive',
    title: 'How to get partnership ?',
    desc: 'Roof strives for continual improvement safety, production, quality, profit and continued community service toYZ strives for continual improve ment in safety, production, quality.',
  },
]

const FaqArea = () => {
 
  return (
    <>
      <div className="faq-area pt-105 pb-140">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div className="faq-wrapper-1">
                <div className="accordion" id="accordionExample">
                  {
                    faqData.slice(0, 5).map(item => (
                      <div key={item.id} className="accordion-item fq-item">
                        <h2 className="accordion-header" id={item.headingNum}>
                          <button className={`accordion-button ${!item.show ? 'collapsed' : ''} fq-button`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapseNum}`}
                            aria-expanded={item.expanded ? 'true' : 'false'} aria-controls={item.collapseNum}>
                            {item.title}
                          </button>
                        </h2>
                        <div id={item.collapseNum} className={`accordion-collapse collapse ${item.show ? 'show' : ''}`} aria-labelledby={item.headingNum} data-bs-parent="#accordionExample">
                          <div className="accordion-body fq-body">
                            <p>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  }

                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="accordion accordion-flush" id="accordionFlushExample">
                {
                  faqData.slice(5, 10).map(item => (
                    <div key={item.id} className="accordion-item fq-item">
                      <h2 className="accordion-header" id={item.headingNum}>
                        <button className={`accordion-button ${!item.show ? 'collapsed' : ''} fq-button`} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.collapseNum}`}
                          aria-expanded={item.expanded ? 'true' : 'false'} aria-controls={item.collapseNum}>
                          {item.title}
                        </button>
                      </h2>
                      <div id={item.collapseNum} className={`accordion-collapse collapse ${item.show ? 'show' : ''}`} aria-labelledby={item.headingNum} data-bs-parent="#accordionExample">
                        <div className="accordion-body fq-body">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqArea;