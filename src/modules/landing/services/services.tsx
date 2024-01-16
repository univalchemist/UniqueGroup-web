import React from "react";
import cn from "classnames";
import styles from "./services.module.scss";
import Wrapper from "src/components/wrapper/wrapper";
import type { HomeData, Service } from "src/constants/types";
import Link from "next/link";
import ServiceGrid from "src/components/service-grid/service-grid";
import { useRouter } from "next/router";
import { SubService } from "../../../constants/types";
import { ANCHORS } from '../../../constants/index';

interface HeroProps {
  homeData: HomeData;
}



export default function Services(props: HeroProps) {
  const router = useRouter();

  const handleClick = (item: Service | SubService) => {
    if ("slug" in item) {
      // router.push("`/service/[slug]`", `/service/${item.slug}`);
      router.push(`/service/${item.slug}`);
    } else {
      debugger;
    }
  };
  return (
    <>
      <Wrapper outerId={ANCHORS.SERVICES} outerClass={styles.outer} className={cn(styles.wrapper)}>
        <h1 className={cn("h1", styles.head)}>
          Our <u>Services</u>
        </h1>
      </Wrapper>
      <ServiceGrid
        data={props.homeData.services}
        isClickable={true}
        onCardClick={handleClick}
      />
    </>
  );
}
