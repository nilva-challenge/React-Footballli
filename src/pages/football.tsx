import { Layout } from "@/components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Football: NextPage = () => {
	return (
		<>
			<Head>
				<title>فوتبال</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="text-red-400">فوتبال</div>
			</Layout>
		</>
	);
};

export default Football;
