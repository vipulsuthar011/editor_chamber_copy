import React from "react";
import Section from "../layout/Section";
import { services } from "../constant";
import ServicesCard from "../components/ServicesCard";
import { useRouter } from "next/router";

const Explore = () => {
  const router=useRouter()
  return (
    <div className="relative">
      <div className="gradient-02 z-0" />
      <Section
        id="explore"
        heading="What We Provide?"
        className="relative min-h-screen"
      >
        <div className="relative grid xl:grid-cols-4 md:grid-cols-3 ms:grid-cols-2 gap-5 mt-10">
          {/* <div className="flex flex-wrap gap-5 mt-10"> */}
          {services.map((elem) => {
            return <ServicesCard {...elem} key={elem.id} query={router}/>;
          })}
        </div>
      </Section>
    </div>
  );
};

export default Explore;
