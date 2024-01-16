import React from "react";
import { useState, useEffect } from "react";
import assets from "src/constants/assets";
import Wrapper from "../wrapper/wrapper";
import styles from "./footer.module.scss";
import cn from "classnames";
import { ANCHORS } from "../../constants/index";

export default function Footer() {
  return (
    <Wrapper
      outerId={ANCHORS.CONTACT}
      outerClass={styles.outer}
      className={styles.wrapper}
    >
      <div className={styles.content}>
        <div className={cn(styles.logo, styles.top)}>
          <img src={assets.LOGO} alt="Logo" />
          <div className={styles.uq}>Unique Group</div>
        </div>

        <div className={styles.contact}>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={"/phone-call 1.svg"} alt="Whatsapp" />
            </div>

            <div className={styles.info}>
              <a href="tel:+6591858610">+65 91858610</a>
              <a style={{ marginLeft: "1rem" }} href="tel:+6588667210">
                +65 88667210
              </a>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={"/whatsapp 1.svg"} alt="Whatsapp" />
            </div>

            <div className={styles.info}>
              <a href="whatsapp://send?text=Hi want to enquire about:&phone=6591858610" target="_blank">+65 91858610</a>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={"/placeholder 1.svg"} alt="Office" />
            </div>

            <div className={styles.info}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.google.com/maps/@1.310653,103.7015603,17.46z"
              >
                10 Buroh Street, West Connect Building #07-32, Singapore 638739
              </a>
            </div>
          </div>

          <div></div>
          <div className={styles.item}>
            <div className={styles.icon}>
              <img src={"/gmail 1.svg"} alt="emal" />
            </div>

            <div className={styles.info}>
              <a href="mailto:sales@uniquegroup.sg">sales@uniquegroup.sg</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.logo}>
          <img src={assets.LOGO} alt="Logo" />
          <h3>Unique Group</h3>
        </div>
        <span>Copyright © Unique Group, Inc</span>
      </div>
    </Wrapper>
  );
}
