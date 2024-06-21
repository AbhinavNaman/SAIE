// import React from "react";
// import { TypeAnimation } from "react-type-animation";

// const HeroTitle = ({ subtitle, title, desc }) => {
//   return (
//     <>
//       {subtitle ? <h5 className="text-warning">{subtitle}</h5> : ""}
//       <h1 className="fw-bold display-6 text-primary">{title}</h1>
//       {/* <p className="lead">{desc}</p> */}

//       <TypeAnimation
//         sequence={[
//           "Deliver Comprehensive value proposition with Next Generation AI capabilities to optimize operations, drive Growth, Innovate new Business Models and integrate Environment Social and Governance (ESG), excellence while positively impacting the society.",
//           1000,
//           "We harness the Transformative power of Artificial Intelligence to address the World’s most pressing challenges.",
//           1000,
//           "We are committed to pioneering Innovative AI solutions that enhance human potential, Foster sustainability and promote inclusive progress through relentless Innovation, Ethical practices and collaboration.",
//           1000,
//           "Our dedication to Excellence drives us to continuously push the boundaries of AI Technology, creating meaningful impact and shaping a better future for generations to come.",
//           1000,
//         ]}
//         speed={50}
//         style={{ marginTop: "10px" }}
//         className="max-w-6xl max-h-20 overflow-hidden"
//         repeat={Infinity}
//       />
//     </>
//   );
// };

// export default HeroTitle;

import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./HeroTitle.module.css"; // Import CSS for styling
import TextSequence from "./TextSequence";

const HeroTitle = ({ subtitle, title, desc }) => {
  return (
    <>
      {subtitle && <h5 className="text-warning">{subtitle}</h5>}
      <h1 className="fw-bold display-6 text-primary">{title}</h1>

      <div className="type-animation-container" style={{marginTop:"60px"}}>
      <TextSequence/>
       
      </div>
    </>
  );
};

export default HeroTitle;


 {/* <TypeAnimation
          sequence={[
            "Deliver Comprehensive value proposition with Next Generation AI capabilities to optimize operations, drive Growth,",
            "We harness the Transformative power of Artificial Intelligence to address the World’s most pressing challenges.",
            "We are committed to pioneering Innovative AI solutions that enhance human potential, Foster sustainability and promote inclusive progress through relentless Innovation, Ethical practices and collaboration.",
            "Our dedication to Excellence drives us to continuously push the boundaries of AI Technology, creating meaningful impact and shaping a better future for generations to come.",
          ]}
          speed={50}
          style={{ marginTop: "10px" }}
          className="max-w-6xl max-h-20 overflow-hidden"
          repeat={Infinity}
          eraseDelay={0} // Set erase delay to 0 to prevent erasing
        /> */}