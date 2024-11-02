import { shoppingPageMenuItems } from "@/config";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const ShoppingMenuItems = () => {
  return (
    <div className="flex flex-col lg:mb-0 lg:items-center lg:flex-row gap-6">
      {shoppingPageMenuItems.map((shopItem, index) => (
        <NavLink
          className={({ isActive }) =>
            `text-sm font-semibold hover:text-blue-500 ${
              isActive ? "text-blue-500" : "text-black"
            }`
          }
          key={index}
          to={shopItem?.path}
        >
          {shopItem.label}
        </NavLink>
      ))}
    </div>
  );
};

export default ShoppingMenuItems;
