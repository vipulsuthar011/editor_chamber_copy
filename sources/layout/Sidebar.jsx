import React, { useContext, useState } from "react";
import LordIcon from "../components/LordIcon";
import { mainPages, services } from "../constant";
import { Theme } from "../context/ThemeProvider";
import { motion } from "framer-motion";

const Sidebar = ({ open, setOpen }) => {
  //   const [currentPage, setCurrentPage] = useState("front");
  const { navigate } = useContext(Theme);

  return (
    <motion.div
      initial={{ width: "0px", height: "0px", padding: "0px", opacity: 0 }}
      animate={
        open
          ? { width: "", height: "", padding: "", opacity: 1 }
          : { width: "0px", height: "0px", padding: "0px", opacity: 0 }
      }
      transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
      className="bg-[#ffffff0d] backdrop-blur-md shadow-xl border border-solid border-[#ffffff24] p-2 sm:w-[500px] w-[285px] rounded-lg absolute top-16 z-50 right-0 mx-7 overflow-y-hidden"
    >
      <div className="flex justify-between text-center md:hidden">
        {mainPages.map((elem) => {
          return (
            <div
              key={elem.id}
              className="py-4 w-full rounded-md hover:bg-[#ffffff21] cursor-pointer"
              onClick={() => navigate(elem.id)}
            >
              {elem.text}
            </div>
          );
        })}
      </div>

      <div className="bg-[#ffffff8a] my-4 mx-auto w-[90%] h-[1px] rounded-full md:hidden" />

      <div className="flex flex-wrap justify-center gap-3 h-[80vh] overflow-y-scroll">
        {services.map((elem) => {
          return (
            <div
              key={elem.id}
              className="p-3 rounded-md bg-[#ffffff27] cursor-pointer flex flex-col items-center sm:w-[120px] w-[100px] sm:h-[120px] h-[100px]"
              onClick={() => navigate(elem.id)}
            >
              <LordIcon
                src={elem.lordicon.src}
                colors={elem.lordicon.colors}
                width="100%"
                height="100%"
              />
              <span className="text-[12px]">{elem.text}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Sidebar;
