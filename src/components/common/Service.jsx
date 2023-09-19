import React from "react";
import Button from "./Button";
import { rightArrow } from "../../assets";
import { motion } from "framer-motion";
import { fadeAnimation, scaleAnimation } from "../../assets/utils/animations";

export default function Service({ icon, title, description, price }) {
  return (
    <motion.div
      initial={fadeAnimation.initial}
      whileInView={fadeAnimation.animate}
      transition={fadeAnimation.transition}
      className="bg-primary-color-50 border-2 flex-1 max-w-fit min-w-[320px] border-primary-color p-10 rounded-md flex flex-col items-start gap-6"
    >
      <img src={icon} className="w-16 brightness-90" alt="Websites" />
      <div className="flex flex-col gap-2">
        <h3 className="brightness-90 text-2xl font-poppinsMedium">{title}</h3>

        <p className="text-sm brightness-90 leading-loose">{description}</p>

        <span className="brightness-90 text-md">Preço Base: {price}</span>
      </div>

      <Button className="bg-white mt-3">
        <span className="text-primary-color text-sm font-poppinsMedium">
          Solicitar
        </span>
        <img className="w-4" src={rightArrow} alt="" />
      </Button>
    </motion.div>
  );
}
