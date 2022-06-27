export const client = async (url: RequestInfo | URL) => {
	const res = await fetch(url, {
		method: "GET",
		headers: {
			"x-rapidapi-host": "v3.football.api-sports.io",
			"x-rapidapi-key": "4e98f323fc4cc00a2468d84847c70cfd",
		},
	});

	if (!res.ok) {
		Promise.reject("something went wrong");
	}

	return await res.json();
};
