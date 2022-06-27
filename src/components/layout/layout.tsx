import { ReactNode } from "react";
import { Navbar } from "../navbar";

interface LayoutProps {
	children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex flex-col bg-slate-100 h-full">
			<main className="grow">{children}</main>
			<aside>
				<Navbar />
			</aside>
		</div>
	);
};
