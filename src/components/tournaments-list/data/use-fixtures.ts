import { client } from "@/lib/client";
import { useQuery } from "react-query";

const getFixtures = async (date: string) => {
	return await client(
		`https://v3.football.api-sports.io/fixtures?date=${date}&timezone=Asia/Tehran`
	);
};

export const useFixtures = (date: Date) => {
	const formattedDate = date.toLocaleDateString("en-CA");
	return useQuery(["fixtures", formattedDate], () =>
		getFixtures(formattedDate)
	);
};
