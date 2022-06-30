import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="flex flex-col bg-slate-100 h-full">
			<main className="grow w-full">{children}</main>
			<aside>
				<Navbar />
			</aside>
		</div>
	);
};
