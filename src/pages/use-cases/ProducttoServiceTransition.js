import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { RiProductHuntLine } from "react-icons/ri";



const ProducttoServiceTransition = () => {
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Product to Service Transition"
        desc="Evolve your product offerings into full-fledged services with our seamless transition plans. We provide the insights and tools necessary to shift towards a service-oriented model, enhancing customer engagement and satisfaction."
      />


      <UseCaseSectionOne
        type="normal"
        image={"/use-cases/image-4.webp"}
        icon={<RiProductHuntLine />}
      />
      <Footer />
    </Layout>
  );
};

export default ProducttoServiceTransition;
