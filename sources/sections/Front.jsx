import React, { useContext, useState } from "react";
import Section from "../layout/Section";
import { Theme } from "../context/ThemeProvider";
import { BsWhatsapp } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";

const Front = () => {
  const [scrollClick, setScrollClick] = useState(false);
  const { navigate } = useContext(Theme);

  const handleScroll = () => {
    setScrollClick(true);
    navigate("explore");

    setTimeout(() => {
      setScrollClick(false);
    }, 3000);
  };

  return (
    <>
      <Section
        id="front"
        className="min-h-screen flex items-center z-20 justify-center relative"
      >
        {/* <div className="absolute z-0 w-[50%] h-[calc(50%-9px)] gradient-01 inset-0 opacity-70" /> */}

        <div className="grid md:grid-cols-2 grid-cols-1 md:items:center items-start gap-5 md:mt-0 mt-16">
          <div className="flex items-center justify-center mx-auto sm:max-w-[400px] max-w-[300px] min-w-[200px] md:order-1">
            <div className="bg-[#ffffff0f] rounded-full p-5 flex items-center justify-center relative">
              <Image
                src={"/logo-main.svg"}
                draggable={false}
                width={1000}
                height={1000}
                className="w-full h-full"
                alt="Services"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 my-auto">
            <span className="md:text-[60px] text-[40px]">
              Grow your
              <span className="font-bold hover:text-[#FFDE59] duration-300">
                {" "}
                Business{" "}
              </span>{" "}
              <br />
              With Us!
            </span>

            <span
              className="md:text-[16px] text-[12px] leading-5"
            >
              {`Welcome to Editors Chamber, We offer a range of digital services, including mobile app development, website creation, E-Commerce management, social media management , branding, video production, and digital marketing. Our experienced team will tailor solutions to boost your reach, sales, and efficiency.
`}
            </span>

            <div className="flex items-center flex-wrap gap-2 mt-4">
              <Link
                href={"https://wa.me/918619981035"}
                target="_blank"
                className="min-w-fit p-3 px-5 rounded-lg w-fit cursor-pointer bg-[#ffffff18] hover:bg-[#ffffff20] shadow-md hover:shadow-lg duration-300 flex items-center gap-2"
              >
                <BsWhatsapp color="#61ebb6" /> Contact Us
              </Link>
              <span
                onClick={() => Router.push("/social-media")}
                target="_blank"
                className="min-w-fit p-3 px-5 rounded-lg w-fit cursor-pointer bg-[#ebce5b] text-black hover:bg-[#ffffffbe] hover:text-black shadow-md hover:shadow-lg duration-300 flex items-center gap-2"
              >
                <FaUserFriends /> Get Started
              </span>
            </div>
          </div>
        </div>

        {/* <motion.div
          onClick={handleScroll}
          initial={{ y: 0 }}
          animate={scrollClick ? { y: 20, opacity: 0 } : { y: -20 }}
          exit={{ y: 0 }}
          transition={{
            repeat: Infinity,
            duration: 0.8,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 flex flex-col items-center cursor-pointer z-30"
        >
          <span>Explore</span>
          <RiArrowDownSLine className="text-[20px]" />
        </motion.div> */}

        {/* <div
        onClick={() => navigate("explore")}
        className="rounded-full absolute -bottom-16 -right-16 bg-red-600 w-40 h-40"
        >
        <MdOutlineExplore className="text-4xl absolute top-10 left-10" />
      </div> */}
      </Section>
    </>
  );
};

export default Front;
