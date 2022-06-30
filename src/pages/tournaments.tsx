import { TournamentsLayout } from "@/layouts/tournaments-layout";
import type { NextPageWithLayout } from "./_app";
import Head from "next/head";
import { ReactElement } from "react";
import { TournamentsList } from "@/components/tournaments-list";

const Tournaments: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>مسابقات</title>
				<meta name="description" content="Nilva Challenge" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<TournamentsList />
		</>
	);
};

Tournaments.getLayout = function getLayout(page: ReactElement) {
	return <TournamentsLayout>{page}</TournamentsLayout>;
};
export default Tournaments;
