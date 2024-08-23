// import React from "react";
// import Section from "../layout/Section";
// import Image from "next/image";
// import { projects } from "../constant";
// import Link from "next/link";

// const Projects = () => {
//   return (
//     <Section heading="Projects." subHeading="What we have done">
//       <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5 mt-5">
//         {projects.map((elem, ind) => {
//           return (
//             <div
//               key={ind}
//               className="flex gap-3 items-center border-4 border-solid border-[#ffffff11] rounded-lg p-3"
//             >
//               <Image src={elem.image} alt="" width={100} height={100} />
//               <div>
//                 <div className="text-bold text-lg">
//                   {elem.name} ({elem.type})
//                 </div>
//                 <div className="text-[13px]">{elem.desc}</div>
//                 <Link
//                   href={elem.link}
//                   target="_blank"
//                   className="p-2 px-3 bg-[#282828] border-none rounded-md cursor-pointer mt-2 float-right text-white tracking-widest"
//                 >
//                   View Demo
//                 </Link>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </Section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import Section from "../layout/Section";
import Accordion from "../UI/Accordian";
import { projects } from "../constant";
import PhoneFrame from "../UI/PhoneFrame";

const Projects = ({ type }) => {
  const [selected, setSelected] = useState({
    link: "/",
    label: "",
  });

  return (
    <Section heading="Projects." subHeading="What we have done">
      <div className="mt-10 grid lg:grid-cols-2 gap-10">
        <Accordion data={projects} setSelected={setSelected} />
        <PhoneFrame src={selected.link} label={selected.label} />
      </div>
    </Section>
  );
};

export default Projects;
