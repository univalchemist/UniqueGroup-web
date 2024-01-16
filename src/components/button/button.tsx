import React from "react";
import cn from "classnames";
import styles from "./button.module.css";
import { RightArrow } from "../icons";

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type: "green" | "blue" | "submit" | "outline";
  children: React.ReactNode;
  htmlType?: "submit" | "reset" | "button"
  disabled?: boolean;
  
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.htmlType}
      className={cn(styles.button, !!props.className && [props.className], [
        styles[props.type],
      ])}
    >
      {props.children}{" "}
      {props.type === "submit" && (
       <RightArrow />
      )}
    </button>
  );
}
