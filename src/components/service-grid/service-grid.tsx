import React from "react";
import cn from "classnames";
import styles from "./service-grid.module.scss";
import Wrapper from "src/components/wrapper/wrapper";
import type { HomeData, Service, SubService } from "src/constants/types";
import Link from "next/link";

interface ServiceCardProps {
  data: Service | SubService;
  isLeftover: boolean;
  onClick?: (data: Service | SubService) => void;
  isClickable: boolean;
  showDescriptionInList?: boolean;
}
const ServiceCard = ({
  data,
  isClickable,
  showDescriptionInList,
  isLeftover,
  onClick,
}: ServiceCardProps) => {
  const handleClick = () => {
    if (isClickable) {
      onClick && onClick(data);
    }
  };

  // css classes
  const c = {
    [styles.clickable]: isClickable,
  };

  return (
    // <Link href={data.url}>
    <div onClick={handleClick} className={cn(styles.card, c)}>
      {/* <svg width="90" height="90">
        <image xlinkHref={data.icon} width="90" height="90" />
      </svg> */}

      {/* at the moment this is only working for local files in public */}
      <div
        style={{
          WebkitMask: `url(${data.icon}) no-repeat center / contain`,
          mask: `url(${data.icon}) no-repeat center / contain;`,
        }}
        className={styles.icon}
      ></div>
      {/* <img src={data.icon} alt={data.title} /> */}
      {typeof data.title === "string" && <h5>{data.title}</h5>}
      {!!data.desc.length && (
        <ul
          className={cn({
            [styles.desc]: true,
            [styles.single]: data.desc.length === 1,
            [styles.list]: !!showDescriptionInList,
          })}
        >
          {data.desc.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      )}
      <div className={styles.view}>
        <span>View</span>
        <svg viewBox="0 0 33 16" fill="none">
          <path
            d="M32.0424 8.70711C32.4329 8.31658 32.4329 7.68342 32.0424 7.29289L25.6785 0.928932C25.2879 0.538408 24.6548 0.538408 24.2642 0.928932C23.8737 1.31946 23.8737 1.95262 24.2642 2.34315L29.9211 8L24.2642 13.6569C23.8737 14.0474 23.8737 14.6805 24.2642 15.0711C24.6548 15.4616 25.2879 15.4616 25.6785 15.0711L32.0424 8.70711ZM0 9H31.3353V7H0L0 9Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    // </Link>
  );
};

interface ServiceGridProps {
  data?: Service[] | SubService[];
  showDescriptionInList?: boolean;
  isClickable: boolean;
  onCardClick?: (data: Service | SubService) => void;
}

export default function ServiceGrid(props: ServiceGridProps) {
  if (!props.data) return null;
  const s = props.data;
  const leftOvers = props.data.length % 3;
  let [grid, trailing] =
    leftOvers === 0
      ? [s, []]
      : [
          s.slice(0, s.length - leftOvers),
          s.slice(s.length - leftOvers, s.length),
        ];
  return (
    <Wrapper
      outerClass={styles.outer}
      className={cn(styles.wrapper, {
        [styles.unclickable]: props.isClickable === false,
      })}
    >
      <section className={styles.grid}>
        {grid.map((item, index) => (
          <ServiceCard
            isLeftover={false}
            isClickable={props.isClickable}
            onClick={props.onCardClick}
            key={`service${index}`}
            showDescriptionInList={props.showDescriptionInList}
            data={item}
          />
        ))}
      </section>
      <section className={styles.trailing}>
        {trailing.map((item, index) => (
          <ServiceCard
            isLeftover={false}
            isClickable={props.isClickable}
            onClick={props.onCardClick}
            key={`servicelef${index}`}
            showDescriptionInList={props.showDescriptionInList}
            data={item}
          />
        ))}
      </section>
    </Wrapper>
  );
}
