import React from "react";
import Button from "./Button";
import { rightArrow } from "../../assets";

export default function Service({ icon, title, description, price }) {
  return (
    <div className="bg-primary-color-50 border-2 flex-1 max-w-fit border-primary-color p-10 rounded-md flex flex-col items-start gap-6">
      <img src={icon} className="w-16 brightness-90" alt="Websites" />
      <div className="flex flex-col gap-2">
        <h3 className="brightness-90 text-2xl font-poppinsMedium">{title}</h3>

        <span className="text-sm brightness-90">{description}</span>

        <span className="brightness-90 text-md">Basic Price: {price}</span>
      </div>

      <Button className="bg-white mt-3">
        <span className="text-primary-color text-sm font-poppinsMedium">
          Buy
        </span>
        <img className="w-4" src={rightArrow} alt="" />
      </Button>
    </div>
  );
}
