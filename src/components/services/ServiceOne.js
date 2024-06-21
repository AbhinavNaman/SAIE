import React, { useState } from "react";
import Link from "next/link";
import { BsArrowRight, BsTools } from "react-icons/bs";
import { HiOutlineCog, HiOutlineUsers } from "react-icons/hi";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import SectionTitle from "../common/SectionTitle";

const ServiceOne = ({ bgDark }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const baseStyle = { color: "black" };
  const hoverStyle = { background: "linear-gradient(115deg, #3fea2c, #31c47f)", color: "white" };

  // style={{background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}

  const features = [
    {
      icon: <HiOutlineUsers className=" text-danger" />,
      title: "Smart Sourcing",
      description: "We help identify, evaluate, and engage with suppliers efficiently.",
      link: "/use-cases#smart-sourcing",
    },
    {
      icon: <BsTools className=" text-dark" />,
      title: "Manufacturing Excellence",
      description: "Integrating AI with lean principles enhances manufacturing excellence, optimizing speed and quality.",
      link: "/use-cases#manufacturing-excellence",
    },
    {
      icon: <HiOutlineCog className=" text-warning" />,
      title: "Supply Chain Resilience",
      description: "Amid uncertainty, our Supply Chain Resilience solutions offer agility, robustness, and strategic foresight.",
      link: "/use-cases#supply-chain-resilience",
    },
    {
      icon: <GrAnnounce className=" text-warning" />,
      title: "Smart Marketing",
      description: "Utilize data-driven insights for compelling marketing narratives. Smart Marketing optimizes campaigns for maximum engagement and ROI.",
      link: "/use-cases#smart-marketing",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Smart Sales Operations",
      description: "Transform sales processes with AI-powered analytics. Streamline pipelines, enhance lead generation, and close deals efficiently.",
      link: "/use-cases#smart-sales-operations",
    },
    {
      icon: <FaLightbulb className=" text-success" />,
      title: "Sustainability Analytics",
      description: "Empower sustainability tracking and improvement with advanced analytics. Make informed decisions aligned with green goals.",
      link: "/use-cases#sustainability-analytics",
    },
  ];

  return (
    <section className={`feature-section ptb-60 ${bgDark ? "bg-dark" : "bg-light"}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                subtitle="Key use cases to grow your Business Value"
                description="Globally actualize cost effective with resource maximizing leadership skills."
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
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`feature-card shadow-sm rounded-custom p-5 `}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIndex === index ? hoverStyle : baseStyle}
                >
                  <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                    <span className="fal">{feature.icon}</span>
                  </div>
                  <div className="feature-content">
                    <h3 className="text-primary h5">{feature.title}</h3>
                    <p className="mb-0">{feature.description}</p>
                  </div>
                  <Link href={feature.link}>
                    <a className="link-with-icon text-decoration-none mt-3" style={{ color: hoveredIndex === index ? "white" : "black" }}>
                      View Details <i className="far mb-1"><BsArrowRight /></i>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
