import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Noted</title>
        <meta name="description" content="Note everything" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>A personal note taking app</h1>
      </main>
    </div>
  );
};

export default Home;
