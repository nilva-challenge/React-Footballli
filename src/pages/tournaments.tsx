import { InfiniteTournaments } from "@/components/infinite-tournaments";
import { Layout } from "@/components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Tournaments: NextPage = () => {
	return (
		<>
			<Head>
				<title>مسابقات</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="text-red-400">مسابقات</div>
				<InfiniteTournaments />
			</Layout>
		</>
	);
};

export default Tournaments;
