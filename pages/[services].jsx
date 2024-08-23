import { useRouter } from 'next/router';
import React from 'react'
import { services as service } from '@/sources/constant';
import Image from 'next/image';
import Section from '@/sources/layout/Section';
import ShowCaseCard from '@/sources/components/ShowCaseCard';
import SocialMediaHandler from '@/sources/sections/services/SocialMediaHandler';
import { socialmediabanner } from '@/sources/assets/images';
import SubscriptionBox from '@/sources/components/SubscriptionBox';
import Metadata from '@/sources/layout/Metadata';
import { BsCheckAll } from 'react-icons/bs';
import { graphicDesginServices } from '@/sources/serviceConstant';
import OurService from '@/sources/components/OurService';
import PricingDetail from '@/sources/components/PricingDetail';
import OurClient from '@/sources/components/OurClient';
// import { socialmediainfo, socialmediapricing } from '@/sources/serviceConstant';


const Service = ({ nameContent,serviceData }) => {
  const router = useRouter();
  // const { services } = router.query;
  // console.log(serviceData.seo)


  // console.log(service[0].pricing);
  // console.log("path========>>", router)



  // Find the service data based on the path
  // const serviceData = service.find((s) => s.path === `/${services}`) || {
  //   text: 'Service not found',
  //   lordicon: { src: '', colors: '' },
  // };

  //  console.log(serviceData)
  // //  console.log("services",service)

  return (
    <div>
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
            {serviceData?.info?.map((elem) => {
              return <ShowCaseCard data={elem} key={elem.id} />;
            })}
          </div>
        </Section>

        <SocialMediaHandler />

        {/* only for graphic desgin page */}
        {router.asPath === "/graphic-design" &&
        <div className=' font-bold text-center  text-6xl text-[#EBCE5B] my-5'>Our Services</div>
        }
        {router.asPath === "/graphic-design" &&
          <OurService />
        }

        { router.asPath==="/e-commerce-managment"&&<OurClient/>  }

        <Section heading="Choose Pricing Plans" className="text-center mb-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center gap-5 text-start my-5">
            {serviceData?.pricing?.map((elem, ind) => {
              return <SubscriptionBox key={ind} data={elem} >
                {router.asPath==="/graphic-design" && <PricingDetail service={elem?.services} best={elem?.best}/>}
                </SubscriptionBox>;
            })}
          </div>
        </Section>
      </>
    </div>
  )
}


// export async function getStaticProps() {
//   const nameContent = {
//     title: "Editors Chamber",
//     keywords: "",
//     description: "",
//     subject: "",
//     revised: Date.now(),
//     topic: "",
//     summary: "",
//     Classification: "",
//     author: "Editors Chamber",
//     category: "",
//     distribution: "Global",
//     target: "all",
//     "og:title": "",
//     "og:type": "",
//     "og:url": "",
//     "og:image": "",
//     "og:site_name": "Editors Chamber",
//     "og:description": "",
//     "fb:page_id": "100094194996462",
//     "application-name": "Editors Chamber",
//     "og:email": "editorschamberindia@gmail.com",
//     "og:phone_number": "861-998-1035",
//     "og:locality": "Udaipur",
//     "og:region": "Rajasthan",
//     "og:postal-code": "313001",
//     "og:country-name": "India",
//   };

//   return {
//     props: {
//       nameContent,
//     },
//   };
// }

export async function getServerSideProps ({params}) {
  const serviceData = service.find((s) => s.path === `/${params.services}`) || {
    text: 'Service not found',
    lordicon: { src: '', colors: '' },
  };
  
  const nameContent = {
    title: serviceData?.seo?.title || "",
    keywords: serviceData?.seo?.keywords || "",
    description: serviceData?.seo?.description || "",
    subject: serviceData?.seo?.subject || "",
    revised: serviceData?.seo?.revised || Date.now(),
    topic: serviceData?.seo?.topic || "",
    summary: serviceData?.seo?.summary || "",
    Classification: serviceData?.seo?.Classification || "",
    author: serviceData?.seo?.author||"" ,
    category: serviceData?.seo?.category || "",
    distribution: serviceData?.seo?.distribution || "Global",
    target: serviceData?.seo?.target || "all",
    "og:title": serviceData?.seo["og:title"] || "",
    "og:type": serviceData?.seo["og:type"] || "",
    "og:url": serviceData?.seo["og:url"] || "",
    "og:image": serviceData?.seo["og:image"] || "",
    "og:site_name": serviceData?.seo["og:site_name"] || "Editors Chamber",
    "og:description": serviceData?.seo["og:description"] || "",
    "fb:page_id": serviceData?.seo["fb:page_id"] || "100094194996462",
    "application-name": serviceData?.seo["application-name"] || "Editors Chamber",
    "og:email": serviceData?.seo["og:email"] || "editorschamberindia@gmail.com",
    "og:phone_number": serviceData.seo["og:phone_number"] || "861-998-1035",
    "og:locality": serviceData?.seo["og:locality"] || "Udaipur",
    "og:region": serviceData?.seo["og:region"] || "Rajasthan",
    "og:postal-code": serviceData?.seo["og:postal-code"] || "313001",
    "og:country-name": serviceData?.seo["og:country-name"] || "India",
  };

  console.log("nameContent",nameContent)

  return {
    props: {
      nameContent,
      serviceData
    },
  };
}


export default Service;






