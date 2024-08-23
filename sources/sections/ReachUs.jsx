import React, { useEffect, useState } from "react";
import Section from "../layout/Section";
import TextImageGrid from "../components/TextImageGrid";
import { motion } from "framer-motion";
import SocialMedia from "../components/SocialMedia";

const ReachUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const res = await db.collection("cities").doc("LA").set(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const temp = { ...prev };
      temp[name] = value;
      return temp;
    });
  };

  return (
    <Section
      id="reachus"
      className="min-h-screen z-30"
      subHeading="Get Connect"
      heading="Reach Us."
    >
      <TextImageGrid>
        <div className="flex flex-col gap-3 items-center justify-center">
          <span className="text-2xl font-semibold">Who We Are?</span>
          <span className="text-[#d1d1d1] text-center">
            {`Welcome to Editors Chamber, we specialize in product listings, web
            development, social media handling, product shoots, editing, graphic
            designing, and digital QR menu services.
            Take your online business to new heights with our professional
            solutions. Let's grow together!`}
          </span>
          <SocialMedia />
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="bg-[#00000037] shadow-xl p-5 rounded-xl flex flex-col gap-4"
          >
            <input type="hidden" value="something" />
            <span className="text-sm">SEND QUERY</span>
            <input
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-[calc(100%-24px)] border border-transparent px-3 py-3.5 bg-[#c1c1c114] rounded-md placeholder-[#9d9d9d] text-white shadow-md outline-none focus:border-[#9e9e9e70] duration-300"
            />
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-[calc(100%-24px)] border border-transparent px-3 py-3.5 bg-[#c1c1c114] rounded-md placeholder-[#9d9d9d] text-white shadow-md outline-none focus:border-[#9e9e9e70] duration-300"
            />
            <textarea
              onChange={handleChange}
              name="message"
              rows={7}
              placeholder="Your Message"
              className="w-[calc(100%-24px)] px-3 py-3.5 border border-transparent bg-[#c1c1c114] rounded-md placeholder-[#9d9d9d] text-white resize-none shadow-md outline-none focus:border-[#9e9e9e70] duration-300"
            />

            <motion.button
              // whileTap={{ scale: 0.9 }}
              initial={{ background: "#00000062" }}
              whileHover={{ background: "#0000009e" }}
              transition={{ type: "spring", duration: 0.3, ease: "easeInOut" }}
              type="submit"
              className="w-[160px] p-3 rounded-md border-none text-white shadow-md cursor-not-allowed"
            >
              Send
            </motion.button>
          </form>
        </div>
      </TextImageGrid>
    </Section>
  );
};

export default ReachUs;
