import Image from "next/image";
import Tilt from "react-parallax-tilt";

const ShowCaseCard = ({ data }) => {
  const { title, desc, icon, className } = data;

  return (
    <Tilt className="relative border-2 rounded-xl border-solid w-full flex flex-col items-center py-3 overflow-hidden group">
      <div
        className={`w-[70px] h-[70px] group-hover:h-[120px] group-hover:w-[120px] top-10 duration-300 absolute rounded-full blur-3xl -z-10 ${className}`}
      />
      <div className="text-center p-5 mt-2">
        <Image src={icon} alt={title} width={60} height={60} />
        <div className="text-xl font-bold tracking-wider mt-3">{title}</div>
        <div className="mt-5 text-sm">{desc}</div>
      </div>
    </Tilt>
  );
};

export default ShowCaseCard;
