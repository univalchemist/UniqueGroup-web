import React, { useState, useEffect } from "react";
import cn from "classnames";

import styles from "./our-project.module.scss";
import Wrapper from "src/components/wrapper/wrapper";
import { HomeData } from "../../../constants/types";
import { ANCHORS } from "../../../constants/index";

interface OurProjectProps {
  homeData: HomeData;
}
export default function OurProject(props: OurProjectProps) {
  return (
    <Wrapper
      outerId={ANCHORS.PROJECTS}
      outerClass={styles.outer}
      className={styles.wrapper}
    >
      <h1 className={cn("h1", styles.head)}>
        Our <u>Project</u>
      </h1>

      <section className={cn(styles.grid)}>
        {props.homeData.projects.map((item, index) => (
          <div key={`${item.title}${index}`} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <div className={styles.info}>
              <h2 className={cn("h3")}>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  );
}
