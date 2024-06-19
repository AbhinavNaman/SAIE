import React from "react";
import Link from "next/link";
import { BsArrowRight, BsTools } from "react-icons/bs";
import {
  HiOutlineCog,
  HiOutlineDocumentReport,
  HiOutlineUsers,
} from "react-icons/hi";
import { SiSimpleanalytics } from "react-icons/si";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaCheckCircle, FaLightbulb } from "react-icons/fa";
import SectionTitle from "../common/SectionTitle";
import { GrAnnounce } from "react-icons/gr";

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-60 ${bgDark ? "bg-dark" : "bg-light"}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                // title="Use cases"
                subtitle="Key use cases to grow your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Use Cases"
                title="Key use cases to grow your Business Value"
                description="Join the world’s leading companies who trust SMART AI FOR ENTERPRISE INC to build"
                centerAlign
              />
            )}
            <div className="feature-grid">
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <HiOutlineUsers className=" text-danger" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="text-primary h5">Smart Sourcing</h3>
                  <p className="mb-0">
                    We help identify, evaluate, and engage with suppliers
                    efficiently.
                  </p>
                </div>
                <Link href="/use-cases#smart-sourcing">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <BsTools className=" text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="text-primary h5">Manufacturing Excellence</h3>
                  <p className="mb-0">
                    Integrating AI with lean principles enhances manufacturing
                    excellence, optimizing speed and quality.
                  </p>
                </div>
                <Link href="/use-cases#manufacturing-excellence">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <HiOutlineCog className=" text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="text-primary h5">Supply Chain Resilience</h3>
                  <p className="mb-0">
                    Amid uncertainty, our Supply Chain Resilience solutions
                    offer agility, robustness, and strategic foresight.
                  </p>
                </div>
                <Link href="/use-cases#supply-chain-resilience">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <GrAnnounce className=" text-warning" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="text-primary h5">Smart Marketing</h3>
                  <p className="mb-0">
                    Utilize data-driven insights for compelling marketing
                    narratives. Smart Marketing optimizes campaigns for maximum
                    engagement and ROI.
                  </p>
                </div>
                <Link href="/use-cases#smart-marketing">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <IoGitCompareOutline className=" text-dark" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="text-primary h5">Smart Sales Operations</h3>
                  <p className="mb-0">
                    Transform sales processes with AI-powered analytics.
                    Streamline pipelines, enhance lead generation, and close
                    deals efficiently.
                  </p>
                </div>
                <Link href="/use-cases#smart-sales-operations">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${
                  bgDark
                    ? "bg-custom-light promo-border-hover border border-2 border-light text-white"
                    : "bg-white"
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <FaLightbulb className=" text-success" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="text-primary h5">Sustainability Analytics</h3>
                  <p className="mb-0">
                    Empower sustainability tracking and improvement with
                    advanced analytics. Make informed decisions aligned with
                    green goals.
                  </p>
                </div>
                <Link href="/use-cases#sustainability-analytics">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{" "}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
