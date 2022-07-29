import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="min-h-400 flex justify-center items-center">
      <Head>
        <title>React Footballi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>Welcome! please click on a tab in footer</div>
    </div>
  );
};

export default Home;
