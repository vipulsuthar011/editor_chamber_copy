import { productshot } from "@/sources/assets/svg";
import TextImageGrid from "@/sources/components/TextImageGrid";
import Section from "@/sources/layout/Section";
import Image from "next/image";
import React from "react";

const ProductShot = () => {
  return (
    <Section
      id="productshoots"
      subHeading="Product Photography"
      heading="Showcase Your Product."
      className="min-h-screen z-30"
    >
      <TextImageGrid className="relative" order="sm:order-first order-last">
        <div className="flex flex-col gap-2">
          <span className="text-xl sm:text-2xl font-bold">
            Providing Picture Perfect Product Photo
          </span>
          <span className="">
            A professional product shoot is essential for selling products
            online.
            <br />
            <br />
            Level up your online product sales with captivating visuals! Our
            expert team captures & edit stunning images of your products against
            a flawless white backdrop, creating a visually appealing
            presentation on e-commerce platforms.
          </span>
          {/* <span className="mt-2 px-5 py-4 bg-[#849ba643] rounded-md cursor-pointer w-fit">
            View More
          </span> */}
        </div>
        <Image
          src={productshot}
          alt="Product Photography"
          className="sm:max-w-full max-w-[350px] w-full h-fit"
        />
      </TextImageGrid>
    </Section>
  );
};

export default ProductShot;
