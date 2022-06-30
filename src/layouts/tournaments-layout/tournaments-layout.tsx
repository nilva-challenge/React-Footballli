import { ReactNode } from "react";
import { CalendarMenu } from "@/components/calendar-menu";
import { SearchBar } from "@/components/search-bar";
import { TbClock } from "react-icons/tb";

interface TournamentsLayoutProps {
	children: ReactNode;
}

export const TournamentsLayout = ({ children }: TournamentsLayoutProps) => {
	return (
		<div className="flex flex-col gap-4 bg-slate-100 h-full">
			<header className="flex flex-col gap-3 bg-white">
				<div className="flex flex-col gap-3 px-4 pt-2">
					<div className="flex gap-4 justify-between items-center">
						<h1 className="text-xl font-bold">نتایج زنده</h1>
						<TbClock size={40} className="scale-x-[-1]" />
					</div>
					<SearchBar />
				</div>
				<CalendarMenu />
			</header>
			<div className="h-[calc(100%-160px)] overflow-y-auto">{children}</div>
		</div>
	);
};
