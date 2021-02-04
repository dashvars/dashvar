import Head from "next/head";
import React from "react";
import { Container } from "../../components/docs/Container";
import { Example } from "../../components/docs/Example";

type Props = {};

const Index = (props: Props) => {
  return (
    <>
      <div>
        <Head>
          <title>Tailvars Docs</title>
        </Head>
        <Container>
          <Example />
        </Container>
      </div>
    </>
  );
};

export default Index;
