import {API_ENDPOINTS} from "@/constant/ApiEndpoints";
import {useQuery} from "@tanstack/react-query";
import http from "@/lib/axios";

export const fetchLeagueFixtures = async (date: string) => {
    const {data} = await http.get(`${API_ENDPOINTS.FOOTBALL_FIXTURES}?date=${date}`);
    return data.all;
};
export const useLeagueFixturesQuery = (date: string) => {
    return useQuery({
        queryKey: ['leagues', date],
        queryFn: () => fetchLeagueFixtures(date)
    });
};