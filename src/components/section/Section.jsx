import React from 'react'
import './Section.scss'

export const Section = () => {
  return (
    <section className="section services" id="services">
    <div className="row container">
      <div className="col">
        <h2>Why we are Best in our Twon</h2>
        <p>
          whole grains and low-fat dairy can help to reduce your risk of heart
          disease by maintaining blood pressure and
        </p>
      </div>
      <div className="col">
        <div className="card">
          <img src="images/meat-icon.svg" alt="" />
          <h3>
            Choose <br />
            your favorite <br />
            food
          </h3>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="images/delivery-icon.svg" alt="" />
          <h3>
            Get delivery <br />
            at your door <br />
            step
          </h3>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img src="images/phone-icon.svg" alt="" />
          <h3>
            We have <br />
            400+ Review <br />
            On our app
          </h3>
        </div>
      </div>
    </div>
  </section>
  )
}
