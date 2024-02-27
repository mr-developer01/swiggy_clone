import React from "react";
import { CDN_URL } from "../utils/Constant";

const ResCard = ({
  name,
  rating,
  cuisines,
  cloudinaryImageId,
  areaName,
  aggregatedDiscountInfoV3,
  costForTwo
}) => {
  return (
    <div className="res-card">
      <div
        className="card-img"
        style={{
          backgroundImage: `url(${CDN_URL}${cloudinaryImageId})`,
        }}
      >
        <h2>{`${
          aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.header : ""
        } ${
          aggregatedDiscountInfoV3 ? aggregatedDiscountInfoV3.subHeader : ""
        }`}</h2>
      </div>
      <div className="cntnt">
        <h1>{name}</h1>
        <h3>Rating : {rating ? rating : "Not Abl"} Stars</h3>
        <h4>{costForTwo}</h4>
        <p>{cuisines.join(", ")}</p>
        <p>{areaName}</p>
      </div>
    </div>
  );
};

export default ResCard;
