import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../constant";

const TextImageGrid = ({ children, className, order }) => {
  return (
    <div
      className={`grid sm:grid-cols-2 grid-cols-1 lg:gap-20 gap-10 items-center z-10 mt-10 ${className}`}
    >
      <motion.div
        variants={fadeIn("left", "twin", 0.3, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className={`${order} mx-auto`}
      >
        {children[0]}
      </motion.div>
      <motion.div
        variants={fadeIn(
          "right",
          "spring",
          0.3,
          0.5,
          children[1].type !== "div" && "-45deg"
        )}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {children[1]}
      </motion.div>
    </div>
  );
};

export default TextImageGrid;
