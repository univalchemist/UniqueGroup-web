import React from "react";

import cn from "classnames";
import styles from "./ham.module.scss";

interface HamProps {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}
export default function Ham(props: HamProps) {
  const handleClick = () => {
    props.onClick(!props.isOpen);
  };
  return (
    <div
      onClick={handleClick}
      className={cn(styles.wrapper, {
        [styles.open]: props.isOpen,
      })}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
