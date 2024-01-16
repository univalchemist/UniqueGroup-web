import React from "react";
import styles from "./logo.module.css";
import cn from "classnames";
import assets from "src/constants/assets";

interface LogoProps {
  className: string;
}
export default function Logo(props: LogoProps) {
  return (
    <div className={cn(styles.wrapper, props.className)}>
      <img width={45} height={45} style={{objectFit: "contain"}} src={assets.LOGO} alt="Logo" />
      <span>Unique Group</span>
    </div>
  );
}
