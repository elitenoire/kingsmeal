import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
        <div className="header-wrapper">
            <div className="header-content">
                Created  by React group 3 at the SideHustle5.0
                <a href="/about" className="order-link">Order Now</a>
            </div>
        </div>
    </div>
  )
}

export default Header