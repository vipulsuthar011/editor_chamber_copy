import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import LordIcon from "./LordIcon";
import { Theme } from "../context/ThemeProvider";
import Router from "next/router";

const ServicesCard = ({ text, id, lordicon, path }) => {
  const [hover, setHover] = useState(false);
  const { navigate } = useContext(Theme);

  return (
    <motion.div
      initial={{
        x: -100,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          ease: "easeInOut",
        },
      }}
      // onClick={() => Router.push(path)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      viewport={{ once: true }}
      className="relative w-full h-[150px] bg-[#ffffff11] flex items-center justify-start md:text-sm text-[13px] rounded-xl backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer"
    >
      <LordIcon {...lordicon} />
      <div className="mr-5 flex flex-col gap-0.5 m-4">
        {text}
        <div
          className="h-[2px] bg-gradient-to-r from-[#ddddddc4] to-transparent duration-300"
          style={{ width: hover ? "100%" : "0%" }}
        ></div>
      </div>
    </motion.div>
  );
};

export default ServicesCard;
