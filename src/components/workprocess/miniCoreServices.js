import React, { useState } from "react";
import Link from "next/link";
import styles from "./miniCoreServices.module.css";

export default function MiniCoreServices() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => setHoveredCard(index);
  const handleMouseLeave = () => setHoveredCard(null);

  const baseStyle = { background: "linear-gradient(115deg, #3fea2c, #31c47f)", color: "white" };
  const hoverStyle = { backgroundColor: "white", color: "#00205f", border: "1px solid #00205f" };

  const cards = [
    {
      href: "/core-services#responsible-ai",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="currentColor"
          className="bi bi-textarea-resize mb-4"
          style={hoveredCard === 0 ? { color: "white" } : { color: "#3fa9f5" }}
          viewBox="0 0 16 16"
        >
          <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5v-7zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3h-11zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0zm0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0z" />
        </svg>
      ),
      title: "Responsible AI",
      description:
        "We craft AI solutions with a conscience. Our Responsible AI framework ensures ethical, transparent, and accountable AI deployment, aligning with societal values and regulatory requirements.",
    },
    {
      href: "/core-services#visualization-and-user-experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="currentColor"
          className="bi bi-tablet mb-4"
          style={hoveredCard === 1 ? { color: "white" } : { color: "#3fa9f5" }}
          viewBox="0 0 16 16"
        >
          <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      ),
      title: "Visualization and User Experience",
      description:
        "Transform data into compelling stories through our advanced visualization services. From intuitive dashboards to interactive chatbots and seamless mobile apps, we enhance the user experience at every touchpoint.",
    },
    {
      href: "/core-services#data-foundation",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="currentColor"
          className="bi bi-repeat mb-4"
          style={hoveredCard === 2 ? { color: "white" } : { color: "#3fa9f5" }}
          viewBox="0 0 16 16"
        >
          <path d="M11 5.466V4H5a4 4 0 0 0-3.584 5.777.5.5 0 1 1-.896.446A5 5 0 0 1 5 3h6V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192Zm3.81.086a.5.5 0 0 1 .67.225A5 5 0 0 1 11 13H5v1.466a.25.25 0 0 1-.41.192l-2.36-1.966a.25.25 0 0 1 0-.384l2.36-1.966a.25.25 0 0 1 .41.192V12h6a4 4 0 0 0 3.585-5.777.5.5 0 0 1 .225-.67Z" />
        </svg>
      ),
      title: "Smart Data Foundation",
      description:
        "Our robust Data Foundation services ensure the integrity and security of your data assets. With comprehensive governance, quality control, integration, metadata management, and data modeling, we lay the groundwork for a data-driven organization. Smart Data Foundation capabilities automate data profiling, cleansing, lineage detection, data pipeline creation, knowledge graph creation by inspecting data etc. using AI. This helps enterprises accelerate building robust data foundation quickly and cost effectively.",
    },
    {
      href: "/core-services#smart-ai-platform",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="56"
          fill="currentColor"
          className="bi bi-shield-check mb-4"
          style={hoveredCard === 3 ? { color: "white" } : { color: "#3fa9f5" }}
          viewBox="0 0 16 16"
        >
          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
          <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
        </svg>
      ),
      title: "Smart AI Platform",
      description:
        " Our Smart AI Platform is built on next generation Data and AI practices. The platform has tools needed Data Management, Analytics, Analytical AI and Generative AI, Visualization capabilities. It is cloud agnostic supporting Microsoft, AWS, GCP, OCP etc. as well as LLM agnostic supporting any LLM of client’s choice.",
    },
  ];

  return (
    <section className="py-3 py-md-5 py-xl-8">
      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-3">
            <div className="row">
              <div className="col-12 col-xl-11">
                <h2 className="mb-3 mb-xl-4 text-primary">Core Services</h2>
                <p className="mb-3 mb-xl-4" style={{ color: "black" }}>
                  At SMART AI FOR ENTERPRISE INC. we are dedicated to providing
                  solutions that not only drive innovation but are also grounded
                  in responsibility and user-centric design. Our core services
                  encapsulate the essence of digital transformation.
                </p>
                <Link href="/core-services">
                  <a className="btn bsb-btn-2xl btn-primary rounded-pill" style={{ background: "linear-gradient(115deg, #3fea2c, #31c47f)" }}>
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9 overflow-hidden">
            <div className="row gy-4">
              {cards.map((card, index) => (
                <Link href={card.href} key={index} passHref>
                  <div
                    className="col-12 col-sm-6"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className="card border shadow-lg rounded-custom"
                      style={
                        hoveredCard === index ? baseStyle : hoverStyle
                      }
                    >
                      <div className="card-body mini-cre-service-card text-center p-4 p-xxl-5 d-flex flex-column align-items-center justify-content-center">
                        {card.icon}
                        <h4 className="mb-4" style={hoveredCard === index ? { color: "white" } : { color: "#3fa9f5" }}>{card.title}</h4>
                        <p className={`${styles.description} mb-4`}>{card.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
