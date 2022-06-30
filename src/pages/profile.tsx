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
			<div className="text-red-400">پروفایل</div>
		</>
	);
};

export default Profile;
