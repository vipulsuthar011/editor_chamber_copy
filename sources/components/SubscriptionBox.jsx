import React, { Children } from "react";
import Money from "../UI/Money";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineCrown } from "react-icons/ai";
import Router from "next/router";

const SubscriptionBox = ({ data,children }) => {
  const { type, price, points, per, best } = data;
  // console.log(data)
  return (
    <div
      className={`relative ${
        best ? "bg-[#EBCE5B]" : "bg-black"
      } rounded-2xl overflow-hidden w-full flex flex-col justify-between`}
    >
      {best && (
        <div className="absolute p-2 px-3 right-0 bg-white text-black rounded-bl-2xl flex items-center gap-1">
          <AiOutlineCrown size={20} color="#b5a407" />
          Best Value
        </div>
      )}
      <div className="m-5">
        <div className="mb-4 uppercase">{type}</div>
        <Money
          value={price}
          per={per}
          valueClassName={`text-5xl font-bold ${
            best ? "text-black" : "text-[#EBCE5B]"
          }`}
          perClassName={`text-lg ${best && "text-[#e8e8e8]"}`}
        />

        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 mt-3">
          {points.map((e, i) => (
            <div
              key={i}
              className="bg-[#1e1e1e] px-2 rounded-full border border-solid border-[#515151] text-sm"
            >
              {e}
            </div>
          ))}
        </div>
      </div>

      <div className="m-5 mt-0">
        <button
          className="w-full py-4 rounded-lg bg-[#151515] hover:bg-[#202020] duration-300 text-white font-bold tracking-wider uppercase border-none outline-none cursor-pointer drop-shadow-md"
          onClick={() => window.open("https://wa.me/918619981035", "_blank")}
        >
          Subscribe
        </button>
      </div>
{children}
    </div>
  );
};

export default SubscriptionBox;
