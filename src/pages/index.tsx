import Head from "next/head";

import { HomeContainer } from "../styles/pages/home";
import { Header } from "@/components/Header";

export default function App() {
  return (
    <>
      <Head>
        <title>Home | No Time</title>
      </Head>
      <HomeContainer>
        <div>
          <h1>Hello World</h1>
        </div>
      </HomeContainer>
    </>
  );
}
