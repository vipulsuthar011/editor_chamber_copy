import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  Youtube,
  Instagram,
  Twitter,
  Whatsapp,
  Gmail,
  Linkedin,
} from "../assets/svg";

const SocialMedia = (props) => {
  const data = [
    {
      icon: Instagram,
      label: "Instagram",
      path: "https://instagram.com/editorschamber",
    },
    {
      icon: Linkedin,
      label: "Linkedin",
      path: "https://linkedin.com/in/editorschamber",
    },
    // {
    //   icon: Youtube,
    //   label: "Youtube",
    //   path: "https://youtube.com",
    // },
    {
      icon: Facebook,
      label: "Facebook",
      path: "https://facebook.com/editorschamber",
    },
    {
      icon: Twitter,
      label: "Twitter",
      path: "https://twitter.com/editorschamber",
    },
    {
      icon: Whatsapp,
      label: "Whatsapp",
      path: "https://wa.me/918619981035", // can add initial text as ?text=example
    },
    {
      icon: Gmail,
      label: "Gmail",
      path: "mailto:editorschamberindia@gmail.com",
    },
  ];
  return (
    <div className="flex items-center sm:gap-3 gap-2">
      {data.map((elem, i) => {
        return (
          <div key={i} className="z-40">
            <Link target="_blank" href={elem.path} className="cursor-pointer">
              <Image
                src={elem.icon}
                className="md:w-[40px] w-[30px] md:h-[40px] h-[30px]"
                alt={elem.label}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SocialMedia;
