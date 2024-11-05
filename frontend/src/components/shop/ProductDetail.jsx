import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Star } from "lucide-react";
import { Input } from "../ui/input";

const ProductDetail = ({ open, setOpen, productDetail }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle>Title Here</DialogTitle>
      <DialogContent className="grid grid-cols-2 max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] sm:p-12 ">
        {/* This Is Left Part Of Grid */}
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={productDetail?.image}
            alt={productDetail?.title}
            width={600}
            height={600}
            className="object-cover aspect-square rounded-lg w-full"
          />
        </div>
        {/* This One Is The Right Side Of The Grid */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-lime-500">
              {productDetail?.title}
            </h1>
            <p className=" text-muted-foreground">
              {productDetail?.description}
            </p>
          </div>
          <div className="flex gap-3">
            <div className="flex gap-2">
              <Star className=" fill-primary" />
              <Star className=" fill-primary" />
              <Star className=" fill-primary" />
              <Star className=" fill-primary" />
              <Star />
            </div>
            <span className="text-md font-bold text-yellow-500">(4.5)</span>
          </div>
          <div className="w-full mb-4">
            <Button className="bg-lime-500 w-full hover:bg-lime-600">
              Add To Cart
            </Button>
          </div>
          <Separator className="mb-4" />
          <h1 className="text-md font-bold mb-6">Reviews</h1>
          <div className="flex items-start gap-4 overflow-hidden">
            <Avatar>
              <AvatarFallback className="w-10 h-10 rounded-full bg-lime-500  flex justify-center items-center">
                <span className="text-white text-md font-bold">N</span>
              </AvatarFallback>
              <AvatarImage />
            </Avatar>
            <div>
              <span className="text-md font-bold text-blue-400">
                Nuredin Bedru
              </span>
              <div className="flex gap-2">
                <Star className=" fill-primary" />
                <Star className=" fill-primary" />
                <Star className=" fill-primary" />
                <Star className=" fill-primary" />
                <Star />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
                voluptatum.
              </p>
            </div>
          </div>

          <div className="flex ">
            <Input className="rounded-none outline-none" />
            <Button className="rounded-none">Submit</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
