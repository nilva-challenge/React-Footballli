import { Layout } from "@/components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>React Footballli</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="text-red-400">hi</div>
			</Layout>
		</>
	);
};

export default Home;
