
import React, { useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueList = [...new Set(Menu.map((item) => item.category)), "All"];

function Restaurant() {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList] = useState(uniqueList);

  // Function to filter menu data based on category and search query
  const filterMenuData = (category, query) => {
    let filteredMenu = Menu;

    if (category !== "All") {
      filteredMenu = filteredMenu.filter((item) => item.category === category);
    }

    if (query) {
      const searchQuery = query.toLowerCase().trim();
      filteredMenu = filteredMenu.filter((item) =>
        item.name.toLowerCase().includes(searchQuery)
      );
    }

    setMenuData(filteredMenu);
  };

  return (
    <>
      <Navbar filterItem={filterMenuData} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
}

export default Restaurant;
