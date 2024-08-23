import { addtocart, productlisting } from "@/sources/assets/svg";
import { ecommerce } from "@/sources/assets/images";
import TextImageGrid from "@/sources/components/TextImageGrid";
import Section from "@/sources/layout/Section";
import Image from "next/image";
import React from "react";

const ProductListing = () => {
  return (
    <Section
      id="productlisting"
      subHeading="Ecommerce Product Listing"
      heading="Dominate Online Sales!"
      className="min-h-screen"
    >
      <TextImageGrid className="relative">
        <Image
          className="sm:max-w-full max-w-[350px] w-full h-fit"
          src={ecommerce}
          alt="Ecommerce Product Listing"
        />

        <div className="flex flex-col gap-2">
          <span className="text-xl sm:text-2xl font-bold">
            List products on Amazon, Flipkart, etc.
          </span>
          <span className="">
            We specialize in boosting your product visibility and sales on top
            e-commerce platforms like Amazon, Flipkart, Meesho, and more.
            <br />
            <br />
            {`So if you're looking to boost your sales and
            grow your business, look no further than our e-commerce listing and
            ranking services.`}
          </span>
          {/* <span className="mt-2 px-5 py-4 bg-[#849ba643] rounded-md cursor-pointer w-fit">
            View More
          </span> */}
        </div>
      </TextImageGrid>
    </Section>
  );
};

export default ProductListing;
