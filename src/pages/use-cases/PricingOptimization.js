import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { MdCrisisAlert } from "react-icons/md";
import {
  pricingAndProfitabilityChallenges,
  pricingAndProfitabilityProposition,
} from "@utils/data";



const PricingOptimization = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Pricing Optimization"
        desc="With our Pricing Optimization models, we ensure that you hit the sweet spot every time, combining competitive analysis, market trends, and consumer behavior to set prices that maximize margins and drive sales."
      />


      <UseCaseSectionOne
        type="normal"
        image={"/use-cases/image-2.webp"}
        challenges={
          <div>
            {pricingAndProfitabilityChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {pricingAndProfitabilityProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<MdCrisisAlert />}
      />
      <Footer />
    </Layout>
  );
};

export default PricingOptimization;
