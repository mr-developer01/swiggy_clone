import React from 'react'
import { LOGO_URL } from '../utils/Constant';
import logo from "../../public/f_img.png";

import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';

const Nav = () => {
  // subscribing to the store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="nav">
        <div className="left">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <div className="adrs">
        <p><span>Other</span> 3rd Phase, J.P.Nagar, Bengaluru, Karnatka</p>
        <p>▼</p>
        </div>
        </div>
        <div className="rght">
          {/* <div className="cta"><h4>Search</h4></div> */}
          <div className="cta"><Link to="/offers"><h4>Offers<sup>NEW</sup></h4></Link></div>
          <div className="cta"><Link to="/about"><h4>About</h4></Link></div>
          <div className="cta"><Link to="/contact"><h4>Contact</h4></Link></div>
          <div className="cta"><Link to="/cart"><h4>Cart<sup style={{fontSize: ".7vw"}}>{cartItems.length}</sup></h4></Link></div>
        </div>
      </div>
  )
}

export default Nav;