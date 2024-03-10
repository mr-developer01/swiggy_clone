import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import ResCard, { promotedRes } from "./ResCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [jsonData, setJsonData] = useState([]);
  const [cardData, setcardData] = useState([]);

  // console.log(jsonData, "card Data");

  const [trueVal, setTrueVal] = useState(true);
  const [ratedCard, setRatedCard] = useState("Get 4 star above cards");
  const [searchText, setSearchText] = useState("");

  const ResPromoedCard = promotedRes(ResCard);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9715987&lng=77.5945627"
    );
    const json = await data.json();
    console.log(json);
    // Optional Chaining:--
    setJsonData(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setcardData(
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const getInternetStatus = useOnlineStatus();

  if (getInternetStatus === false) {
    return (
      <h1 className="online-status">Hey, It looks like you are offline!!</h1>
    );
  }

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
          <div className="search">
            <input
              className="search-box"
              placeholder="Search Restro By Name"
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => {
                const seachRes = cardData.filter((data) => {
                  return data.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                });
                setJsonData(seachRes);
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filterData = jsonData.filter((data) => {
                return data.info.avgRating > 4.4;
              });
              ratedCard === "Get 4 star above cards"
                ? setRatedCard("Get all cards")
                : setRatedCard("Get 4 star above cards");
              setTrueVal((prev) => !prev);
              if (trueVal) {
                setJsonData(filterData);
              } else {
                setJsonData(cardData);
              }
            }}
          >
            {ratedCard}
          </button>
        </div>
        <div className="wrapper">
          {jsonData.map((resData) => (
            <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}>
              {resData.info.promoted ? (
                <ResPromoedCard
                  name={resData.info.name}
                  rating={resData.info.avgRating}
                  cuisines={resData.info.cuisines}
                  cloudinaryImageId={resData.info.cloudinaryImageId}
                  areaName={resData.info.areaName}
                  aggregatedDiscountInfoV3={
                    resData.info.aggregatedDiscountInfoV3
                  }
                  costForTwo={resData.info.costForTwo}
                />
              ) : (
                <ResCard
                  name={resData.info.name}
                  rating={resData.info.avgRating}
                  cuisines={resData.info.cuisines}
                  cloudinaryImageId={resData.info.cloudinaryImageId}
                  areaName={resData.info.areaName}
                  aggregatedDiscountInfoV3={
                    resData.info.aggregatedDiscountInfoV3
                  }
                  costForTwo={resData.info.costForTwo}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
