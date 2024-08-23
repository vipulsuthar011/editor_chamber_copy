import { webdevelopment } from "@/sources/assets/svg";
import TextImageGrid from "@/sources/components/TextImageGrid";
import Section from "@/sources/layout/Section";
import Image from "next/image";
import Router from "next/router";
import React from "react";

const WebDevelopment = () => {
  return (
    <Section
      id="websites"
      subHeading="Web Development"
      heading="Premium Web Solutions."
      className="min-h-screen"
    >
      <TextImageGrid className="relative">
        <Image
          src={webdevelopment}
          alt="Web Development"
          className="sm:max-w-full max-w-[350px] w-full h-fit"
        />
        <div className="flex flex-col gap-2">
          <span className="text-xl sm:text-2xl font-bold">
            Static & Dynamic Website Building
          </span>
          <span className="">
            Are you looking to expand your online presence and grow your
            business?
            <br />
            <br />
            Look no further than creating your own website! Here at our company,
            we specialize in creating a variety of website types to suit your
            needs. Let us help you take your online presence to the next level
            and achieve your goals.
          </span>
          {/* <span
            className="mt-2 px-5 py-4 bg-[#849ba643] rounded-md cursor-pointer w-fit"
            onClick={() => Router.push("/web-development")}
          >
            View More
          </span> */}
        </div>
      </TextImageGrid>
    </Section>
  );
};

export default WebDevelopment;
