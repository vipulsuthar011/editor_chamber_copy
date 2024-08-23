import React from "react";
import { motion } from "framer-motion";

const Section = ({
  id,
  children,
  className,
  style,
  heading,
  subHeading,
  description,
}) => {
  const fadeInVariant = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      style={style}
      id={id}
      className={`lg:px-20 md:px-10 px-5 relative ${className}`}
    >
      {heading && (
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          whileInView="show"
          transition={{
            type: "tween",
            duration: 0.5,
            delay: 0,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="sm:pt-20 pt-10 flex flex-col"
        >
          {subHeading && (
            <span className="uppercase text-sm">{subHeading}</span>
          )}
          <span className="lg:text-[50px] text-[35px] font-bold thememain">
            {heading}
          </span>
          {description && (
            <span className="mt-2 text-[16px] lg:w-[75%] text-[#d4d4d4]">
              {description}
            </span>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default Section;
