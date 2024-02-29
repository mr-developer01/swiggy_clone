import React from 'react'
import { LOGO_URL } from '../utils/Constant';

import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
        <div className="left">
        <Link to="/"><img src={LOGO_URL} alt="logo" /></Link>
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
          <div className="cta"><Link to="/about"><h4>Cart</h4></Link></div>
        </div>
      </div>
  )
}

export default Nav;