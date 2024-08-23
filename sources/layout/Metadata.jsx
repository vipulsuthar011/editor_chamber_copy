import Head from "next/head";
import React from "react";

const Metadata = ({ nameContent, property }) => {
  return (
    <Head>
      <title>{nameContent.title}</title>
      {nameContent &&
        Object.keys(nameContent).map((elem) => {
          return <meta key={elem} name={elem} content={nameContent[elem]} />;
        })}
      {property &&
        Object.keys(property).map((elem) => {
          return <meta key={elem} property={elem} content={property[elem]} />;
        })}
    </Head>
  );
};

export default Metadata;
