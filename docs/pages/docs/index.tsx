import Head from "next/head";
import React from "react";
import { Example } from "../../components/docs/Example";
import { Layout } from "../../components/docs/Layout";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <div>
        <Head>
          <title>Tailvars Docs</title>
        </Head>
        <Layout>
          <Example />
        </Layout>
      </div>
    </>
  );
};

export default Index;
