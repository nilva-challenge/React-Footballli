import { Layout } from "@/components/layout";
import type { NextPage } from "next";
import Head from "next/head";

const Profile: NextPage = () => {
	return (
		<>
			<Head>
				<title>پروفایل</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="text-red-400">پروفایل</div>
			</Layout>
		</>
	);
};

export default Profile;
