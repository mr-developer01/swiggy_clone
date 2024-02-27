import React from 'react'
import { LOGO_URL } from '../utils/Constant';

const Nav = () => {
  return (
    <div className="nav">
        <div className="left">
        <img src={LOGO_URL} alt="logo" />
        <div className="adrs">
        <p><span>Other</span> 3rd Phase, J.P.Nagar, Bengaluru, Karnatka</p>
        <p>▼</p>
        </div>
        </div>
        <div className="rght">
          <div className="cta"><h4>Search</h4></div>
          <div className="cta"><h4>Offers<sup>NEW</sup></h4></div>
          <div className="cta"><h4>Help</h4></div>
          <div className="cta"><h4>Sign In</h4></div>
          <div className="cta"><h4>Cart</h4></div>
        </div>
      </div>
  )
}

export default Nav;