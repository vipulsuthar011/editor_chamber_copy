import React from "react";

const Money = ({ value, per, valueClassName, perClassName, className }) => {
  const formattedValue = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  }).format(value);

  return (
    <span className={className}>
      <span className={valueClassName}>{formattedValue}</span>
      <span className={`text-gray-400 ${perClassName}`}>
        {per && `/${per}`}
      </span>
    </span>
  );
};

export default Money;
