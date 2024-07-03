import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { MdFiberSmartRecord } from "react-icons/md";
import {
  smartSourcingProposition,
  smartSourcingChallenges,
} from "@utils/data";



const smartSourcing = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Smart Sourcing"
        desc="With our Smart Sourcing strategies, we help you identify, evaluate, and engage with the best suppliers using data-driven insights, minimizing costs while maximizing quality and sustainability."
      />


      <UseCaseSectionOne
        id="smart-sourcing"
        type="normal"
        image={"/use-cases/1.jpeg"}
        challenges={
          <div>
            {smartSourcingChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {smartSourcingProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<MdFiberSmartRecord />}
      />
      <Footer />
    </Layout>
  );
};

export default smartSourcing;

