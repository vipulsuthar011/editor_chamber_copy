import React, { useContext, useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import Sidebar from "./Sidebar";
import { Theme } from "../context/ThemeProvider";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { mainPages } from "../constant";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { navigate } = useContext(Theme);
  const router = useRouter();
  const [current, setCurrent] = useState("front");

  return (
    <div id="navbar" className="z-50 fixed w-full">
      <nav className="p-3 relative z-50 bg-[#151515]">
        <div className={`max-auto flex justify-between items-center gap-8`}>
          <span
            className="font-extrabold sm:text-[24px] leading-[30px] text-white cursor-pointer flex items-center gap-2"
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

          <div className="flex items-center gap-5">
            {router.asPath === "/" && (
              <div className="md:flex hidden items-center text-center">
                {mainPages.map((elem) => {
                  return (
                    <div
                      key={elem.id}
                      className="py-3 w-[100px] rounded-md hover:bg-[#ffffff21] cursor-pointer duration-300"
                      style={{
                        color: elem.id === current ? "white" : "#c9c9c9",
                      }}
                      onClick={() => {
                        setCurrent(elem.id);
                        navigate(elem.id);
                      }}
                    >
                      {elem.text}
                    </div>
                  );
                })}
              </div>
            )}
            {router.asPath === "/" ? (
              <div
                className="text-[25px] hover:bg-[#55698a56] rounded-full flex items-center justify-center w-[40px] h-[40px] duration-300 cursor-pointer"
                onClick={() => setOpen((prev) => !prev)}
              >
                <CgMenuGridO className="thememain" />
              </div>
            ) : (
              <Link
                href="/"
                className="text-inherit decoration-transparent flex items-center gap-2 cursor-pointer"
              >
                <IoReturnUpBackOutline fontSize={"20px"} />
                Home
              </Link>
            )}
          </div>
        </div>
      </nav>

      <Sidebar open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
