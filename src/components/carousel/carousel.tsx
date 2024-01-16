import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import cn from "classnames";
import styles from "./carousel.module.scss";
import useCarousel from "src/hooks/useCarousel";
import Slider from "react-slick";
import Wrapper from "src/components/wrapper/wrapper";

interface CarouselProps {
  images: string[];
  wrapper?: string;
}
export default function Carousel({ images = [], ...props }: CarouselProps) {
  const [active, setActive] = useState(0);
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    //     lazyLoad: true,
    dotClass: styles.dot,
    initialSlide: 0,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActive(newIndex);
    },
    appendDots: (dots: React.ReactNode) => (
      <ul className={styles.dotContainer}>{dots}</ul>
    ),
    customPaging: (i: number) => {
      return (
        <div
          className={cn(styles.dot, {
            [styles.active]: i === active,
          })}
        ></div>
      );
    },
    // dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    speed: 3000,
  };

  return (
    <Wrapper
      outerClass={styles.outer}
      className={cn([styles.wrapper, !!props.wrapper && props.wrapper])}
    >
      <Head key="reactSlick">
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Slider {...settings}>
        {/* <div className={styles.slider}> */}
        {images.map((i, index) => (
          <img
            key={`${i}${index}`}
            className={cn(styles.image)}
            src={i}
            width={1190}
            height={542.58}
            // layout="responsive"
            alt="Image"
          />
        ))}
        {/* </div> */}
      </Slider>
    </Wrapper>
  );
  // return (
  //   <div className={cn(styles.wrapper)}>

  //     <div className={styles.slider}>
  //       {images.map((i) => (
  //         <img key={i} className={styles.image} src={i} alt="Image" />
  //       ))}
  //     </div>
  //     {children}
  //     <div className={styles.nav}>
  //       <button onClick={}>left</button>
  //       <button>right</button>
  //     </div>
  //   </div>
  // );
}
