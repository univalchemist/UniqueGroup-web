import React from "react";
import cn from "classnames";
import styles from "./company-logos.module.css";
import Wrapper from "src/components/wrapper/wrapper";
import type { HomeData } from "src/constants/types";
import Marquee from "react-fast-marquee";

interface HeroProps {
  homeData: HomeData;
}

export default function CompanyLogos(props: HeroProps) {
  const mRef = React.useRef();
  React.useEffect(() => {}, []);

  return (
    <Wrapper outerClass={styles.outer} className={cn(styles.wrapper)}>
      <div className={styles.label}>
        TRUSTED BY SHIPYARDS &<br /> VESSEL OWNERS
      </div>
      <Marquee gradientColor={[250, 252, 255]}>
        <div className={styles.marqee}>
          {props.homeData.companyLogos.map((item) => (
            <img height={70} key={item} src={item} alt="image" />
          ))}
        </div>
      </Marquee>
    </Wrapper>
  );
}
