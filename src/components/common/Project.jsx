import { motion } from "framer-motion";
import React, { useState } from "react";
import { scaleAnimation } from "../../assets/utils/animations";

export default function Project({ image, alt, title, description }) {
  const [overlay, setOverlay] = useState(false);

  return (
    <motion.div
      initial={scaleAnimation.initial}
      whileInView={scaleAnimation.animate}
      transition={scaleAnimation.transition}
      onMouseOver={() => setOverlay(true)}
      onMouseOut={() => setOverlay(false)}
      className="project rounded-lg relative flex-1 h-80 min-w-[320px] shadow-lg shadow-[#00000050]"
    >
      <img
        src={image}
        className="object-cover brightness-[78%] w-full h-full rounded-lg"
        alt={alt}
      />

      <div
        className={`w-full h-80 rounded-md items-start top-0 left-0 absolute bg-gradient-to-t from-[#0c1411] to-[#00000020] ${
          overlay ? "opacity-100" : "opacity-0"
        } transition duration-150`}
      >
        <div className="w-full h-80 items-start relative">
          <div className="absolute p-4 bottom-3 flex flex-col gap-3">
            <h2 className="text-xl font-poppinsSemiBold brightness-90">
              {alt}
            </h2>

            <span className="text-xs leading-relaxed text-gray-400 brightness-90">
              {description}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
