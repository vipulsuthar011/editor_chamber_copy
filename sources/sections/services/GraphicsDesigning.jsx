import { graphicsdesign } from "@/sources/assets/svg";
import TextImageGrid from "@/sources/components/TextImageGrid";
import Section from "@/sources/layout/Section";
import Image from "next/image";
import React from "react";

const GraphicsDesigning = () => {
  return (
    <Section
      id="graphicdesign"
      subHeading="Graphics Designing"
      heading="Creative Visual Solutions!"
      className="min-h-screen z-30"
    >
      <TextImageGrid>
        <Image
          src={graphicsdesign}
          alt="Social Media Handling"
          className="sm:max-w-full max-w-[350px] w-full h-fit"
        />

        <div className="flex flex-col gap-2">
          <span className="text-xl sm:text-2xl font-bold">
            Design. Elevate. Impact.
          </span>
          <span className="">
            Elevate your brand and reach your target audience with our expert
            graphic design services.
            <br />
            <br />
            {`From striking logos to engaging social media posts,
            attention-grabbing banners, informative flyers, and sleek label
            designs, we've got it all covered. So, why are you still waiting?`}
          </span>
          {/* <span className="mt-2 px-5 py-4 bg-[#849ba643] rounded-md cursor-pointer w-fit">
            View More
          </span> */}
        </div>
      </TextImageGrid>
    </Section>
  );
};
export default GraphicsDesigning;
