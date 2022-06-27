import Link from "next/link";
import {
	TbUser,
	TbSoccerField,
	TbTrophy,
	TbBallFootball,
	TbCompass,
} from "react-icons/tb";
import { NavLink } from "./nav-link";

const navItems = [
	{
		href: "/profile",
		title: "پروفایل",
		Icon: TbUser,
	},
	{
		href: "/leagues",
		title: "لیگ‌ها",
		Icon: TbTrophy,
	},
	{
		href: "/football",
		title: "فوتبال",
		Icon: TbBallFootball,
	},
	{
		href: "/explore",
		title: "اکتشاف",
		Icon: TbCompass,
	},
	{
		href: "/",
		title: "مسابقات",
		Icon: TbSoccerField,
	},
];

export const Navbar = () => {
	return (
		<ul className="flex justify-between bg-white py-4 px-2 w-full">
			{navItems.map(({ href, title, Icon }) => (
				<li key={title} className="flex-1">
					<NavLink href={href} title={title} icon={<Icon size={36} />} />
				</li>
			))}
		</ul>
	);
};
