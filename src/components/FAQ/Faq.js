import React,{ useEffect, useState } from 'react'
import MainContent from '../CompanyPage/CompanyContent/MainContent/MainContent'
import {fetchFAQ} from '../../actions/index'
import { connect } from "react-redux";
import './Faq.scss'

const Faq = ({fetchFAQ , faqFetched}) => {

  useEffect(() => {
    fetchFAQ();
  }, []);

  const faqs = faqFetched["Our food"];
  console.log(faqs);

  const [selected, setSelected] = useState(null);

  const toggle= (idx) => {
    if(selected === idx){
      return setSelected(null);
    }
    setSelected(idx);
  }

  return (
    <div>
      <MainContent textheading="Frequently Asked" primaryheading="Questions" break={<br />}/>

      <div className="faq">
        <div className="faq-container">
          <div className="faq-questions">
            <div className="categories">
                <button href="#" className="single-category  current"  >
                    <div>Our Food</div>
                </button>
                <button href="#" className="single-category" >
                    <div>Our Delivery</div>
                </button>
                <button href="#" className="single-category">
                    <div>Our Company</div>
                </button>
            </div>
            <div className="wrapper">
              <div className="accordian">
                {
                  faqs && faqs.queries.map((item,idx) => (
                    <div key={idx} className="item">
                      <div className="title" onClick={() => toggle(idx)}>
                        <h4>{item.question}</h4>
                        <div className="plus-box"><span className="plus rotation">{selected === idx ? 'x': '+'}</span></div>
                      </div>
                      <div className={selected === idx ? 'show': 'faq-content'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
      faqFetched: state.faqFetched
  }
}

export default connect(mapStateToProps, { fetchFAQ})(Faq);