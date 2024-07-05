import React from "react";

import Layout from "@layout/Layout";
import Footer from "@layout/Footer/Footer";
import Navbar from "@layout/Header/Navbar";
import PageHeader from "@components/common/PageHeader";
import SingleServicePromo from "@components/services/SingleServicePromo";
import SingleServiceRegister from "@components/services/SingleServiceRegister";
import SingleServiceFeature from "@components/services/SingleServiceFeature";
import SingleServiceFeatureTwo from "@components/services/SingleServiceFeatureTwo";
import UseCaseSectionOne from "@components/services/UseCaseSection1";
import { MdFiberSmartRecord } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaLink, FaPeopleGroup, FaDatabase } from "react-icons/fa6";
import { GiDigitalTrace, GiMoneyStack, GiProfit } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { GrAnnounce } from "react-icons/gr";
import { MdCrisisAlert } from "react-icons/md";
import { IoMdAnalytics } from "react-icons/io";
import {
  supplyChainResilienceDataCurrentChallenges,
  supplyChainResilienceDataCurrentPropositions,
  smartChallengesPropositions,
  SmartChallengesChallenges,
  manufacturingExcellenceChallenges,
  manufacturingExcellenceProposition,
  smartMarketingChallenges,
  smartMarketingProposition,
  smartSalesOperationChallenges,
  smartSalesOperationProposition,
  pricingAndProfitabilityChallenges,
  pricingAndProfitabilityProposition,
  smartSourcingProposition,
  smartSourcingChallenges,
} from "@utils/data";
import { RiProductHuntLine } from "react-icons/ri";
import UseCaseTitle from "@components/workprocess/customUseCaseTitle";
import Link from "next/link";
import { useRouter } from "next/router";

const Integrations = () => {
  const router = useRouter();
  return (
    <Layout title="Use-Cases" desc="This is integrations page">
      <Navbar classOption="navbar-light" />

      <PageHeader
        title="Use Cases"
        desc="At SMART AI FOR ENTERPRISE INC. we redefine operational efficiency across every facet of your business. Our tailored solutions are designed to elevate your operational capabilities to new heights."
      />

      <Link href="/use-cases/smartSourcing">
        <a>
          <UseCaseSectionOne
            title="Smart Sourcing"
            type="normal"
            image={"/use-cases/1.jpeg"}
            icon={<MdFiberSmartRecord />}
          />
        </a>
      </Link>
      <Link href="/use-cases/manufacturingExcellence">
        <a>
          <UseCaseSectionOne
            title="Manufacturing Excellence"
            type="reverse"
            image={"/use-cases/2.jpeg"}
            icon={<BsTools />}
          />
        </a>
      </Link>

      <Link href="/use-cases/supplyChainResilience">
        <a>
          <UseCaseSectionOne
            title="Supply Chain Resilience"
            type="normal"
            image={"/use-cases/3.webp"}
            icon={<FaLink />}
          />
        </a>
      </Link>
      <Link href="/use-cases/SmartTalentAcquisition">
        <a>
          <UseCaseSectionOne
            title="Smart Talent Acquisition"
            type="reverse"
            image={"/use-cases/4.jpeg"}
            icon={<FaPeopleGroup />}
          />
        </a>
      </Link>

      <UseCaseTitle
        title="Advanced Business Solutions"
        desc="At SMART AI FOR ENTERPRISE INC. our mission is to fuel your growth trajectory with smart, scalable, and sustainable strategies. Dive into the new era of profitability with our suite of services"
      />
      <Link href="/use-cases/smartMarketing">
        <a>
          <UseCaseSectionOne
            title="Smart Marketing"
            type="reverse"
            image={"/use-cases/12.jpeg"}
            icon={<GrAnnounce />}
          />
        </a>
      </Link>
      <Link href="/use-cases/smartSalesOperations">
        <a>
          <UseCaseSectionOne
            id="smart-sales-operations"
            title="Smart Sales Operations"
            type="normal"
            image={"/use-cases/image-1.webp"}
            icon={<MdCrisisAlert />}
          />
        </a>
      </Link>
      <Link href="/use-cases/PricingOptimization">
        <a>
          <UseCaseSectionOne
            title="Pricing Optimization"
            type="reverse"
            image={"/use-cases/image-2.webp"}
            icon={<MdCrisisAlert />}
          />
        </a>
      </Link>
      <Link href="/use-cases/ProfitabilityOptimization">
        <a>
          <UseCaseSectionOne
            title="Profitability Optimization"
            type="normal"
            image={"/use-cases/image-3.webp"}
            icon={<GiProfit />}
          />
        </a>
      </Link>

      <UseCaseTitle
        title="Innovative Business Models"
        desc="At SMART AI FOR ENTERPRISE INC we're not just adapting to the new economy; we're creating it. Our innovative strategies are tailored to help your business lead and thrive through transformation and monetization:"
      />
      <Link href="/use-cases/SmartFinanceOperations">
        <a>
          <UseCaseSectionOne
            title="Smart Finance Operations"
            type="reverse"
            image={"/use-cases/5.jpeg"}
            icon={<GiMoneyStack />}
          />
        </a>
      </Link>
      <Link href="/use-cases/RevenueAssurance">
        <a>
          <UseCaseSectionOne
            title="Revenue Assurance"
            type="normal"
            image={"/use-cases/16.jpeg"}
            icon={<IoMdAnalytics />}
          />
        </a>
      </Link>
      <Link href="/use-cases/DataMonetization">
        <a>
          <UseCaseSectionOne
            title="Data Monetization"
            type="reverse"
            image={"/use-cases/6.jpeg"}
            icon={<FaDatabase />}
          />
        </a>
      </Link>
      <Link href="/use-cases/ProducttoServiceTransition">
        <a>
          <UseCaseSectionOne
            title="Product to Service Transition"
            type="normal"
            image={"/use-cases/image-4.webp"}
            icon={<RiProductHuntLine />}
          />
        </a>
      </Link>
      <Link href="/use-cases/DigitalProductsandServices">
        <a>
          <UseCaseSectionOne
            title="Digital Products and Services"
            type="reverse"
            image={"/use-cases/8.jpeg"}
            icon={<GiDigitalTrace />}
          />
        </a>
      </Link>

      <UseCaseTitle
        title="Sustainable Future Solutions"
        desc="Lead the way in sustainability With Our Esg Excellence Initiative. We help you reduce your environmental impact, increase your social responsibility, and create a better world for all."
      />
      <Link href="/use-cases/NewEcosystemPartnerships">
        <a>
          <UseCaseSectionOne
            title="New Ecosystem Partnerships"
            type="normal"
            image={"/use-cases/9.jpeg"}
            icon={<MdFiberSmartRecord />}
          />
        </a>
      </Link>
      <Link href="/use-cases/sustainabilityAnalytics">
        <a>
          <UseCaseSectionOne
            title="Sustainability Analytics"
            type="reverse"
            image={"/use-cases/10.jpeg"}
            icon={<FaLightbulb />}
          />
        </a>
      </Link>
      <Link href="/use-cases/CarbonAccounting">
        <a>
          <UseCaseSectionOne
            title="Carbon Accounting"
            type="normal"
            image={"/use-cases/11.jpeg"}
            icon={<BiSolidReport />}
          />
        </a>
      </Link>
      <SingleServicePromo />
      <SingleServiceRegister />
      <hr />
      <Footer />
    </Layout>
  );
};

export default Integrations;
