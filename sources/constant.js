import { RiShareBoxFill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import {
  cv,
  ecommercewebsite,
  landingpage,
  marketing,
  portfolioImg,
  post,
  reels,
  resumeImg,
  stories,
  webapp,
} from "./assets/images";
import {
  Brandingexplainlist,
  Brandinginfo,
  Brandingpricing,
  Brandingseo,
  DigitalMarketingexplainlist,
  DigitalMarketinginfo,
  DigitalMarketingpricing,
  DigitalMarketingseo,
  ProductPhotographyseo,
  SEOexplainlist,
  SEOinfo,
  SEOpricing,
  SEOseo,
  VideoEditingpricing,
  VideoEditngexplainlist,
  appexplainlist,
  appinfo,
  apppricing,
  appseo,
  ecommerceseo,
  ecommmerceexplainlist,
  ecommmercemediainfo,
  ecommmercepricing,
  graphicexplainlist,
  graphicpricing,
  graphicseo,
  grapicinfo,
  proudctPhotographyexplainlist,
  proudctPhotographyinfo,
  proudctPhotographypricing,
  socialmediaexplainlist,
  socialmediainfo,
  socialmediapricing,
  socialseo,
  uiuxexplainlist,
  uiuxinfo,
  uiuxpricing,
  uiuxseo,
  videoEditingseo,
  videoEdtinginfo,
  webdevinfo,
  webexplainlist,
  webpricing,
  webseo,
} from "./serviceConstant";

export const services = [
  {
    id: "productlisting",
    path: "/e-commerce-managment",
    text: "Ecommerce Management",
    lordicon: {
      colors: "primary:#121331,secondary:#646e78,tertiary:#ebe6ef",
      src: "https://cdn.lordicon.com/ggihhudh.json",
    },
    info: ecommmercemediainfo,
    list: ecommmerceexplainlist,
    pricing: ecommmercepricing,
    seo: ecommerceseo,
  },
  {
    id: "websites",
    path: "/website-development",
    text: "Website Development",
    lordicon: {
      colors: "primary:#4bb3fd,secondary:#ebe6ef",
      src: "https://cdn.lordicon.com/oqhlhtfq.json",
    },
    info: webdevinfo,
    list: webexplainlist,
    pricing: webpricing,
    seo: webseo,
  },
  {
    id: "apps",
    path: "/app-development",
    text: "App Development",
    lordicon: {
      colors: "primary:#646e78,secondary:#ebe6ef",
      src: "https://cdn.lordicon.com/qbaenubu.json",
    },
    info: appinfo,
    list: appexplainlist,
    pricing: apppricing,
    seo: appseo,
  },
  {
    id: "uiux",
    path: "/uiux-design",
    text: "UI/UX Designs",
    lordicon: {
      colors: "primary:#08a88a,secondary:#ebe6ef",
      src: "https://cdn.lordicon.com/txmlvqat.json",
    },
    info: uiuxinfo,
    list: uiuxexplainlist,
    pricing: uiuxpricing,
    seo: uiuxseo,
  },
  {
    id: "socialmedia",
    path: "/social-media",
    text: "Social Media Management",
    lordicon: {
      colors: "primary:#646e78,secondary:#2ca58d,tertiary:#ebe6ef",
      src: "https://cdn.lordicon.com/nrtdaiif.json", // change
    },
    info: socialmediainfo,
    list: socialmediaexplainlist,
    pricing: socialmediapricing,
    seo: socialseo,
  },
  {
    id: "productshoots",
    path: "/product-shoots",
    text: "Product Photography",
    lordicon: {
      colors:
        "primary:#3a3347,secondary:#08a88a,tertiary:#ebe6ef,quaternary:#ffc738,quinary:#646e78",
      src: "https://cdn.lordicon.com/qierxeeb.json",
    },
    info: proudctPhotographyinfo,
    list: proudctPhotographyexplainlist,
    pricing: proudctPhotographypricing,
    seo: ProductPhotographyseo,
  },
  {
    id: "graphicdesign",
    path: "/graphic-design",
    text: "Graphics Designing",
    lordicon: {
      colors:
        "primary:#aaaaaa,secondary:#ffc738,tertiary:#f9c9c0,quaternary:#ebe6ef",
      src: "https://cdn.lordicon.com/bxxnzvfm.json",
    },
    info: grapicinfo,
    list: graphicexplainlist,
    pricing: graphicpricing,
    seo: graphicseo,
  },
  {
    id: "videoediting",
    path: "/video-editing",
    text: "Video Editing",
    lordicon: {
      colors: "primary:#3a3347,secondary:#ebe6ef",
      src: "https://cdn.lordicon.com/ibppuiwe.json",
    },
    info: videoEdtinginfo,
    list: VideoEditngexplainlist,
    pricing: VideoEditingpricing,
    seo: videoEditingseo,
  },
  {
    id: "digitalmarketing",
    path: "/digital-marketing",
    text: "Digital Marketing",
    lordicon: {
      colors:
        "primary:#5c5c5c,secondary:#646e78,tertiary:#92140c,quaternary:#4bb3fd",
      src: "https://cdn.lordicon.com/yifklmdo.json",
    },
    info: DigitalMarketinginfo,
    list: DigitalMarketingexplainlist,
    pricing: DigitalMarketingpricing,
    seo: DigitalMarketingseo,
  },
  {
    id: "seo",
    path: "/seo",
    text: "Search Engine Optimization (SEO)",
    lordicon: {
      colors:
        "primary:#4bb3fd,secondary:#ffc738,tertiary:#646e78,quaternary:#fff",
      src: "https://cdn.lordicon.com/oegrrprk.json",
    },
    info: SEOinfo,
    list: SEOexplainlist,
    pricing: SEOpricing,
    seo: SEOseo,
  },
  {
    id: "qrmenu",
    path: "/qr-menu",
    text: "Digital QR Menu",
    lordicon: {
      colors: "primary:#121331,secondary:#646e78,tertiary:#ebe6ef",
      src: "https://cdn.lordicon.com/jkzrgmvk.json",
    },
    info: DigitalMarketinginfo,
    list: DigitalMarketingexplainlist,
    pricing: DigitalMarketingpricing,
    seo: DigitalMarketingseo,
  },
  {
    id: "counselling",
    path: "/counselling",
    text: "Branding & Couselling",
    lordicon: {
      colors: "primary:#646e78,secondary:#4bb3fd,tertiary:#ebe6ef",
      src: "https://cdn.lordicon.com/flvisirw.json",
    },
    info: Brandinginfo,
    list: Brandingexplainlist,
    pricing: Brandingpricing,
    seo: Brandingseo,
  },
];

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-10%" : direction === "right" ? "10%" : 0,
      y: direction === "up" ? "10%" : direction === "down" ? "10%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
export const showcase = {
  webdev: [
    {
      image: resumeImg,
      label: "Resume Website",
      links: [
        {
          icon: <RiShareBoxFill />,
          path: "https://sourabhkumhar.vercel.app",
        },
        {
          icon: <AiFillGithub />,
          path: "https://github.com/sourabhkumhar/myResume",
        },
      ],
    },
    {
      image: portfolioImg,
      label: "Portfolio Website",
      links: [
        {
          icon: <RiShareBoxFill />,
          path: "https://sourabhportfolio.vercel.app",
        },
      ],
    },
  ],
};
export const mainPages = [
  {
    id: "front",
    text: "Home",
  },
  {
    id: "explore",
    text: "Explore",
  },
  {
    id: "reachus",
    text: "Connect",
  },
];

export const projects = [
  {
    name: "Cosovo",
    description:
      "As a company at the forefront of digital innovation, we are delighted to present our project for Cosovo, an esteemed Amazon seller specializing in steel containers. Utilizing our expertise in Next.js and Tailwind CSS, we have crafted a dynamic and visually appealing website, accessible at Cosovo.in. This site represents the harmonious blend of Next.js's robust functionality and Tailwind CSS's elegant design elements. Our team's meticulous design approach was aimed at ensuring the website not only embodies Cosovo's brand identity but also offers an intuitive and engaging browsing experience for all visitors. This project underscores our commitment to delivering top-tier, user-centric web solutions that elevate our clients' online presence and business success.",
    link: "https://cosovo.in",
    image: "",
    type: "web",
  },
  {
    name: "ZetaBot",
    description:
      "As a company specializing in custom digital solutions, we take pride in our recent accomplishment: a premium landing page exclusively for ZetaBot Company, a prominent Discord server bot. Our team, skilled in Next.js and Tailwind CSS, took this project from inception to completion with a keen focus on aesthetics and user experience. Our commitment involved leveraging cutting-edge technology to embody ZetaBot Company's vision, culminating in an engaging and sophisticated online presence. The project extended beyond crafting a visually stunning landing page to include detailed pricing information and an extensive commands page, all to enhance ZetaBot Company's online visibility and user interaction. We are dedicated to transforming ideas into digital realities, as demonstrated in our work for ZetaBot Company.",
    link: "https://zetabot.xyz",
    image: "",
    type: "web",
  },
  {
    name: "BeatStore",
    description:
      "We have developed a full-stack online beats marketplace utilizing the latest in web technology with Next.js and Tailwind CSS. this website offers a comprehensive range of functionalities including login, signup, password reset, and account detail modifications, all powered by the built-in Node.js capabilities of Next.js. We prioritize secure and efficient data management by integrating MongoDB Atlas for all our data storage needs. This project highlights our commitment to providing innovative and user-friendly web solutions to the digital market",
    link: "https://beatstore.in",
    image: "",
    type: "web",
  },
  {
    name: "Evfy",
    description:
      "We've engineered an enticing landing page for EV Scooty, marking the threshold to the future of urban mobility. Our creation represents the fusion of style and sustainability, designed to offer a seamless ride through modern cityscapes. We are committed to enabling emission-free commuting through our sleek, eco-friendly design that brings together advanced technology and aesthetics. Utilizing NextJS and Tailwind CSS, our landing page mirrors the sophistication and elegance of EV Scooty. Join us on a journey toward cleaner, smarter transportation and be part of the greener future we are diligently crafting with EV Scooty.",
    link: "https://evfy.vercel.app",
    image: "",
    type: "web",
  },
  {
    name: "Fograph",
    description:
      "Turn your passion into profession.FoGraph is an online platform for Photographers, Agencies, and Business to connect together and work without limits. Our mission is to create economic opportunities for people who may not have proper exposure. We believe talent can be converted to success if nurtured.FoGraph is a Digital Photo Studio where users can hire photographers. Photographers can manage their ongoing projects, analyze their growth and connect with other photographers on the platform.",
    link: "https://play.google.com/store/apps/details?id=com.fograph.destinationbooking",
    image: "",
    type: "app",
  },
  {
    name: "Yatree Driver",
    description:
      "Eco friendly and Economical Travel booking and Rental services app.Yatree Destination Private limited is a travel based company which provides an ideal platform for Travel and Rental services via a sustainable mode of transport i.e. E rickshaw.Yatree destination is here to make you nurture the essence of travel with us with a whole new vision. The whole concept of Yatree Destination revolves around ‘Going Green’ and giving an incredible experience by ensuring a superior user experience and customer service with a unique concept of tourism and daily hassle free commute. We aim to build a one stop solution for all your sightseeing and rental service requirements accompanied with an eco friendly touch.",
    link: "https://play.google.com/store/apps/details?id=com.bb.yatree.yatreedriver",
    image: "",
    type: "app",
  },
  {
    name: "Cando",
    description:
      "LEARN from the most inspiring fashion creators SHOP from your local secondhand stores & influencers. EARN points to unlock reward",
    link: "https://play.google.com/store/apps/details?id=com.cando.candoapp",
    image: "",
    type: "app",
  },
  {
    name: "PinBall",
    description:
      "There any many table themes, get rewards and many more. Its free to use!",
    link: "https://play.google.com/store/apps/details?id=com.mitraye.pinball",
    image: "",
    type: "app",
  },
  {
    name: "1010",
    description:
      "1010 is a simple yet challenging game designed to train your brain. Challenge your puzzle game skills with this exciting skill game that will keep you entertained for hours. Train your brain and develop your logic with this simple game that lets you combine puzzle blocks, build and destroy structures by creating lines, and test your logic with friends. Enjoy addicting brain training exercises with the power of 1010!",
    link: "https://play.google.com/store/apps/details?id=com.mitraye.Game1010",
    image: "",
    type: "app",
  },
];
