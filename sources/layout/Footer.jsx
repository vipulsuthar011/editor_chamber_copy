import React from "react";
// import { AiOutlineCopyrightCircle } from "react-icons/ai";
// import { socialmedia } from "../constants";
import Image from "next/image";
import { IoLocationSharp } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai';
import Link from "next/link";
// import { container2 } from "../assets";



const Footer = () => {
  return (
    // <footer className="text-black border-t px-5 py-4 flex sm:justify-between items-center gap-3 flex-col sm:flex-row mt-5">
    //   <span className="text-sm flex items-center gap-1">
    //     <AiOutlineCopyrightCircle size={18} />
    //     cosovo 2023
    //   </span>
    //   <span className="flex items-center gap-3">
    //     {socialmedia.map((elem) => (
    //       <div
    //         key={elem.id}
    //         className="bg-[#00000025] p-2 rounded-full cursor-pointer group"
    //       >
    //         {elem.icon}
    //       </div>
    //     ))}
    //   </span>
    // </footer>


    <footer className=" bg-neutral-800 border-t  py-4 flex justify-between pt-16 px-16 max-sm:px-0 max-lg:flex-col   ">
      {/* left section */}
      <div className="w-[500px] max-lg:min-w-[300px] max-lg:flex max-lg:justify-between items-center max-lg:w-auto max-lg:mb-12 max-sm:flex-col ">
        {/* logo */}
        <div className="">
        <span
            className="font-extrabold sm:text-[24px]  leading-[30px] text-white cursor-pointer flex items-center gap-2"
            onClick={() =>
              router.asPath === "/" ? navigate("front") : router.push("/")
            }
          >
            <Image
              src={"/logo.svg"}
              alt="Editors Chamber Logo"
              width={40}
              height={40}
            />
            <span className="border-0 border-b-4 border-solid border-[#ebce5b]">
              EDITORS CHAMBER
            </span>
          </span>
        </div>

        {/* description */}
        <div className="mt-5 max-lg:flex flex-col items-center text-sm ">
          {/* location */}
          <div className="flex  items-start ">
            <IoLocationSharp className=" mr-2" size={20} />
            <div className="cursor-pointer">403, 4th Floor, City Centre, Shastri Circle, Ashok Nagar, Udaipur, Rajasthan 313001</div>
          </div>
          {/* email */}
          <div className="flex mt-4 flex-col ">
            <Link href="tel:918619981035">
            <div className="flex">
              <BsTelephoneFill className="mt-1 mr-2" />
              <div className="cursor-pointer">+918619981035</div>
            </div>
            </Link>
            <Link href="mailto:contact@editorchamber.com">
            <div className="flex mt-4">

              <AiOutlineMail className="mt-1 mr-2 " />
              <div className="cursor-pointer">contact@editorchamber.com</div>
            </div>
              </Link>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className="w-full flex flex-col pl-24 max-lg:flex-col max-lg:pl-0">
        {/* categories */}
        <span className=" text-left font-semibold mt-3 mb-5 inline-block uppercase w-max max-sm:w-auto max-sm:inline max-sm:text-center  ">
      <div className="inline-block border-0 border-b-4 border-solid border-[#ebce5b]">Services</div>
        </span>

      <div className="grid grid-cols-3 gap-8 text-sm text-[#D1D1D1] max-sm:grid-cols-1 ">
          {/* category 1 */}
          <div className="text-left max-sm:text-center ">
          {/* sub category */}
          <div className="mt-1 cursor-pointer hover:text-white duration-300">E-commerce Management</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Website Development</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">App Development</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">UI/UX Designs</div>
        </div>
        {/* category 2 */}
        {/* <div className=" inline-block max-lg:ml-0 max-lg:mt-8 max-lg:text-center"> */}
        <div className="text-left max-sm:text-center">

          <div className="mt-1 cursor-pointer hover:text-white duration-300">Social Media Managment</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Product Photography</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Graphics Designing</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Video Editing</div>
        </div>
        {/* <div className=" inline-block max-lg:ml-0 max-lg:mt-8 max-lg:text-center"> */}
        <div className="text-left max-sm:text-center">

          <div className="mt-1 cursor-pointer hover:text-white duration-300">Digital Marketing</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Search Engine Optimization</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Digital QR Menu</div>
          <div className="mt-1 cursor-pointer hover:text-white duration-300">Branding & Couslling</div>
        </div>


        {/* category 2 */}
        <div >
          {/* <div className="font-semibold mb-2">"</div> */}
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
