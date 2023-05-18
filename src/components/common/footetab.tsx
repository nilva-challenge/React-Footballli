import {
  BallIcon,
  CompassIcon,
  FootballBitchcon,
  LeagueIcon,
  PersonIcon,
} from "@/constants/svgIcons";
import { IIconProps } from "@/shared/types";
import Link from "next/link";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";
interface IProps {
  url: string;
  text: string;
  handleClick: MouseEventHandler<HTMLAnchorElement>;
  activeTab: string;
  TabIcon: JSX.Element;
}
const FooterTab = ({ url, text, handleClick, activeTab, TabIcon }: IProps) => {
  return (
    <Link href={url} onClick={handleClick}>
      {TabIcon}
      <span
        className={`${
          activeTab === url ? "text-secondary" : "text-gray3"
        } font-bold  text-base mt-0`}
      >
        {text}
      </span>
    </Link>
  );
};

export default FooterTab;
