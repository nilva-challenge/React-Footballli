import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../Components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=" m-5  relative  max-w-sm border-8 border-gray-800 rounded-3xl pb-10 pt-6 ">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
