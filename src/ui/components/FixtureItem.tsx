import {Fixture} from "@/types/LeagueType";
import Image from "next/image";

type FixtureItemProps = {
    fixture?: Fixture;
};

const FixtureItem: React.FC<FixtureItemProps> = ({fixture}) => {
    return (
        <div className='flex w-full justify-center py-2'>
            <p>{fixture?.home.name}</p>
            <Image src={fixture?.home.logo} width={24} height={24} alt=''/>
            <p>{`${fixture?.home_goals ?? '0'} - ${fixture?.away_goals ?? '0'}`}</p>
            <Image src={fixture?.away.logo} width={24} height={24} alt=''/>
            <p>{fixture?.away.name}</p>
        </div>
    );
};

export default FixtureItem;
