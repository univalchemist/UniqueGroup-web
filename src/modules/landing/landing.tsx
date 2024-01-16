import React, { useState } from "react";
import Image from "next/image";
import styles from "./landing.module.css";
import cn from "classnames";
import Wrapper from "src/components/wrapper/wrapper";

import type { HomeData } from "src/constants/types";
import Hero from "./hero/hero";
import CompanyLogos from "./company-logos/company-logos";
import Services from "./services/services";
import OurProject from "./our-project/our-project";
import OurClients from "./our-clients/our-clients";
interface LandingProps {
  homeData: HomeData;
}
export default function Landing({ homeData }: LandingProps) {
  return (
    <>
      <Hero homeData={homeData} />
      <CompanyLogos homeData={homeData} />
      <Services homeData={homeData} />
      <OurProject homeData={homeData} />
      <OurClients homeData={homeData} />
    </>
  );
}
