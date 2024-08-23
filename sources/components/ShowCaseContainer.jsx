import React from "react";
import Divider from "../UI/Divider";

const ShowCaseContainer = ({ children, arrangementType }) => {
  return (
    <>
      <Divider text={"Showcase"} className="my-5 w-[300px] mx-auto" />

      <div
        className={
          arrangementType === "grid"
            ? "grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
            : "flex flex-wrap gap-5 justify-center"
        }
      >
        {children}
      </div>
    </>
  );
};

export default ShowCaseContainer;
