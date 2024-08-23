import Script from "next/script";

const LordIcon = ({
  src,
  trigger,
  delay,
  scriptSrc,
  style,
  width,
  height,
  colors,
  className,
}) => {
  return (
    <>
      <Script src={scriptSrc || "https://cdn.lordicon.com/bhenfmcm.js"} />

      <lord-icon
        src={src}
        class={className}
        trigger={trigger || "hover"}
        delay={delay || "1000"}
        colors={colors}
        style={{
          width: width || "100px",
          height: height || "100px",
          ...style,
        }}
      />
    </>
  );
};

export default LordIcon;
