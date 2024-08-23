import { socialmedia } from "@/sources/assets/images";
import ListItem from "@/sources/components/ListItem";
import TextImageGrid from "@/sources/components/TextImageGrid";
import PageHeading from "@/sources/layout/PageHeading";
import Section from "@/sources/layout/Section";
import { socialmediaexplainlist } from "@/sources/serviceConstant";
import Image from "next/image";
import React from "react";

const SocialMediaHandler = () => {
  return (
    <TextImageGrid>
      <Image
        src={socialmedia}
        alt="Social Media Handling"
        className="sm:max-w-full max-w-[350px] w-full h-fit"
      />

      <div className="flex flex-col gap-2 px-10">
        <PageHeading
          text="How we work ?"
          className="text-start text-6xl text-[#EBCE5B]"
        />

        <div className="mt-2 flex flex-col gap-1">
          {socialmediaexplainlist.map((elem, ind) => {
            return <ListItem key={ind} text={elem} />;
          })}
          <div></div>
        </div>
      </div>
    </TextImageGrid>
  );
};
export default SocialMediaHandler;
