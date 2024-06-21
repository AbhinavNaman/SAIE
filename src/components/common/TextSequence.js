// TextSequence.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextSequence = ({ delay = 10000, animationDuration = 1 }) => {
  const [index, setIndex] = useState(0);

  const sequence = [
    "Deliver Comprehensive value proposition with Next Generation AI capabilities to optimize operations, drive Growth, Innovate new Business Models and integrate Environment Social and Governance (ESG), excellence while positively impacting the society.",
    "We harness the Transformative power of Artificial Intelligence to address the World’s most pressing challenges.",
    "We are committed to pioneering Innovative AI solutions that enhance human potential, Foster sustainability and promote inclusive progress through relentless Innovation, Ethical practices and collaboration.",
    "Our dedication to Excellence drives us to continuously push the boundaries of AI Technology, creating meaningful impact and shaping a better future for generations to come.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % sequence.length);
    }, delay);
    return () => clearInterval(interval);
  }, [sequence.length, delay]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100px" }}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: animationDuration }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "18px",
            color:"black"
          }}
        >
          {sequence[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TextSequence;
