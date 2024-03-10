import { useState } from "react";

export const useAllMenuCards = (resData) => {

  const allFilterData = resData.filter((data) => {
    return data.card.card.itemCards != null
  })

  return allFilterData;
}

export const useAllVegMenuCards = (cardHavingMenus) => {

  const allFilterData = cardHavingMenus.filter((data) => {
    return data.card.info.isVeg != null;
  })

  return allFilterData;
}

export const useAllNonVegMenuCards = (cardHavingMenus) => {

  const allFilterData = cardHavingMenus.filter((data) => {
    return data.card.info.isVeg == null;
  })

  return allFilterData;
}