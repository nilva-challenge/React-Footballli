import { useFixtures } from "./data/use-fixtures";

export const InfiniteTournaments = () => {
	const { data, isLoading } = useFixtures(new Date());

	if (!data && isLoading) {
		return <div>loading...</div>;
	}

	console.log(data);

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
