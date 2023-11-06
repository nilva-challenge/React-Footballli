import HomeLayout from "@/ui/views/layouts/HomeLayout";
import {ReactElement} from "react";
import MatchesView from "@/ui/views/MatchesView";
import FootballView from "@/ui/views/FootballView";
import {HomeNavItems} from "@/constant/config";
import ProfileView from "@/ui/views/ProfileView";
import LeagueView from "@/ui/views/LeagueView";
import ExploreView from "@/ui/views/ExploreView";
import Container from "@/ui/views/container/container";

const HomeView: React.FC<{ tab: string }> = ({tab}) => {

    const tabViewList: { [key: string]: ReactElement } = {
        [HomeNavItems.Matches]: <MatchesView/>,
        [HomeNavItems.Football]: <FootballView/>,
        [HomeNavItems.Profile]: <ProfileView/>,
        [HomeNavItems.Leagues]: <LeagueView/>,
        [HomeNavItems.Explore]: <ExploreView/>,
    }

    return (
        <HomeLayout>
            <Container className="flex flex-col min-h-screen bg-gray-200">
                {tabViewList[tab]}
            </Container>
        </HomeLayout>
    );
};

export default HomeView;