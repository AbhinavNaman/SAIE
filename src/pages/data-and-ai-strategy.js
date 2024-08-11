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
    <Layout title="Use-Cases" desc="This is integrations page" canonicalUrl="https://saie.ai/data-and-ai-strategy">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Data and AI Strategy"
        desc="We Offer Comprehensive Data And AI Strategy To Drive Innovation And Excellence. Our Solutions Are Designed To Transform Businesses And Empower Them With Advanced Data Analytics And Artificial Intelligence."
      />
      <section className="promo-section ptb-60 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <div className="section-heading text-center">
                <h5>
                  At SMART AI FOR ENTERPRISE INC, we are at the forefront of
                  driving innovation and excellence through our comprehensive
                  Data and AI strategy. We believe in harnessing the power of
                  advanced data analytics and artificial intelligence to
                  transform businesses, making them smarter, faster, and more
                  efficient. Our strategy is built on a foundation of robust
                  data governance, state-of-the-art technology, and a commitment
                  to Responsible AI practices. We empower our clients by
                  unlocking the full potential of their data and providing
                  automation, delivering actionable insights and tailor-made AI
                  solutions like recruitment automation. Partner with us to
                  leverage our expertise in turning data into value and AI into
                  reality, setting a new standard for success in your industry.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Integrations;
