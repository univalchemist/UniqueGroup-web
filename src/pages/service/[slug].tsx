import { GetStaticProps, GetStaticPaths } from "next";
import * as React from "react";
import { useState, useEffect } from "react";
import Carousel from "src/components/carousel/carousel";
import Layout from "src/components/layout/layout";
import { getAllServices, getHomeData, getServiceData } from "src/data/data";
import { ServiceDetails, IParams } from "../../constants/types";
import { serviceDetailsMapping } from "../../data/data";
import ServiceDetailsModule from "../../modules/service-details/service-details";

interface ServiceProps {
  serviceData: ServiceDetails;
}
export default function Service(props: ServiceProps) {
  return (
    <Layout>
      <ServiceDetailsModule serviceData={props.serviceData} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services = await getAllServices();

  return {
    paths: services
      .filter((h) => h.slug in serviceDetailsMapping)
      .map((h) => {
        return {
          params: {
            slug: h.slug,
          },
        };
      }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  if (!ctx.params || !ctx?.params?.slug)
    return {
      props: {},
      fallback: false,
    };
  const { slug } = ctx.params as IParams;
  const serviceData = await getServiceData(slug);

  if (!serviceData.length) {
    // throw new Error("efef");
  }
  return {
    props: {
      serviceData: serviceData[0],
    },
    // fallback: false,
  };
};
