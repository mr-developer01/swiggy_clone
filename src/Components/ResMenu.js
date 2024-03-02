import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import { MENU_API1, MENU_API2 } from "../utils/constant";

const ResMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [veg, setVeg] = useState(true);
  const [menu, setMenu] = useState([]);
  const cardInfo = menu[2]?.card?.card?.info
  const topcuisines = menu[2]?.card?.card?.info?.cuisines.join(" , ")
  
  console.log(menu);

  useEffect(() => {
    fetchApi();
  }, [])
  

  const fetchApi = async () => {
    const data = await fetch(MENU_API1 + resId + MENU_API2);
    const json = await data.json();
    setMenu(json?.data?.cards);
    // console.log(json);
  };
  
  return (
    <div className="menu">
      <div className="menu-cnt-1">
        <p className="menu-1">Home / {cardInfo?.city} / {cardInfo?.name}</p>
        <div className="menu-2">
          <div className="lft">
            <h3>{cardInfo?.name}</h3>
            <p>{topcuisines}</p>
            <p>{cardInfo?.areaName} {cardInfo?.sla?.lastMileTravelString} ▾</p>
            <p>{cardInfo?.feeDetails?.message}</p>
          </div>
          <div className="rght">
            <div className="stars"><h4>{cardInfo?.avgRatingString}</h4></div>
            <div className="stars"><p>{cardInfo?.totalRatingsString}</p></div>
          </div>
        </div>
      </div>
      <div className="menu-cnt-2">
        <div className="menu-2-p1">
          <h4>{cardInfo?.sla?.slaString}</h4>
          <h4>{cardInfo?.costForTwoMessage}</h4>
        </div>
        <div className="menu-2-p2">
          <div className="box">
            <h5>50% OFF UPTO ₹100</h5>
            <p>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
          <div className="box">
            <h5>50% OFF UPTO ₹100</h5>
            <p>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
          <div className="box">
            <h5>50% OFF UPTO ₹100</h5>
            <p>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
          <div className="box">
            <h5>50% OFF UPTO ₹100</h5>
            <p>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
          <div className="box">
            <h5>50% OFF UPTO ₹100</h5>
            <p>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
          <div className="box">
            <h5>50% OFF UPTO ₹100</h5>
            <p>USE SWIGGY50 | ABOVE ₹149</p>
          </div>
        </div>
      </div>
      <div className="menu-cnt-3">
        <div className="p-1">
          <span><h4>Veg Only</h4></span>
          <label className="switch">
            <input type="checkbox" onClick={() => {
              setVeg((prev) => !prev)
              console.log(veg)
            }}/>
            <span className="slider"></span>
          </label>

        </div>
        <div className="p-2">
          <h3>Top Picks</h3>
          <div className="top-pic-img"></div>
        </div>
        <div className="p-3">
          <div className="types">
            <div className="type-heading"><h3>Personal Slice Veg Pizza. (27)</h3></div>
            <div className="foods"></div>
          </div>
          <div className={veg ? "types" : "non-types"}>
            <div className="type-heading"><h3>Personal Slice Non Veg Pizza. (24)</h3></div>
            <div className="foods"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
