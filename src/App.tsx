import { FieldIcon, FootballIcon, NavigationIcon, ProfileIcon, TrophyIcon } from 'assets/ts';
import {
  BaseNavigation,
  BaseTabs,
  INavigationItem,
  ITab,
  LeagueResults,
  PageHeader,
} from 'components';
import { en } from 'dictionary/en';

const links: INavigationItem[] = [
  { id: 0, title: en.profile, Icon: ProfileIcon, to: '' },
  { id: 1, title: en.navigate, Icon: NavigationIcon, to: '' },
  { id: 2, title: en.football, Icon: FootballIcon, to: '' },
  { id: 3, title: en.leagues, Icon: TrophyIcon, to: '' },
  { id: 4, title: en.matches, Icon: FieldIcon, to: '' },
];

function App() {
  const tabs: ITab[] = [
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
    { id: 0, label: 'fdsf', to: '' },
  ];

  return (
    <div className="max-w-md m-auto pt-2 px-2">
      <PageHeader />
      <BaseTabs tabs={tabs} />
      <LeagueResults />
      <BaseNavigation links={links} />
    </div>
  );
}

export default App;
