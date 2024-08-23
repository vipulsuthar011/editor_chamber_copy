import React from "react";

const PageHeading = ({ text, className }) => {
  return (
    <div className={`text-4xl font-bold text-center ${className}`}>{text}</div>
  );
};

export default PageHeading;
