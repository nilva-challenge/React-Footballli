import { Layout } from "@/components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Leagues: NextPage = () => {
	return (
		<>
			<Head>
				<title>لیگ‌ها</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="text-red-400">لیگ‌ها</div>
			</Layout>
		</>
	);
};

export default Leagues;
