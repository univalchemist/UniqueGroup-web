import * as React from "react";
import cn from "classnames";
import Wrapper from "src/components/wrapper/wrapper";
import styles from "./success.module.scss";
import Button from "../../../components/button/button";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Success() {
  const router = useRouter();
  return (
    <Wrapper className={styles.wrapper}>
      <h1 className={cn("h1")}>Message Sent!</h1>
      <div className={styles.home}>
        <Link href="/" >
          <Button type="outline">Go Home</Button>
        </Link>
      </div>
    </Wrapper>
  );
}
