import { filterOptions } from "@/config";
import { Checkbox } from "../ui/checkbox";
import React from "react";

const ProductFilter = () => {
  return (
    <div className="bg-gray-100 max-w-md shadow-sm rounded-lg p-4">
      <div className="p-4 border-b border-blue-700">
        <h2 className="text-lg font-extrabold text-black ">Filters</h2>
      </div>
      <div>
        {Object.keys(filterOptions).map((filterItem) => {
          return (
            <div key={filterItem.id}>
              <div className="text-lime-500 text-md text-center font-bold">
                {filterItem.toUpperCase()}
              </div>
              <div className="grid grid-cols-2">
                {filterOptions[filterItem].map((option) => {
                  return (
                    <div className="flex gap-3 items-baseline">
                      <Checkbox className="" />
                      <span className="text-sm font-bold text-gray-900">
                        {option.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductFilter;
