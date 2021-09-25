import type { NextPage } from "next";
import Head from "next/head";
import { Title } from "../components/Title";
import Form from "../containers/Form";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>WhatIf - A FOMO Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Title />
      <Form />
    </div>
  );
};

export default Home;
