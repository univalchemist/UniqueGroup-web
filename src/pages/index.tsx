import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "src/styles/Home.module.css";
import Layout from "src/components/layout/layout";
import Landing from "src/modules/landing/landing";
import { getHomeData } from "src/data/data";
import type { HomeData } from "src/constants/types";
interface HomeProps {
  homeData: HomeData;
}
const Home = (props: HomeProps) => {
  return (
    <Layout>
      <Landing homeData={props.homeData} />
    </Layout>
  );
};

export async function getStaticProps() {
  // const commonData = await getCommonData();

  const homeData = await getHomeData();

  return {
    props: {
      homeData,
    },
  };
}

export default Home;
