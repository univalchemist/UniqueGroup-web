import classNames from "classnames";
import React from "react";
import styles from "./wrapper.module.css";

interface WrapperProps {
  outerClass?: string;
  className?: string;
  outerId?: string;
  children: React.ReactNode;
  noFade?: boolean;
  withNav?: boolean;
  isHidden?: boolean;
  outerChild?: React.ReactNode;
  full?: boolean;
  id?: string,
  outerStyle?: React.CSSProperties,
  innerStyle?:React.CSSProperties,
}
const Wrapper = ({
  outerClass,
  className,
  outerId,
  children,
  noFade,
  withNav,
  id,
  isHidden,
  outerChild,
  full,
  outerStyle,
  innerStyle,
}: WrapperProps) => {
  return (
    <div
      id={outerId}
      style={outerStyle}
      className={classNames({
        [styles.wrapper]: true,
        [styles.noFade]: !!noFade,
        [styles.withNav]: !!withNav,
        [styles.isHidden]: !!isHidden,
        [styles.full]: !!full,
        [outerClass || ""]: true,
      })}
    >
      <div
      style={innerStyle}
      id={id || undefined}
        className={classNames([
          styles.container,
          full && styles.full,
          className,
          !!noFade && styles.noFade,
        ])}
      >
        {children}
      </div>
      {outerChild}
    </div>
  );
};

export default Wrapper;
