import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>ری‌اکت فوتبالی</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="text-red-400">
				برای دیدن مسابقات بر روی لینک آن کلیک کنید
			</div>
		</>
	);
};

export default Home;
