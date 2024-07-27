import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { FaLink} from "react-icons/fa6";
import {
  supplyChainResilienceDataCurrentChallenges,
  supplyChainResilienceDataCurrentPropositions,
} from "@utils/data";



const supplyChainResilience = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Supply Chain Resilience"
        desc="In an era of uncertainty, our Supply Chain Resilience solutions provide you with the agility to respond to market changes, the robustness to withstand disruptions, and the strategic foresight to capitalize on emerging opportunities."
      />


      <UseCaseSectionOne
        id="supply-chain-resilience"
        type="normal"
        image={"/use-cases/3.webp"}
        challenges={
          <div>
            {supplyChainResilienceDataCurrentChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {supplyChainResilienceDataCurrentPropositions.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={< FaLink/>}
      />
      <Footer />
    </Layout>
  );
};

export default supplyChainResilience;