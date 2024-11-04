import { filterOptions, sortOptions } from "@/config";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useEffect } from "react";
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

const ShopListing = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.shoppingProducts);

  useEffect(() => {
    dispatch(fetchAllFilteredProducts());
  }, [dispatch]);

  console.log("Fetched Shopping Product : ", products);

  return (
    <div className="m-10 flex justify-between gap-6">
      <ProductFilter />
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
                <DropdownMenuRadioGroup>
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
            products.map((product) => <ShoppingProductTile product={product} />)
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
