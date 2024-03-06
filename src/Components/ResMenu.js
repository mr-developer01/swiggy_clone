import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchApi } from "../utils/useFetchApi";

const ResMenu = () => {
  const { resId } = useParams();
  const [veg, setVeg] = useState(true);

  const resData = useFetchApi(resId);

  console.log(resData);

  if (resData.length === 0) {
    return <h1 style={{ marginTop: "10vh" }}>Loading Data....</h1>;
  }

  const {
    name,
    city,
    areaName,
    avgRating,
    cuisines,
    totalRatingsString,
    sla,
    feeDetails,
    costForTwoMessage
  } = resData[2]?.card?.card?.info;
  const { lastMileTravelString, slaString } = sla;
  const { message } = feeDetails;
  console.log(name, city);

  return (
    <div className="menu">
      <div className="menu-cnt-1">
        <p className="menu-1">
          Home / {city} / {name}
        </p>
        <div className="menu-2">
          <div className="lft">
            <h3>{name}</h3>
            <p>{cuisines.join(" , ")}</p>
            <p>
              {areaName} {lastMileTravelString} ▾
            </p>
            <p>{message}</p>
          </div>
          <div className="rght">
            <div className="stars">
              <h4>{avgRating}</h4>
            </div>
            <div className="stars">
              <p>{totalRatingsString}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-cnt-2">
        <div className="menu-2-p1">
          <h4>{slaString}</h4>
          <h4>{costForTwoMessage}</h4>
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
          <span>
            <h4>Veg Only</h4>
          </span>
          <label className="switch">
            <input
              type="checkbox"
              onClick={() => {
                setVeg((prev) => !prev);
                console.log(veg);
              }}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="p-2">
          <h3>Top Picks</h3>
          <div className="top-pic-img"></div>
        </div>
        <div className="p-3">
          <div className="types">
            <div className="type-heading">
              <h3>Personal Slice Veg Pizza. (27)</h3>
            </div>
            <div className="foods"></div>
          </div>
          <div className={veg ? "types" : "non-types"}>
            <div className="type-heading">
              <h3>Slice Non Veg Pizza. (24)</h3>
            </div>
            <div className="foods"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
