import { useState, useEffect } from "react";
import { MENU_API1, MENU_API2 } from "./Constant";

export const useFetchApi = (resId) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchApi(resId);
  }, []);

  const fetchApi = async (urlID) => {
    const data = await fetch(MENU_API1 + urlID + MENU_API2);
    const json = await data.json();

    setMenu(json.data.cards);
  };

  return menu;
};
