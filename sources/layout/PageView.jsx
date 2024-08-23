import React from "react";

const PageView = ({ children }) => {
  return (
    <div className="flex flex-col gap-5 sm:px-10 px-5 pb-10 pt-24">
      {children}
    </div>
  );
};

export default PageView;
