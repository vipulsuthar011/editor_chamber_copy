import { socialmediabanner } from "@/sources/assets/images";
import ShowCaseCard from "@/sources/components/ShowCaseCard";
import SubscriptionBox from "@/sources/components/SubscriptionBox";
import { socialmediainfo, socialmediapricing } from "@/sources/serviceConstant";
import Metadata from "@/sources/layout/Metadata";
import Section from "@/sources/layout/Section";
import SocialMediaHandler from "@/sources/sections/services/SocialMediaHandler";
import Image from "next/image";

const SocialMediaManagement = ({ nameContent }) => {
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
          {socialmediainfo.map((elem) => {
            return <ShowCaseCard data={elem} key={elem.id} />;
          })}
        </div>
      </Section>

      <SocialMediaHandler />

      <Section heading="Choose Pricing Plans" className="text-center mb-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 text-start my-5">
          {socialmediapricing.map((elem, ind) => {
            return <SubscriptionBox key={ind} data={elem} />;
          })}
        </div>
      </Section>
    </>
  );
};

export async function getStaticProps() {
  const nameContent = {
    title: "Social Media Account Management & Marketing Services in Udaipur",
    keywords: "Facebook Marketing, Google Marketing, LinkedIn Marketing, YouTube Marketing, Instagram Marketing, Instagram account handle, Social Media Account manager, Instagram post reel story creator, Graphic designer",
   description: "Connect with more customers | developed social media strategy for your business helps to foster the relationships between your brand and your customers.",
    subject: "Social Media Account Management",
    revised: Date.now(),
    topic: "Social Media Account Management",
    summary: "Connect with more customers | developed social media strategy for your business helps to foster the relationships between your brand and your customers.",
    category: "Account Management",
    "og:title": "Social Media Account Management & Marketing Services in Udaipur",
    "og:type": "Account Management",
    "og:url": "https://editorschamber.com/social-med",
    "og:image": "",
    "og:description": "Connect with more customers | developed social media strategy for your business helps to foster the relationships between your brand and your customers.",
  };

  return {
    props: {
      nameContent,
    },
  };
}

export default SocialMediaManagement;
