import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { MdCrisisAlert } from "react-icons/md";
import {
  smartSalesOperationChallenges,
  smartSalesOperationProposition,
} from "@utils/data";



const smartSalesOperations = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Smart Sales Operations"
        desc="Revolutionize your sales processes with our AI-powered analytics. We streamline your sales pipeline, enhance lead generation, and enable your sales team to close deals faster and more efficiently than ever before."
      />


      <UseCaseSectionOne
        id="smart-sales-operations"
        type="normal"
        image={"/use-cases/image-1.webp"}
        challenges={
          <div>
            {smartSalesOperationChallenges.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        propositions={
          <div>
            {smartSalesOperationProposition.map((c, i) => (
              <li key={i + 1}>{c.data}</li>
            ))}
          </div>
        }
        icon={< MdCrisisAlert/>}
      />
      <Footer />
    </Layout>
  );
};

export default smartSalesOperations;
