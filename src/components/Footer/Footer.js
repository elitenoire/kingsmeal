import React from 'react'
import './Footer.scss';
import {Link } from 'react-router-dom'
import logo from '../../assets/brand/logo.svg';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="text-grids">
                <div className="about details">
                    <img src={logo} alt="logo"/>
                    <p>
                        Takeaway & Delivery template<br></br>
                        for small - medium businesses.
                    </p>
                </div>
                <div className="about">
                    <div className="tag company">COMPANY</div>
                    <Link to="/" className="links" >Home</Link>
                    <Link to="/order" className="links" >Order</Link>
                    <Link to="/faq" className="links" >FAQ</Link>
                    <Link to="/contact" className="links" >Contact</Link>
                </div>
                <div className="about">
                    <div className="tag template">TEMPLATE</div>
                    <Link to="#" className="links" >Style Guide</Link>
                    <Link to="#" className="links" >Changelog</Link>
                    <Link to="#" className="links" >Licence</Link>
                    <Link to="#" target="_blank" className="links" >Webflow University</Link>
                </div>
                <div className="about">
                    <div className="tag flowbase">FLOWBASE</div>
                    <Link to="#" target="_blank" className="links" >More Cloneables</Link>
                </div>
            </div>
            <div className="footer-credits">
                <div className="credits">
                    <div className="text-content">
                        Built by <a href="https://andreyscott.vercel.app" target="_blank" className="credit-link">Andreyscott</a>
                    </div>
                </div>
                <div className="social-icons">
                    <div className="icons">
                        <a className="icon" target="_blank" href="https://www.instagram.com/itsandreydev">
                            <img src="images/instagram.svg" alt="insta" />
                        </a>
                        <a className="icon" target="_blank" href="https://www.twitter.com/andreyscott5">
                            <img src="images/twitter.svg" alt="twitter" />
                        </a>
                        <a className="icon" target="_blank" href="https://www.youtube.com">
                            <img src="images/youtube.svg" alt="youtube" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer