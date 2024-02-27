import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [jsonData, setJsonData] = useState([]);
  const [cardData, setcardData] = useState([]);

  console.log(jsonData);

  const [trueVal, setTrueVal] = useState(true);
  const [ratedCard, setRatedCard] = useState("Get 4 star above cards");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9122238&lng=77.5923219"
    );
    const json = await data.json();
    // Optional Chaining:--
    setJsonData([
      ...json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
    setcardData([
      ...json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants,
    ]);
  };

  return jsonData.length === 0 ? (
    <div className="loader">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="body">
        <div className="body-top">
          <h1 className="body-heading">
            Restaurants with online food delivery in Bangalore
          </h1>
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = jsonData.filter((data) => {
                return data.info.avgRating > 4.4;
              });
              setTrueVal((prev) => !prev);
              if (trueVal) {
                setJsonData(filterData);
              } else {
                setJsonData(cardData);
              }
            }}
          >
            {ratedCard === "Get 4 star above cards"
              ? "Get all cards"
              : "Get 4 star above cards"}
          </button>
        </div>
        <div className="wrapper">
          {jsonData.map((resData) => (
            <ResCard
              key={resData.info.id}
              name={resData.info.name}
              rating={resData.info.avgRating}
              cuisines={resData.info.cuisines}
              cloudinaryImageId={resData.info.cloudinaryImageId}
              areaName={resData.info.areaName}
              aggregatedDiscountInfoV3={resData.info.aggregatedDiscountInfoV3}
              costForTwo={resData.info.costForTwo}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
