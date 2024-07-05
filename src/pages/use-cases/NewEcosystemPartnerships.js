import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { MdFiberSmartRecord } from "react-icons/md";




const NewEcosystemPartnerships = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="New Ecosystem Partnerships"
        desc="Partner with SMART AI FOR ENTERPRISE INC and reshape your future. Let's innovate and pioneer new models together, ensuring your business is not just part of the conversation but leading the dialogue in industry transformation."
      />


      <UseCaseSectionOne
      desc="Forming new ecosystem partnerships involves collaborating with other businesses, organizations, and stakeholders to create a synergistic environment. These partnerships enable companies to access new markets, share resources, and co-create value. By leveraging the strengths of each partner, businesses can innovate more effectively, enhance their offerings, and achieve competitive advantages in the marketplace."
        type="normal"
        image={"/use-cases/9.jpeg"}
        icon={<MdFiberSmartRecord />}
      />
      <Footer />
    </Layout>
  );
};

export default NewEcosystemPartnerships;

