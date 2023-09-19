import React from "react";
import { motion } from "framer-motion";
import { fadeAnimation } from "../../assets/utils/animations";
export default function Text({ className, children }) {
  return (
    <motion.p
      initial={fadeAnimation.initial}
      whileInView={fadeAnimation.animate}
      transition={fadeAnimation.transition}
      className={`${className} brightness-75 text-white leading-loose`}
    >
      {children}
    </motion.p>
  );
}
