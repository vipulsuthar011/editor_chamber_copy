import { qrmenu } from "@/sources/assets/svg";
import TextImageGrid from "@/sources/components/TextImageGrid";
import Section from "@/sources/layout/Section";
import Image from "next/image";
import React from "react";

const QRMenu = () => {
  return (
    <Section
      id="qrmenu"
      subHeading="QR Menu"
      heading="Set Your Menu on QR."
      className="min-h-screen z-30"
    >
      <div className="w-full flex justify-center">
        <div className="gradient-06 z-0" />
      </div>
      <TextImageGrid className="relative" order="sm:order-first order-last">
        <div className="flex flex-col gap-2">
          <span className="text-xl sm:text-2xl font-bold">
            Get Paperless Menu
          </span>
          <span className="">
            Did you know that going paperless and having a digital menu could
            help your restaurant or café business grow?
            <br />
            <br />
            We can help you transform your old menu cards into an advanced QR
            code menu. Simply put a QR code on each table and your customers can
            scan it to open your menu on their phone. Menu & Money - Save both
            the paper. Go digital and save the nature.
          </span>
          {/* <span className="mt-2 px-5 py-4 bg-[#849ba643] rounded-md cursor-pointer w-fit">
            View More
          </span> */}
        </div>
        <Image
          src={qrmenu}
          alt="Product Photography"
          className="sm:max-w-full max-w-[350px] w-full h-fit"
        />
      </TextImageGrid>
    </Section>
  );
};

export default QRMenu;
