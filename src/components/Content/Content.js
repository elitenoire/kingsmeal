import React from 'react'
import SecondaryContent from './SecondaryContent/SecondaryContent'
import './Content.scss'

const Content = () =>{
  return (
    <>
      <div className="content">
        <div className="content-container">
          <div className="content-text">
            <h1 className="text-h1">
              Beautiful food & takeaway,
              <span className="primary-text">delivered</span>
              to your door.
            </h1>
            <p className="text-p">
              When an unknown printer took a galley of type and scrambled it to make a 
              type specimen book. It has survived not only five centuries, but also
            </p>
            <div className="btn-container">
              <a href="/order" className="btn"> Place and Order</a>
            </div>
            <div className="feedbacks">
              <img className="feedback-img" src="images/trustpilot-logo.svg" alt="trustpilot" />
              <div className="feedback-text">
                <span className="primary-text">4.8 out of 5</span>
                based on 2000+ reviews
              </div>
            </div>
          </div>
          <div className="content-img">
            <img src="images/Hero-Image.png" alt="heroimg" className="hero-img"/>
          </div>
        </div>
      </div>

      <SecondaryContent 
        headingBefore="The home of" 
        headingAfter="fresh products" 
        para="When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also"
        btnText="Learn about us"
        image="Group.png"        

      />

    </>
  )
}

export default Content