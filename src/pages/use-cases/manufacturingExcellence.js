import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { BsTools } from "react-icons/bs";
import {
  manufacturingExcellenceChallenges,
  manufacturingExcellenceProposition,
} from "@utils/data";



const manufacturingExcellence = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Manufacturing Excellence"
        desc="Our approach to Manufacturing Excellence integrates cutting-edge AI with lean manufacturing principles, ensuring your production lines are not just faster but also smarter, reducing waste and increasing output quality"
      />


      <UseCaseSectionOne
        id="manufacturing-excellence"
        type="normal"
        image={"/use-cases/2.jpeg"}
        challenges={
          <div>
            {manufacturingExcellenceChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {manufacturingExcellenceProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={< BsTools/>}
      />
      <Footer />
    </Layout>
  );
};

export default manufacturingExcellence;
