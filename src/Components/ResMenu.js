import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/Constant";
import {
  useAllMenuCards,
  useAllNonVegMenuCards,
  useAllVegMenuCards,
} from "../utils/useAllMenuCards";
import { useFetchApi } from "../utils/useFetchApi";

const ResMenu = () => {
  const { resId } = useParams();
  const [veg, setVeg] = useState(true);
  const [hideveg, setHideVeg] = useState(true);
  const [hidenonveg, setHideNonVeg] = useState(true);

  const resData = useFetchApi(resId);

  console.log(resData);

  if (resData.length === 0) {
    return <h1 style={{ marginTop: "10vh" }}>Loading Data....</h1>;
  }

  const allMenu = resData[5].groupedCard.cardGroupMap.REGULAR.cards;
  // console.log("AllMenu" , allMenu);

  const cardHavingMenus = useAllMenuCards(allMenu);
  console.log("CardsHavingAllMenu", cardHavingMenus);
  const cardAtZero = cardHavingMenus[0].card.card.itemCards;
  console.log("cardAtZero", cardAtZero);

  const vegRes = useAllVegMenuCards(cardAtZero);
  console.log("vegRes", vegRes);

  const nonVegRes = useAllNonVegMenuCards(cardAtZero);
  console.log("nonVegRes", nonVegRes);

  const {
    name,
    city,
    areaName,
    avgRating,
    cuisines,
    totalRatingsString,
    sla,
    feeDetails,
    costForTwoMessage,
  } = resData[2]?.card?.card?.info;
  const { lastMileTravelString, slaString } = sla;
  const { message } = feeDetails;
  const offerCards =
    resData[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
  console.log("OffersCars", offerCards);

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
          {offerCards.map((data) => (
            <div className="box" key={data?.info?.offerIds}>
              <h5>{data?.info?.header}</h5>
              <p>
                {data?.info?.couponCode} | {data?.info?.description}
              </p>
            </div>
          ))}
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
        <div className="p-3">
          <div className="types">
            <div className="type-heading">
              <div className="flex justify-between">
                <h3>Vegetarian Menu ( {vegRes.length})</h3>
                <button
                  onClick={() => {
                    setHideVeg((prev) => !prev);
                  }}
                  className="rounded border border-indigo-600 px-2"
                >
                  {hideveg ? "Hide Cards" : "Show Cards"}
                </button>
              </div>
            </div>
            <div className={hideveg ? "foods" : "non-types"}>
              {vegRes.map((data) => (
                <div key={data.card.info.id} className="w-full h-56 border-b border-black flex justify-between items-center">
                  <div className="w-[70%] bg-white">
                    <p className="text-sm font-bold text-orange-500">
                      {data.card.info.category}
                    </p>
                    <h3 className="text-lg font-bold">
                      {data.card.info.name}
                    </h3>
                    <h5 className="text-base font-semibold">RS.{data.card.info.price / 100}</h5>
                    <p className="text-base mt-4">
                      {data.card.info.description}
                    </p>
                  </div>
                  <div className="w-[18%] h-[70%] bg-white rounded-md flex flex-col items-center">
                    <img
                      className="w-full h-full rounded-md"
                      src={CDN_URL + data.card.info.imageId}
                      alt="koi img"
                    />
                    <button className=" bg-red-400 -mt-6 w-[80%] py-2 rounded-md text-white cursor-pointer">
                      Add To Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={veg ? "types" : "non-types"}>
            <div className="type-heading">
              <div className="flex justify-between">
                <h3>Non-Vegetarian Menu ( {nonVegRes.length} )</h3>
                <button
                  onClick={() => {
                    setHideNonVeg((prev) => !prev);
                  }}
                  className="rounded border border-indigo-600 px-2"
                >
                  {hidenonveg ? "Hide Cards" : "Show Cards"}
                </button>
              </div>
            </div>
            <div className={hidenonveg ? "foods" : "non-types"}>
              {nonVegRes.map((data) => (
                <div className="w-full h-56 border-b border-black flex justify-between items-center">
                <div className="w-[70%] bg-white">
                  <p className="text-sm text-orange-500 font-bold">
                    {data.card.info.category}
                  </p>
                  <h3 className="text-lg font-bold">
                  {data.card.info.name}
                  </h3>
                  <h5 className="text-base font-semibold">RS.{data.card.info.price / 100}</h5>
                  <p className="text-base mt-4">
                  {data.card.info.description}
                  </p>
                </div>
                <div className="w-[18%] h-[70%] bg-white rounded-md flex flex-col items-center">
                  <img
                    className="w-full h-full rounded-md"
                    src={CDN_URL + data.card.info.imageId}
                    alt="koi img"
                  />
                  <button className=" bg-red-400 -mt-6 w-[80%] py-2 rounded-md text-white cursor-pointer">
                    Add To Cart
                  </button>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
