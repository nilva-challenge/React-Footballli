import {League} from "@/types/LeagueType";
import {useRouter} from "next/router";
import {useLeagueFixturesQuery} from "@/framwork/rest/getLeagueFixtures";
import LeagueItem from "@/ui/components/LeagueItem";

const FixtureList: React.FC = () => {


    const router = useRouter();
    const {date} = router.query;

    const {data: leaguesList, isLoading, error} = useLeagueFixturesQuery(date as string);


    if (error) {
        return <div>Error</div>;
    }

    return (
        <div>
            {leaguesList?.map((league: League, index: number) => (
                <div key={`league-${index}`} className="p-4 bg-white border mt-4 rounded-md">
                    <LeagueItem key={`league-${index}`} leagueName={league.name}
                                fixtureList={league.fixtures}/>
                </div>
            ))}
        </div>
    );
};

export default FixtureList;
