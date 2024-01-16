import * as React from "react";
import { useState, useEffect } from "react";
import cn from "classnames";
import Wrapper from "src/components/wrapper/wrapper";
import styles from "./costs.module.scss";
import Button from "../../../components/button/button";

interface CostsProps {
  finalPrice: number | string;
  onNext: () => void;
  onBack: () => void;
}
export default function Costs(props: CostsProps) {
  return (
    <Wrapper className={styles.wrapper}>
      <div>
        <h2>Thank You For Visiting UniqueGroup</h2>
        <h2>We Will Get Back To You The Soonest</h2>
      <h1 className={cn("h1")}>Budgetary Cost</h1>
        <h1 className={cn("h1")}>{props.finalPrice} SGD</h1>
      </div>
      
      

      <div className={styles.footer}>
      <Button onClick={props.onBack} type="outline">
          Back
        </Button>
        <Button onClick={props.onNext} type="submit">
          Home
        </Button>
       
      </div>
    </Wrapper>
  );
}
