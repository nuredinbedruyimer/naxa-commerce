import { HousePlug, Menu } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import ShoppingMenuItems from "./ShoppingMenuItems";
import HeaderRightContent from "./HeaderRightContent";

const ShopHeader = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log("Is Auth : ", isAuthenticated);
  return (
    <header className="w-full z-40 sticky border-b bg-background">
      <div className="h-16 flex items-center justify-between px-8 md:px-10">
        <Link className="flex items-center gap-2" to="/shop/home">
          <HousePlug className="w-6 h-6" />
          <span className="text-xl font-bold text-lime-500">NAXA-Commerce</span>
        </Link>

        <Sheet>
          <SheetTrigger>
            <Button className="lg:hidden" variant="outline" size="icon">
              <Menu />
              <span className="sr-only"> Toggle The Hamburger Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <ShoppingMenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>

        <div className="hidden lg:block">
          <ShoppingMenuItems />
        </div>
        {isAuthenticated ? (
          <div className="hidden lg:block">
            <HeaderRightContent />
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default ShopHeader;
