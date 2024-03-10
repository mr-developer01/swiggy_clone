import React from "react";

const VegMenuCard = () => {
  return (
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
            <div
              key={data.card.info.id}
              className="w-full h-56 border-b border-black flex justify-between items-center"
            >
              <div className="w-[70%] bg-white">
                <p className="text-sm font-bold text-orange-500">
                  {data.card.info.category}
                </p>
                <h3 className="text-lg font-bold">{data.card.info.name}</h3>
                <h5 className="text-base font-semibold">
                  RS.{data.card.info.price / 100}
                </h5>
                <p className="text-base mt-4">{data.card.info.description}</p>
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
  );
};

export default VegMenuCard;
