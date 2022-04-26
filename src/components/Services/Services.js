import React from 'react'
import './Services.scss'

const Services =()  => {
  return (
    <div className="services">
        <div className="container">
            <div className="title">
                <h2>
                    How it works.
                </h2>
            </div>
            <div className="services-grid">
                <div className="service">
                    <img className="service-img" src="images/Step-01.png" alt="Service-1" />
                    <div className="service-content">
                        <h5>Adapt your menu items</h5>
                        <p>Easily adapt your menu using the webflow CMS and allow customers to browse your items.</p>
                    </div>
                </div>
                <div className="dash-lines">
                    <div className="line"></div>
                </div>
                <div className="service">
                    <img className="service-img" src="images/Step-02.png" alt="Service-1" />
                    <div className="service-content">
                        <h5>Accept online orders & takeout</h5>
                        <p>Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.</p>
                    </div>
                </div>
                <div className="dash-lines">
                    <div className="line"></div>
                </div>
                <div className="service">
                    <img className="service-img" src="images/Step-03.png" alt="Service-1" />
                    <div className="service-content">
                        <h5>Manage delivery or takeout</h5>
                        <p>Manage your own logistics and take orders simply through the ecommerce system.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services