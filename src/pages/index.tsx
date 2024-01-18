import Head from "next/head";

import { HomeContainer } from "../styles/pages/home";

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | No Time</title>
      </Head>
      <HomeContainer>
        Hello World
      </HomeContainer>
    </>
  );
}