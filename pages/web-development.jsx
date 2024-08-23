import { socialmediabanner } from "@/sources/assets/images";
import ShowCaseCard from "@/sources/components/ShowCaseCard";
import { webdevinfo } from "@/sources/serviceConstant";
import Metadata from "@/sources/layout/Metadata";
import Section from "@/sources/layout/Section";
import WebDevelopment from "@/sources/sections/services/WebDevelopment";
import Image from "next/image";
import React from "react";

const Page = ({ nameContent }) => {
  return (
    <>
      <Metadata nameContent={nameContent} />

      <Image
        src={socialmediabanner}
        className="w-full h-fit xl:-mt-16 lg:mt-0 mt-16"
        alt="Social Media Banner"
        loading="eager" 
      />

      <Section heading="Checkout our services" className="text-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 p-10 mx-auto max-w-[1200px]">
          {webdevinfo.map((elem) => {
            return <ShowCaseCard data={elem} key={elem.id} />;
          })}
        </div>
      </Section>

      <WebDevelopment />
    </>
  );
};

export async function getStaticProps() {
  const nameContent = {
    title: "Best Website Designer Company in Udaipur | Editors Chamber",
    keywords: "Ecommerce Website, Landing Page website, Portfolio Website, Web Application, hotel website, event website, business website, best website for business, coded website, wordpress website, SEO website",
    description: "Wordpress Website E-Commerce Website, Portfolio Website, Landing Page Website. We Specialize in creating a variety of website types to suit your Business.",
    subject: " ",
    revised: Date.now(),
    topic: "Website Designer Company in Udaipur",
    summary: "Wordpress Website E-Commerce Website, Portfolio Website, Landing Page Website. We Specialize in creating a variety of website types to suit your Business.",
    category: "website development",
    "og:title": "Best Website Designer Company in Udaipur | Editors Chamber",
    "og:type": "Website",
    "og:url": "https://editorschamber.com/website-development",
    "og:image": "",
    "og:description": "Wordpress Website E-Commerce Website, Portfolio Website, Landing Page Website. We Specialize in creating a variety of website types to suit your Business.",
  };

  return {
    props: {
      nameContent,
    },
  };
}

export default Page;
