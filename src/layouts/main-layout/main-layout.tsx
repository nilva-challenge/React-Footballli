import { ReactNode } from "react";
import { Navbar } from "@/components/navbar";

interface MainLayoutProps {
	children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
	return (
		<div className="relative bg-slate-100 h-full">
			<main className="w-full h-full pb-[96px]">{children}</main>
			<aside className="fixed bottom-0 right-0 left-0">
				<Navbar />
			</aside>
		</div>
	);
};
