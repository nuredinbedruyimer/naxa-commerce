import { LogOut, ShoppingBag, ShoppingCart, UserCog } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { Sheet } from "../ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "@/features/auth/authSlice";

function HeaderRightContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout()).then((response) => {
      console.log("Delete Response : ", response);
    });
  };
  // console.log("User Name : ", user)
  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="outline"
          size="icon"
          className="relative rounded-full"
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[2px] font-bold text-sm"></span>
          <span className="sr-only">User cart</span>
        </Button>
      </Sheet>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="bg-lime-500 h-8 w-8 flex justify-center items-center rounded-full cursor-pointer">
            <AvatarFallback className=" text-white font-extrabold">
              {user?.userName[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" className="w-56">
          <DropdownMenuLabel>
            Logged in as <span className="text-lime-500">{user?.userName}</span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default HeaderRightContent;
