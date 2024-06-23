////modified code: 2
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroTitle = ({ subtitle, title, desc }) => {
  return (
    <>
      {subtitle ? <h5 className="text-warning">{subtitle}</h5> : ""}
      <h1 className="fw-bold display-6 text-primary">{title}</h1>
      {/* <p className="lead">{desc}</p> */}

      <TypeAnimation
        sequence={[
          // Text 1
          "Deliver Comprehensive value proposition with Next Generation AI capabilities to optimize operations, drive Growth, Innovate new Business Models and integrate Environment Social and Governance (ESG), excellence while positively impacting the society.",
          3000, // Display text for 3 seconds
          '', // Clear text instantly
          0, // Immediate transition

          // Text 2
          "We harness the Transformative power of Artificial Intelligence to address the World’s most pressing challenges.",
          3000,
          '',
          0,

          // Text 3
          "We are committed to pioneering Innovative AI solutions that enhance human potential, Foster sustainability and promote inclusive progress through relentless Innovation, Ethical practices and collaboration.",
          3000,
          '',
          0,

          // Text 4
          "Our dedication to Excellence drives us to continuously push the boundaries of AI Technology, creating meaningful impact and shaping a better future for generations to come.",
          3000,
          '',
          0,
        ]}
        speed={50}
        style={{ marginTop: "10px" }}
        className="max-w-6xl max-h-20 overflow-hidden"
        repeat={Infinity}
        omitDeletionAnimation={true} // Optional: to prevent any built-in deletion animation
      />
    </>
  );
};

export default HeroTitle;



// //original code
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

////modified code : 1
// import React from "react";
// import { TypeAnimation } from "react-type-animation";
// import "./HeroTitle.module.css"; // Import CSS for styling
// import TextSequence from "./TextSequence";
// import TypingText from "../TypingText";



// const HeroTitle = ({ subtitle, title, desc }) => {
//   const sequence = [
//     "Deliver Comprehensive value proposition with Next Generation AI capabilities to optimize operations, drive Growth, Innovate new Business Models and integrate Environment Social and Governance (ESG), excellence while positively impacting the society.",
//     "We harness the Transformative power of Artificial Intelligence to address the World’s most pressing challenges.",
//     "We are committed to pioneering Innovative AI solutions that enhance human potential, Foster sustainability and promote inclusive progress through relentless Innovation, Ethical practices and collaboration.",
//     "Our dedication to Excellence drives us to continuously push the boundaries of AI Technology, creating meaningful impact and shaping a better future for generations to come.",
//   ];
//   return (
//     <>
//       {subtitle && <h5 className="text-warning">{subtitle}</h5>}
//       <h1 className="fw-bold display-6 text-primary">{title}</h1>

//       <div className="type-animation-container" style={{marginTop:"60px"}}>
//       {/* <TextSequence/> */}
//       <TypingText texts={sequence} typingSpeed={100} delayBetweenTexts={2000} />
//       </div>
//     </>
//   );
// };

// export default HeroTitle;


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