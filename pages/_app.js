import { services } from "@/sources/constant";
import Layout from "@/sources/layout";
import Metadata from "@/sources/layout/Metadata";
import "@/styles/globals.css";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  const nameContent = {
    title: "Editors Chamber - Website | Mobile App | Graphic & Marketing",
    keywords: "mobile app development, website developemnt, E-Commerce management, Graphics Designing, UI/UX Designs, Product Photography, Search Engine Optimization (SEO), Digital QR Menu,  social media management, branding, video editing, digital marketing, AR Filters, Editors Chamber",
    description: "Editors Chamber offers a wide range of digital services and marketing solutions to boost your reach, sales, and efficiency. We specialize in mobile app development, website creation, E-Commerce management, social media management, branding, Graphics Designing and digital marketing.",
    subject: "Digital Services and Marketing Solutions",
    revised: Date.now(),
    topic: "Digital Services and Marketing Solutions",
    summary: "Editors Chamber is a leading provider of digital services and marketing solutions. Our experienced team tailors solutions to enhance your online presence, drive sales, and improve efficiency.",
    Classification: "Digital Services Provider",
    author: "Editors Chamber",
    category: "Technology",
    distribution: "Global",
    "og:title": "Editors Chamber - Digital Services and Marketing Solutions",
    "og:type": "website",
    "og:url": "https://editorschamber.com",
    "og:image": "https://editorschamber.com/logo-main.svg",
    "og:site_name": "Editors Chamber",
    "og:description": "Editors Chamber offers a range of digital services, including mobile app development, website creation, E-Commerce management, social media management, branding, Graphics Designing, video production, and digital marketing. Our experienced team will tailor solutions to boost your reach, sales, and efficiency.",
    "fb:page_id": "100094194996462",
    "application-name": "Editors Chamber",
    "og:email": "contact@editorschamber.com",
    "og:phone_number": "861-998-1035",
    "og:locality": "Udaipur",
    "og:region": "Rajasthan",
    "og:postal-code": "313001",
    "og:country-name": "India",
  };

  const property = {
    "og:type": "organization",
  };

  return (
    <>
      <Metadata nameContent={nameContent} property={property} />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-JK2PCP3VET"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JK2PCP3VET')
        `}
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
