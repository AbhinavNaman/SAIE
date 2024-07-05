import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { BiSolidReport } from "react-icons/bi";



const CarbonAccounting = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Carbon Accounting"
        desc="At SMART AI FOR ENTERPRISE INC, we're committed to integrating ESG excellence into the core of business operations. By pioneering innovative approaches to sustainability, we empower organizations to make a positive impact on the world while enhancing their corporate responsibility profile"
      />


      <UseCaseSectionOne
      desc="Carbon accounting is the process of measuring and reporting an organization’s carbon emissions. It involves tracking the sources of greenhouse gas emissions, quantifying them, and identifying opportunities for reduction. Accurate carbon accounting is essential for companies aiming to reduce their carbon footprint, comply with environmental regulations, and achieve sustainability targets. It also provides transparency and accountability, demonstrating a commitment to environmental stewardship."
        type="normal"
        image={"/use-cases/11.jpeg"}
        icon={<BiSolidReport />}
      />
      <Footer />
    </Layout>
  );
};

export default CarbonAccounting;
