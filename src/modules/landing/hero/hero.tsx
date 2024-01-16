import React from "react";
import cn from "classnames";
import styles from "./hero.module.css";
import Wrapper from "src/components/wrapper/wrapper";
import Image from "next/image";
import Button from "src/components/button/button";
import type { HomeData } from "src/constants/types";
import { ANCHORS } from "../../../constants/index";

interface HeroProps {
  homeData: HomeData;
}

export default function Hero(props: HeroProps) {
  const downloadBrochure = () => {
    let link = document.createElement("a");
    link.download = "Brochure";
    link.href = "/Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // delete link;
  };
  return (
    <Wrapper outerId={ANCHORS.HOME} className={cn(styles.wrapper)}>
      <section className={styles.info}>
        <h1>
          We Serve
          <br /> <u>Marine</u> Industry
        </h1>
        <p>
          Your trusted partner for <br />
          electrical & instrumentation, structural, <br />
          cruise outfitting
        </p>
        <Button
          onClick={downloadBrochure}
          className={styles.button}
          type="green"
        >
          Download Brochure
          <svg width="33" height="16" viewBox="0 0 33 16" fill="none">
            <path
              d="M32.0424 8.70711C32.4329 8.31658 32.4329 7.68342 32.0424 7.29289L25.6785 0.928932C25.2879 0.538408 24.6548 0.538408 24.2642 0.928932C23.8737 1.31946 23.8737 1.95262 24.2642 2.34315L29.9211 8L24.2642 13.6569C23.8737 14.0474 23.8737 14.6805 24.2642 15.0711C24.6548 15.4616 25.2879 15.4616 25.6785 15.0711L32.0424 8.70711ZM0 9H31.3353V7H0L0 9Z"
              fill="white"
            />
          </svg>
        </Button>
      </section>
      <section className={styles.image}>
        <img src={props.homeData.heroImage} alt="Unique Group" />
      </section>
    </Wrapper>
  );
}
