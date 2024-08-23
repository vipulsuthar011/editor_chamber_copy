import React from "react";

const PageDescription = ({ text, children }) => {
  return (
    <div
      className={`max-w-4xl text-center mx-auto text-[#dcdcdc] ${children && "flex flex-col gap-5"}`}
    >
      {text || children}
    </div>
  );
};

export default PageDescription;
