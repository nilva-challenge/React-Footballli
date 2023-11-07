import {Fixture} from "@/types/LeagueType";
import FixtureItem from "@/ui/components/FixtureItem";

type LeagueItemProps = {
    fixtureList?: Fixture[];
    leagueName?: string
};

const LeagueItem: React.FC<LeagueItemProps> = ({fixtureList, leagueName}) => {
    return (
        <>
            <h6>{leagueName}</h6>
            {
                fixtureList?.map((fixture, index) => {
                    return (
                        <FixtureItem key={`fixture-${index}`} fixture={fixture}/>
                    )
                })
            }
        </>
    );
};

export default LeagueItem;
