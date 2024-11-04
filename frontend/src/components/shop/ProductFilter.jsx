import { filterOptions } from "@/config";
import { Checkbox } from "../ui/checkbox";
import React from "react";
import { Label } from "@radix-ui/react-label";

const ProductFilter = ({ filter, handleFilter }) => {
  return (
    <div className="bg-gray-100 min-w-48 max-w-48 h-fit shadow-sm rounded-lg p-4">
      <div className="p-4 border-b border-blue-700">
        <h2 className="text-lg font-extrabold text-black ">Filters</h2>
      </div>
      <div>
        {Object.keys(filterOptions).map((filterItem) => {
          return (
            <div key={filterItem.id}>
              <div className="text-lime-500 text-md  font-bold">
                {filterItem.toUpperCase()}
              </div>
              <div className="">
                {filterOptions[filterItem].map((option) => {
                  return (
                    <div className="flex gap-3 items-baseline" key={option.id}>
                      <Label>
                        <Checkbox
                          className=""
                          onCheckedChange={() =>
                            handleFilter(filterItem, option.id)
                          }
                          checked={
                            filter &&
                            Object.keys(filter).length > 0 &&
                            filter[filterItem] &&
                            filter[filterItem].indexOf(option.id) > -1
                          }
                        />
                      </Label>

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
