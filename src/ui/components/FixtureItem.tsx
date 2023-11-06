import {Fixture} from "@/types/LeagueType";

type FixtureItemProps = {
    fixture?: Fixture;
};

const FixtureItem: React.FC<FixtureItemProps> = ({fixture}) => {
    return (
        <div>{`${fixture?.home.name}-${fixture?.away.name}`}</div>
    );
};

export default FixtureItem;
