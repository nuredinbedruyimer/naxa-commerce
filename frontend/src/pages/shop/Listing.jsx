import { filterOptions, sortOptions } from "@/config";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect, useState } from "react";
import ProductFilter from "@/components/shop/ProductFilter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFilteredProducts } from "@/features/shop/shopSlice";
import ShoppingProductTile from "@/components/shop/ProductTile";
import { useSearchParams } from "react-router-dom";
import { createSearchParams } from "@/helpers/createQueryParame";

const ShopListing = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shoppingProducts);
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (filter !== null && sort !== null) {
      dispatch(
        fetchAllFilteredProducts({ filterParams: filter, sortParams: sort })
      );
    }
  }, [dispatch, filter, sort]);

  useEffect(() => {
    const queryString = createSearchParams(filter);
    console.log("Query String : ", queryString);
    setSearchParams(new URLSearchParams(queryString));
  }, [filter]);

  console.log("Fetched Shopping Product : ", products);

  const handleSort = (value) => {
    console.log("Sorted Value Staff : ", value);
  };
  function handleFilter(getSectionID, getCurrentOptions) {
    console.log("Filter Handler : ", getCurrentOptions, getSectionID);
    let copyFilters = { ...filter };

    const indexOfCurrentSection =
      Object.keys(copyFilters).indexOf(getSectionID);

    if (indexOfCurrentSection === -1) {
      copyFilters = {
        ...copyFilters,
        [getSectionID]: [getCurrentOptions],
      };
    } else {
      const indexOfCurrentSection =
        copyFilters[getSectionID].indexOf(getCurrentOptions);

      if (indexOfCurrentSection === -1) {
        copyFilters[getSectionID].push(getCurrentOptions);
      } else {
        copyFilters[getSectionID].splice(indexOfCurrentSection, 1);
      }
    }
    setFilter(copyFilters);
    sessionStorage.setItem("filters", JSON.stringify(copyFilters));

    console.log("I have right also : ", JSON.stringify(copyFilters));
  }

  useEffect(() => {
    setSort("price-lowtohigh");
    setFilter(JSON.parse(sessionStorage.getItem("filters")));
  }, []);

  return (
    <div className="m-10 flex justify-between gap-6">
      <ProductFilter filter={filter} handleFilter={handleFilter} />
      <div className="w-full">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-extrabold">All Products</h2>
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {products.length} Products
            </span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <ArrowUpDown className="h-4 w-4" />
                  <span>Sort by</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px]">
                <DropdownMenuRadioGroup value={sort} onValueChange={handleSort}>
                  {" "}
                  {sortOptions.map((sortItem) => (
                    <DropdownMenuRadioItem
                      value={sortItem.id}
                      key={sortItem.id}
                    >
                      {sortItem.label}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ShoppingProductTile product={product} key={product?.title} />
            ))
          ) : (
            <h1 className="text-xl font-extrabold text-lime-500">
              No Producct Is Available
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopListing;
