import React from "react";
import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import ContactCard from "@components/contact-us/ContactCard";
import ContactForm from "@components/contact-us/ContactForm";
import CareerPromo from "@components/career/CareerPromo";

const ContactUs = () => {
  return (
    <Layout title="Company Overview" desc="">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Company Overview"
        desc="Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise. Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services."
      />
      <ContactCard />
      {/* <div className="card px-10 mx-10 bg-dark">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d706.0656840458761!2d-121.93097753041656!3d37.690223759504235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808feb8989955555%3A0xc5b6a41dd48ce1c9!2s7901%20Stoneridge%20Dr%20Suite%20390%2C%20Pleasanton%2C%20CA%2094588%2C%20USA!5e1!3m2!1sen!2sin!4v1712165095314!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}

      <CareerPromo />
      {/* <ContactForm /> */}
      <Footer />
    </Layout>
  );
};

export default ContactUs;
