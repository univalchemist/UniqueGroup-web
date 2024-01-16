import React, { useState, useEffect, EffectCallback } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import cn from "classnames";
import assets from "src/constants/assets";
import Wrapper from "../wrapper/wrapper";
import Ham from "../ham/ham";
import { ANCHORS } from "src/constants";
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "../logo/logo";

interface NavItem {
  text: string;
  id: string | number;
  type: string;
  to: string;
}

const menuData: NavItem[] = [
  {
    text: "Home",
    id: "home",
    type: "SCROLL",
    to: `/#${ANCHORS.HOME}`,
  },
  {
    text: "Services",
    id: "services",
    type: "SCROLL",
    to: `/#${ANCHORS.SERVICES}`,
  },
  {
    text: "Projects",
    id: "projects",
    type: "SCROLL",
    to: `/#${ANCHORS.PROJECTS}`,
  },
  {
    text: "Testimonials",
    id: "testimonials",
    type: "SCROLL",
    to: `/#${ANCHORS.TESTIMONIALS}`,
  },
  {
    text: "Contact",
    id: "contact",
    type: "SCROLL",
    to: `#${ANCHORS.CONTACT}`,
  },
];

export default function Navbar() {
  const [isMobileMenuVisible, toggleMobileMenu] = useState<boolean>(false);
  const [isNavVisible, toggleNavVisiblity] = useState(true);
  const previousScrollValueRef = React.useRef<number>(0);
  const [isAtTop, toggleTop] = React.useState<boolean>(true);
  const [active, setActive] = useState<string | number>("");
  const router = useRouter();
  useEffect(() => {
    window.onscroll = () => {
      toggleTop(window.scrollY <= 65);
      toggleNavVisiblity(
        window.scrollY < previousScrollValueRef.current || window.scrollY < 30
      );
      previousScrollValueRef.current = window.scrollY;
    };

    return () => {
      window.onscroll = null;
    };
  }, []);
  useEffect(() => {
    const path = window.location.href;
    menuData.forEach((m) => {
      if (path.includes(m.to)) {
        setActive(m.id);
      }
    });
  }, [router.pathname]);

  const handleMenuItemClick = (item: NavItem) => {
    setActive(item.id);
    toggleMobileMenu(false);
  };

  return (
    <Wrapper
      outerClass={cn(styles.outer, {
        [styles.shadow]: true,
        [styles.visible]: !isAtTop,
      })}
      // outerStyle={{ marginTop: isNavVisible ? "0px" : "-80px" }}
      className={styles.wrapper}
    >
      <Logo className={styles.logo} />

      <ul className={cn(styles.menu, isMobileMenuVisible && styles.toggled)}>
        {menuData.map((item) => (
          <Link key={item.id} href={item.to || "/"}>
            <li
              className={cn({
                [styles.active]: item.id === active,
              })}
              onClick={() => handleMenuItemClick(item)}
            >
              {item.text}
            </li>
          </Link>
        ))}
      </ul>
      {/* <div className={cn(styles.homeIcon)}>
        <Link href={`/#${ANCHORS.HOME}`}>
          <svg viewBox="0 0 20 17">
            <path d="M7.99998 15.9997V10.9997H12V15.9997C12 16.5497 12.45 16.9997 13 16.9997H16C16.55 16.9997 17 16.5497 17 15.9997V8.99973H18.7C19.16 8.99973 19.38 8.42973 19.03 8.12973L10.67 0.599727C10.29 0.259727 9.70998 0.259727 9.32998 0.599727L0.969976 8.12973C0.629976 8.42973 0.839976 8.99973 1.29998 8.99973H2.99998V15.9997C2.99998 16.5497 3.44998 16.9997 3.99998 16.9997H6.99998C7.54998 16.9997 7.99998 16.5497 7.99998 15.9997Z" />
          </svg>
        </Link>
      </div> */}
      <div className={cn(styles.ham, isMobileMenuVisible && styles.toggled)}>
        <Ham isOpen={isMobileMenuVisible} onClick={toggleMobileMenu} />
      </div>
    </Wrapper>
  );
}
