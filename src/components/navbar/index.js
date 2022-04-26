import React from "react";
import logo from '../../assets/brand/logoWhite.svg'
import { Nav, NavLink, NavBtn, NavMenu, NavBtnLink, Bars } from "./navbarElements";

const Navbar = () => {
    return ( 
       <>
       <Nav>
           <NavLink to="/">
               {/*<h1>Logo</h1>*/}
               <img src={logo} style={{ height: 55, width: 55 }} alt="logo" />
           </NavLink>
           <Bars />


           <NavMenu>
               <NavLink to="/foodlist" activeStyle>
                Our Menu
               </NavLink>
               <NavLink to="/about" activeStyle>
                About Us
               </NavLink>
               <NavLink to="/contact" activeStyle>
                Contact Us
               </NavLink>
               <NavLink to="/signin" activeStyle>
                Sign In
               </NavLink>
           </NavMenu>

           <NavBtn>
               <NavBtnLink to="/signup">
                Sign In
               </NavBtnLink>
           </NavBtn>
       </Nav>
       </>
     );
}
 
export default Navbar;