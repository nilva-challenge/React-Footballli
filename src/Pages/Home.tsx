import { FieldIcon, FootballIcon, NavigationIcon, ProfileIcon, TrophyIcon } from 'assets/ts';
import { BaseNavigation, INavigationItem, LeagueResults, PageHeader } from 'components';
import { en } from 'dictionary/en';
import { routes } from 'routes';

const links: INavigationItem[] = [
  { id: 0, title: en.profile, Icon: ProfileIcon, to: routes.notFound },
  { id: 1, title: en.navigate, Icon: NavigationIcon, to: routes.notFound },
  { id: 2, title: en.football, Icon: FootballIcon, to: routes.notFound },
  { id: 3, title: en.leagues, Icon: TrophyIcon, to: routes.notFound },
  { id: 4, title: en.matches, Icon: FieldIcon, to: routes.matches },
];

export const Home = () => {
  return (
    <>
      <PageHeader />
      <LeagueResults />
      <BaseNavigation links={links} />
    </>
  );
};
