import React, { useState, useEffect } from "react";
import cn from "classnames";

import styles from "./our-clients.module.scss";
import Wrapper from "src/components/wrapper/wrapper";
import { HomeData } from "../../../constants/types";
import { ANCHORS } from '../../../constants/index';

interface OurClientsProps {
  homeData: HomeData;
}
export default function OurClients(props: OurClientsProps) {
  return (
    <Wrapper outerId={ANCHORS.TESTIMONIALS} outerClass={styles.outer} className={styles.wrapper}>
      <h1  className={cn("h1", styles.head)}>
        Our <u>Client</u>
      </h1>

      <section className={cn(styles.grid)}>
        {props.homeData.clientFeedback.map((item, index) => (
          <div
            key={`${item.firstName}${index}`}
            className={styles.cardContainer}
          >
            <div className={styles.card}>
              <div className={styles.message}>
                <div className={styles.quote}>“</div>
                <p>{item.message}</p>
              </div>
              <div className={styles.user}>
                <div className={styles.avatar}>{item.initials}</div>
                <div className={styles.info}>
                  <h5 className="h3">
                    {item.firstName} {item.lastName}
                  </h5>
                  <p>{item.jobRole}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Wrapper>
  );
}
