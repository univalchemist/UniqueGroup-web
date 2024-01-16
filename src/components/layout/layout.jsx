import React from "react";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <article className={styles.outlet}>{children}</article>
      <Footer

      />
    </>
  );
}
