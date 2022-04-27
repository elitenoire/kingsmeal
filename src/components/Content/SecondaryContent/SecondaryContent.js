import React from 'react'
import './SecondaryContent.scss'

const SecondaryContent = ( props ) => {
  return (
    <div>
        <div className="content second-content">
        <div className="content-container">
          <div className="content-text">
            <h2 className="text-h2 primary-text">
              {props.headingBefore} <br></br>
              {props.headingAfter} 
            </h2>
            <p className="text-p">
              {props.para}
            </p>
            <div className="btn-container">
              <a href="/order" className="btn"> {props.btnText}</a>
            </div>
          </div>
          <div className="content-img">
            <img src={`images/${props.image}`} alt="heroimg" className="hero-img"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondaryContent