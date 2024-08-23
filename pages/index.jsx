import Explore from "@/sources/sections/Explore";
import Front from "@/sources/sections/Front";
import GraphicsDesigning from "@/sources/sections/services/GraphicsDesigning";
import ProductListing from "@/sources/sections/services/ProductListing";
import ProductShot from "@/sources/sections/services/ProductShot";
import QRMenu from "@/sources/sections/services/QRMenu";
import WebDevelopment from "@/sources/sections/services/WebDevelopment";
import ReachUs from "@/sources/sections/ReachUs";
import Metadata from "@/sources/layout/Metadata";
import Projects from "@/sources/sections/Projects";

const Home = ({ nameContent, property }) => {
  return (
    <main className="">
      <Metadata nameContent={nameContent} property={property} />
      <Front />
      <Explore />

      {/* services */}
      {/* <div className="relative">
        <ProductListing /> */}
        {/* <div className="gradient-03 z-0" />
        <WebDevelopment /> */}
      {/* </div> */}

      {/* <div className="relative"> */}
        {/* <SocialMediaHandler /> */}
        {/* <div className="gradient-04 z-0" /> */}
        {/* <ProductShot /> */}
      {/* </div> */}

      {/* <div className="relative">
        <GraphicsDesigning />
        <div className="gradient-05 z-0" />
        <QRMenu />
      </div> */}
      <Projects />

      <ReachUs />
    </main>
  );
};

export async function getStaticProps() {
  const nameContent = {
    title: "Editors Chamber - Website | Mobile App | Graphic & Marketing",
    keywords: "mobile app development, website developemnt, E-Commerce management, Graphics Designing, UI/UX Designs, Product Photography, Search Engine Optimization (SEO), Digital QR Menu,  social media management, branding, video editing, digital marketing, AR Filters, Editors Chamber",
    description: "Editors Chamber offers a wide range of digital services and marketing solutions to boost your reach, sales, and efficiency. We specialize in mobile app development, website creation, E-Commerce management, social media management, branding, Graphics Designing and digital marketing.",
    subject: "Digital Services and Marketing Solutions",
    revised: Date.now(),
    topic: "Digital Services and Marketing Solutions",
    summary: "Editors Chamber is a leading provider of digital services and marketing solutions. Our experienced team tailors solutions to enhance your online presence, drive sales, and improve efficiency.",
    "og:title": "Editors Chamber - Digital Services and Marketing Solutions",
    "og:type": "website",
    "og:url": "https://www.editorschamber.com",
    "og:image": "https://www.editorschamber.com/logo-main.svg",
    "og:description": "Editors Chamber offers a range of digital services, including mobile app development, website creation, E-Commerce management, social media management, branding, Graphics Designing, video production, and digital marketing. Our experienced team will tailor solutions to boost your reach, sales, and efficiency.",
  };
  return {
    props: {
      nameContent,
    },
  };
}

export default Home;
