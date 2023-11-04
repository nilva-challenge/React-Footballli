import ClockIcon from "@heroicons/react/24/outline/ClockIcon";
import TableCellsIcon from "@heroicons/react/24/outline/TableCellsIcon";
import GlobeAltIcon from "@heroicons/react/24/outline/GlobeAltIcon";
import PlayCircleIcon from "@heroicons/react/24/outline/PlayCircleIcon";
import TrophyIcon from "@heroicons/react/24/outline/TrophyIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";

enum PagePathname {
  MATCHES = "/",
  EXPLORE = "/explore",
  FOOTBAN = "/footban",
  LEAGUES = "/leagues",
  PROFILE = "/profile",
}

export type PageConfig = {
  pathname: PagePathname;
  Icon: React.FC;
  title: string;
  buttonText?: string;
  ButtonIcon?: React.FC;
};

export const pagesConfigs: PageConfig[] = [
  {
    pathname: PagePathname.PROFILE,
    title: "پروفایل",
    Icon: UserIcon,
  },
  {
    pathname: PagePathname.LEAGUES,
    title: "لیگ ها",
    Icon: TrophyIcon,
  },
  {
    pathname: PagePathname.FOOTBAN,
    title: "فوتبان",
    Icon: PlayCircleIcon,
  },
  {
    pathname: PagePathname.EXPLORE,
    title: "اکتشاف",
    Icon: GlobeAltIcon,
  },
  {
    pathname: PagePathname.MATCHES,
    title: "نتایج زنده",
    Icon: ClockIcon,
    buttonText: "مسابقات",
    ButtonIcon: TableCellsIcon,
  },
];
