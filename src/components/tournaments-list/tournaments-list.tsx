import { useRouter } from "next/router";
import { DropDown } from "../drop-down";
import { useFixtures } from "./data/use-fixtures";

export const TournamentsList = () => {
	const router = useRouter();
	const { date } = router.query;
	let dateToFetch = new Date();

	if (typeof date === "string") {
		dateToFetch = new Date(date);
	}

	const { data, isLoading } = useFixtures(dateToFetch);

	if (!data && isLoading) {
		return <div className="p-5">در حال بارگذاری...</div>;
	}

	return (
		<ol className="flex flex-col gap-3">
			{data.response.map((game) => (
				<li key={game.fixture.id}>
					<DropDown title={game.league.name}>
						<span>{game.teams.home.name}</span>{" "}
						<span>
							{new Date(game.fixture.timestamp).toLocaleTimeString("fa-IR", {
								hour: "2-digit",
								minute: "2-digit",
							})}
						</span>{" "}
						<span>{game.teams.away.name}</span>
					</DropDown>
				</li>
			))}
		</ol>
	);
};
