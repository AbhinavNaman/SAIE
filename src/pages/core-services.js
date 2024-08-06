import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { BiSolidReport } from "react-icons/bi";
import { ImEllo } from "react-icons/im";
import { SlGraph } from "react-icons/sl";
import { MdDataUsage } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const Integrations = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page"
      canonicalUrl="https://saie.vercel.app/core-services"
    >
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Core Services"
        desc="At SMART AI FOR ENTERPRISE INC we are dedicated to providing solutions that not only drive innovation but are also grounded in responsibility and user-centric design. Our core services encapsulate the essence of digital transformation."
      />
      <section className=" promo-section ptb-60" style={{  background: "linear-gradient(115deg, #3fea2c, #31c47f)"}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h5 className="" style={{color:"#00205e"}}>
                  Discover The Core Of Transformation With Our Comprehensive
                  Services
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCaseSectionOne
        id="responsible-ai"
        title="Responsible AI"
        desc="We craft AI solutions with a conscience. Our Responsible AI framework ensures ethical, transparent, and accountable AI deployment, aligning with societal values and regulatory requirements."
        type="normal"
        image={"/core-services/1.jpeg"}
        icon={<BiSolidReport />}
      />

      <UseCaseSectionOne
        id="visualization-and-user-experience"
        title="Visualization and User Experience"
        desc="Transform data into compelling stories through our advanced visualization services. From intuitive dashboards to interactive chatbots and seamless mobile apps, we enhance the user experience at every touchpoint."
        type="reverse"
        image={"/core-services/2.jpg"}
        icon={<ImEllo />}
      />
      <UseCaseSectionOne
        id="analytics-and-ai"
        title="Analytics and AI"
        desc="Navigate the future with our predictive and prescriptive analytics, optimization algorithms, machine learning, and generative AI models. We turn complex data into actionable insights, driving smarter decision-making and operational efficiency."
        type="normal"
        image={"/core-services/3.jpeg"}
        icon={<SlGraph />}
      />
      <UseCaseSectionOne
        id="data-foundation"
        title="Smart Data Foundation"
        desc="Our robust Data Foundation services ensure the integrity and security of your data assets. With comprehensive governance, quality control, integration, metadata management, and data modeling, we lay the groundwork for a data-driven organization. Smart Data Foundation capabilities automate data profiling, cleansing, lineage detection, data pipeline creation, knowledge graph creation by inspecting data etc. using AI. This helps enterprises accelerate building robust data foundation quickly and cost effectively.
"
        type="reverse"
        image={"/core-services/4.webp"}
        icon={<MdDataUsage />}
      />
      <UseCaseSectionOne
        id="smart-ai-platform"
        title="Smart AI Platform"
        desc=" Our Smart AI Platform is built on next generation Data and AI practices. The platform has tools needed for Data Management, Analytics, Analytical AI and Generative AI, Visualization capabilities. It is cloud agnostic supporting Microsoft, AWS, GCP, OCP etc. as well as LLM agnostic supporting any LLM of client’s choice.
"
        type="normal"
        image={"/core-services/5.webp"}
        icon={<GiBrain />}
      />
      <Footer />
    </Layout>
  );
};

export default Integrations;
