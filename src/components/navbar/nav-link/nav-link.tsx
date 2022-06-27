import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type NavLinkProps = {
	title: string;
	icon: ReactNode;
} & LinkProps;

export const NavLink = ({ href, title, icon, ...rest }: NavLinkProps) => {
	const { pathname } = useRouter();
	const isActive = pathname === href;
	const activeClass = "text-green-600";

	return (
		<Link href={href} {...rest}>
			<a
				className={clsx(
					"flex flex-col items-center justify-center gap-2 focus:no-underline",
					isActive ? activeClass : "text-gray-400"
				)}
			>
				{icon}
				<span
					className={clsx(
						"text-sm font-medium",
						isActive ? activeClass : "text-gray-700"
					)}
				>
					{title}
				</span>
			</a>
		</Link>
	);
};
