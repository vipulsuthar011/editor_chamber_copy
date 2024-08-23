import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

const ContactBtn = ({ call, whatsapp, email, all }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-2">
      {(all || call) && (
        <Link
          href="tel:+91 8619981035"
          target="_blank"
          className="bg-[#ffffffd8] hover:bg-[#ffffff] p-3 rounded-md shadow outline-none border-none flex items-center gap-2 cursor-pointer duration-300 text-black"
        >
          <FcPhone className="text-xl" />
          <span>Call</span>
        </Link>
      )}

      {(all || whatsapp) && (
        <Link
          href="https://wa.me/918619981035"
          target="_blank"
          className="bg-[#ffffff18] hover:bg-[#ffffff20] p-3 rounded-md shadow outline-none border-none flex items-center gap-2 cursor-pointer duration-300"
        >
          <BsWhatsapp className="text-xl text-[#61ebb6]" />
          <span className="text-white">Whatsapp</span>
        </Link>
      )}

      {(all || email) && (
        <Link
          href="mailto:editorschamberindia@gmail.com"
          target="_blank"
          className="bg-[#e62121b7] hover:bg-[#e62121] p-3 rounded-md shadow outline-none border-none flex items-center gap-2 cursor-pointer duration-300 text-white"
        >
          <MdEmail className="text-xl" />
          <span>Email</span>
        </Link>
      )}
    </div>
  );
};

export default ContactBtn;
