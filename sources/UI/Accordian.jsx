import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import { RxExternalLink } from "react-icons/rx";

const Accordion = ({ data, setSelected }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const variants = {
    open: { height: "auto" },
    closed: { height: 0 },
  };

  const handleChange = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
    activeIndex !== index &&
      setSelected({
        link: data[index].link,
        label: data[index].name,
      });
  };

  return (
    <div className="rounded-[10px] overflow-hidden w-full h-fit">
      {data
        .map((item, index) => (
          <div
            key={index}
            className={`border-0 border-[#ffffff00] border-solid ${
              index === data.length - 1 ? "border-b-0" : "border-b-4"
            }`}
          >
            <div
              className={`flex items-center justify-between p-4 text-[15px] font-medium text-left cursor-pointer ${
                activeIndex === index ? "bg-[#272727]" : "bg-[#393939]"
              }`}
              onClick={() => handleChange(index)}
            >
              <span>{item.name}</span>
              <IoIosArrowDown
                className={`
                ${activeIndex === index && "rotate-180"}  duration-300`}
              />
            </div>
            <motion.div
              className="overflow-hidden bg-[#121212]"
              variants={variants}
              initial="closed"
              animate={activeIndex === index ? "open" : "closed"}
            >
              <div className="flex flex-col gap-3 p-4">
                <p className="text-[14px] text-[#2e75ac]">
                  {item?.tags?.map((elem) => (
                    <span key={elem}>#{elem} </span>
                  ))}
                </p>
                <p className="text-[14px]">{item.description}</p>
                <div className="flex items-center text-2xl gap-2">
                  {item.github && (
                    <FaGithubSquare
                      className="cursor-pointer"
                      onClick={() => window.open(item.github)}
                    />
                  )}
                  {item.link && (
                    <RxExternalLink
                      className="cursor-pointer"
                      onClick={() => window.open(item.link, "_blank")}
                    />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;
