import css from "./Divider.module.css";

const Divider = ({ text, className, style, direction }) => {
  if (direction === "vertical") {
    return (
      <>
        <div
          style={style}
          className={`border border-solid w-0 border-[#3f3f3f] h-full ${className}`}
        ></div>
      </>
    );
  }
  return (
    <div
      className={`${css.textDivider} ${className} `}
      style={text ? style : { "--textDivider-gap": 0 }}
    >
      {text}
    </div>
  );
};

export default Divider;
