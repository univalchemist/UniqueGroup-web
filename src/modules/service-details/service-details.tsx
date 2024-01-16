import * as React from "react";
import { useState, useEffect } from "react";
import cn from "classnames";

import styles from "./service-details.module.scss";
import { ServiceDetails } from "src/constants/types";
import ServiceGrid from "src/components/service-grid/service-grid";
import Wrapper from "src/components/wrapper/wrapper";
import { underlineName } from "src/utils";
import Button from "../../components/button/button";
import Carousel from "../../components/carousel/carousel";
import { useRouter } from "next/router";

interface ServiceProps {
  serviceData: ServiceDetails;
}

export default function ServiceDetailsModule(props: ServiceProps) {
  const router = useRouter();
  const handleSubmit = () => {
    router.push(`/quote?service=${props.serviceData.slug}`);
  };

  return (
    <>
      <Carousel wrapper={styles.cWrapper} images={props.serviceData.images} />
      <Wrapper>
        <h1 className={cn("h1")}>
          <u>{props.serviceData.title}</u>
        </h1>
      </Wrapper>
      <ServiceGrid isClickable={false} showDescriptionInList={!!props.serviceData.showSubServicesInList} data={props.serviceData.subServices} />
      <Wrapper className={styles.action}>
        <Button onClick={handleSubmit} type="submit">
          {props.serviceData.isQuotable ? "Get Quotation" : "Contact Us"}
        </Button>
      </Wrapper>
    </>
  );
}
