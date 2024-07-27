import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { FaPeopleGroup } from "react-icons/fa6";
import {
  smartChallengesPropositions,
  SmartChallengesChallenges,
} from "@utils/data";


const SmartTalentAcquisition = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Smart Talent Acquisition"
        desc="We empower your workforce with tools and insights to boost productivity. Our Smart Talent Acquisition uses advanced analytics to align your talent strategy with business priorities, fostering a more engaged and efficient workforce."
      />


      <UseCaseSectionOne
        id=""
        type="normal"
        image={"/use-cases/4.jpeg"}
        challenges={
          <div>
            {SmartChallengesChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {smartChallengesPropositions.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={<FaPeopleGroup />}
      />
      <Footer />
    </Layout>
  );
};

export default SmartTalentAcquisition;
