import React from "react";
import { BiDownload, BiStreetView } from "react-icons/bi";
import { FaBezierCurve, FaUserShield } from "react-icons/fa";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";

const WorkProcessThree = () => {
  return (
    <section className="process-section  ptb-60">
    {/* bg-dark */}
      <div className="container approach-img-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <div className="section-heading text-center">
              <SectionTitle
                subtitle="Value Delivery Approach"
                // title="Value Delivery Approach"
                description="Our approach to value delivery is based on a structured process that ensures the delivery of value at every stage of the project lifecycle."
              />
            </div>
          </div>
        </div>
        {/* <Image
          src="/homepage/our-approach.svg"
          alt="section-3"
          width={2560}
          height={1440}
          className="img-fluid rounded-custom shadow-lg"
        /> */}
        <Image
          src="/homepage/approach-2.svg"
          alt="section-3"
          width={2560}
          height={1440}
          className="img-fluid rounded-custom shadow-lg approach-img"
        />
      </div>
    </section>
  );
};

export default WorkProcessThree;
