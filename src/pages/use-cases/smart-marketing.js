import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { GrAnnounce } from "react-icons/gr";
import {
  smartMarketingChallenges,
  smartMarketingProposition,
} from "@utils/data";



const smartMarketing = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Smart Marketing"
        desc="Leverage our data-driven marketing insights to craft compelling narratives that resonate with your audience. Our Smart Marketing solutions optimize campaigns in real-time, ensuring maximum engagement and ROI."
      />


      <UseCaseSectionOne
        id="smart-marketing"
        type="normal"
        image={"/use-cases/12.jpeg"}
        challenges={
          <div>
            {smartMarketingChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {smartMarketingProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={< GrAnnounce/>}
      />
      <Footer />
    </Layout>
  );
};

export default smartMarketing;
