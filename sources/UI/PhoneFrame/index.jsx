import React from "react";
import css from "./index.module.css";

const PhoneFrame = ({ src, label }) => {
  return (
    <div className={`${css.smartphone} shadow-xl`}>
      <div className={css.content}>
        {src ? (
          <iframe className={css.iframe} title={label} src={src}></iframe>
        ) : (
          <div className="flex items-center justify-center h-full">{label}</div>
        )}
      </div>
    </div>
  );
};

export default PhoneFrame;
