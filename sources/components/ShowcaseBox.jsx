import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

const ShowcaseBox = ({ data }) => {
  const { links, image, label } = data;
  const [hover, setHover] = useState(false);
  return (
    <div
      className="relative h-fit max-w-[400px] min-w-[300px] rounded-xl overflow-hidden flex items-center justify-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={image}
        alt="Resume Website"
        className={`w-[100%] h-[100%] duration-300 ${hover && "brightness-50"}`}
        width={500}
      />

      {hover && (
        <div
          className={`absolute ${
            (!links || links.length !== 0) && "top-5"
          } text-xl font-semibold drop-shadow-md`}
        >
          {label}
        </div>
      )}

      {hover && links && links.length !== 0 && (
        <div className="absolute flex items-center gap-2">
          {links.map((elem, ind) => {
            return (
              <Link
                href={elem.path}
                target="_black"
                key={ind}
                className="hover:bg-[#ffffff4b] text-2xl w-10 h-10 flex items-center justify-center rounded-full duration-300 cursor-pointer text-white"
              >
                {elem.icon}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ShowcaseBox;
