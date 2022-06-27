import { Layout } from "@/components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Explore: NextPage = () => {
	return (
		<>
			<Head>
				<title>اکتشاف</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="text-red-400">اکتشاف</div>
			</Layout>
		</>
	);
};

export default Explore;
