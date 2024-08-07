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
  // const hoverText = { color: "white" };

  // style={{background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}

  const features = [
    {
      icon: <HiOutlineUsers className=" text-danger" />,
      title: "Smart Sourcing",
      description: "We help identify, evaluate, and engage with suppliers efficiently.",
      link: "/use-cases/smart-sourcing",
    },
    {
      icon: <BsTools className=" text-dark" />,
      title: "Manufacturing Excellence",
      description: "Integrating AI with lean principles enhances manufacturing excellence, optimizing speed and quality.",
      link: "/use-cases/manufacturing-excellence",
    },
    {
      icon: <HiOutlineCog className=" text-warning" />,
      title: "Supply Chain Resilience",
      description: "Amid uncertainty, our Supply Chain Resilience solutions offer agility, robustness, and strategic foresight.",
      link: "/use-cases/supply-chain-resilience",
    },
    {
      icon: <HiOutlineCog className=" text-warning" />,
      title: "Smart Talent Acquisition",
      description: "Our Smart Talent Acquisition uses advanced analytics to align your talent strategy with business priorities.",
      link: "/use-cases/smart-talent-acquisition",
    },
    {
      icon: <GrAnnounce className=" text-warning" />,
      title: "Smart Marketing",
      description: "Utilize data-driven insights for compelling marketing narratives. Smart Marketing optimizes campaigns for maximum engagement and ROI.",
      link: "/use-cases/smart-marketing",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Smart Sales Operations",
      description: "Transform sales processes with AI-powered analytics. Streamline pipelines, enhance lead generation, and close deals efficiently.",
      link: "/use-cases/smart-sales-operations",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Pricing Optimization",
      description: "With our Pricing Optimization models, we ensure that you hit the sweet spot every time, combining competitive analysis, market trends, and consumer behavior.",
      link: "/use-cases/pricing-optimization",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Profitability Optimization",
      description: "With our Profitability Optimization models, we ensure that maximize margins and drive sales",
      link: "/use-cases/profitability-optimization",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Smart Finance Operations",
      description: "Partner with us and unlock the potential of your enterprise through unparalleled efficiency and innovation.",
      link: "/use-cases/smart-finance-operations",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Revenue Assurance",
      description: "Choose SMART AI FOR ENTERPRISE INC as your partner in propelling your business towards unprecedented profitable growth.",
      link: "/use-cases/revenue-assurance",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Data Monetization",
      description: "We help you turn data into revenue streams, ensuring you capitalize on every bit and byte.",
      link: "/use-cases/data-monetization",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Product to Service Transition",
      description: "Evolve your product offerings into full-fledged services with our seamless transition plans.",
      link: "/use-cases/product-to-service-transition",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Digital Products and Services",
      description: "Our digital products and services are designed to give you the edge, combining innovative technology.",
      link: "/use-cases/digital-products-and-services",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "New Ecosystem Partnerships",
      description: "In the digital age, staying ahead means being agile with our digital products and services",
      link: "/use-cases/new-ecosystem-partnerships",
    },
    
    {
      icon: <FaLightbulb className=" text-success" />,
      title: "Sustainability Analytics",
      description: "Empower sustainability tracking and improvement with advanced analytics. Make informed decisions aligned with green goals.",
      link: "/use-cases/sustainability-analytics",
    },
    {
      icon: <IoGitCompareOutline className=" text-dark" />,
      title: "Carbon Accounting",
      description: "At SMART AI FOR ENTERPRISE INC, we're committed to integrating ESG excellence into the core of business operations.",
      link: "/use-cases/carbon-accounting",
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
                subtitle="Key use cases to grow your Business Value"
                title=" "
                description="Join the world’s leading companies who trust SMART AI FOR ENTERPRISE INC to build"
                centerAlign
              />
            )}
            <div className="feature-grid">
              {features.map((feature, index) => (
                <Link href={feature.link}  key={index} passHref>
                <div
                  className={`feature-card shadow-sm rounded-custom p-5 `}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  style={hoveredIndex === index ? hoverStyle : baseStyle}
                >
                  {/* <div className="icon-box d-inline-block rounded-circle  mb-32" style={{backgroundColor:"white"}}>
                    <span className="fal">{feature.icon}</span>
                  </div> */}
                  <div className="feature-content">
                  <h3 className=" h5" style={hoveredIndex === index ? { color: "white" } : {color:"#3fa9f5"}}>{feature.title}</h3>

                    <p className="mb-0">{feature.description}</p>
                  </div>
                  {/* <Link href={feature.link}>
                    <a className="link-with-icon text-decoration-none mt-3" style={{ color: hoveredIndex === index ? "white" : "black" }}>
                      View Details <i className="far mb-1"><BsArrowRight /></i>
                    </a>
                  </Link> */}
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
