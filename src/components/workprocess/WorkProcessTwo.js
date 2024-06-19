import React from "react";
import { FiTruck } from "react-icons/fi";
import { RiNodeTree } from "react-icons/ri";
import { FaBezierCurve, FaLayerGroup } from "react-icons/fa";

const WorkProcessTwo = () => {
  return (
    <section className="work-process ptb-60 bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h2>Our Approach</h2>
              <p>
                We are committed to providing our customers with exceptional
                service while getting the job done quickly and efficiently.
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <RiNodeTree />
                </i>
              </div>
              <h3 className="h5">Conduct Discovery Sessions</h3>
              <p className="mb-0">
                We conduct discovery sessions to understand your business needs.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FaBezierCurve />
                </i>
              </div>
              <h3 className="h5">Define and Prioritize use cases</h3>
              <p className="mb-0">
                We define and prioritize use cases to meet your business goals.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  <FaLayerGroup />
                </i>
              </div>
              <h3 className="h5">Define high level business cases</h3>
              <p className="mb-0">
                Our team defines high level business cases to meet your business
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FiTruck />
                </i>
              </div>
              <h3 className="h5">Define conceptual architecture</h3>
              <p className="mb-0">
                By defining conceptual architecture, we ensure your business
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="process-card-two text-center px-4 py-lg-5 py-4 rounded-custom">
              <div className="process-icon border border-light bg-custom-light rounded-custom p-3">
                <i className="far fa-2x">
                  {" "}
                  <FiTruck />
                </i>
              </div>
              <h3 className="h5">Define Operating Model and Roadmap</h3>
              <p className="mb-0">
                By defining operating model and roadmap, we ensure your business
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessTwo;
