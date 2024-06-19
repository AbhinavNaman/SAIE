import React from "react";
import { BiDownload, BiStreetView } from "react-icons/bi";
import { FaBezierCurve, FaUserShield } from "react-icons/fa";
import Image from "next/image";

import SectionTitle from "../common/SectionTitle";

const WorkProcessThree = () => {
  return (
    <section className="process-section bg-dark ptb-60">
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
        {/* <div className="row">
          <div className="col-12">
            <div className="setup-process-wrap">
              <ul className="setup-process-list list-unstyled text-center mb-0">
                <li className="setup-process-item py-4 px-2">
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <BiStreetView />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 1
                  </span>
                  <h6 className="mt-3 mb-0">Conduct Discovery Sessions</h6>
                </li>
                <li className="setup-process-item py-4 px-2">
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <BiDownload />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 2
                  </span>
                  <h6 className="mt-3 mb-0">Define and Prioritize use cases</h6>
                </li>
                <li className="setup-process-item py-4 px-2">
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <FaBezierCurve />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 3
                  </span>
                  <h6 className="mt-3 mb-0">
                    Define high level business case cases
                  </h6>
                </li>
                <li className="setup-process-item py-4 px-2">
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <FaUserShield />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 4
                  </span>
                  <h6 className="mt-3 mb-0">Define conceptual architecture</h6>
                </li>
                <li className="setup-process-item py-4 px-2">
                  <div className="setup-process-icon mb-4">
                    <i className="fal fa-2x text-primary">
                      <FaBezierCurve />
                    </i>
                  </div>
                  <span className="process-tag badge bg-primary-soft py-1 px-3 small fw-bold text-primary rounded-custom">
                    Step 3
                  </span>
                  <h6 className="mt-3 mb-0">
                    Define Operating Model and Roadmap
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WorkProcessThree;
