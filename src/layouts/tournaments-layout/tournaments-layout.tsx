import { ReactNode, useRef } from "react";
import { CalendarMenu } from "@/components/calendar-menu";
import { useRouter } from "next/router";
import { getCalenderDate, TIMEZONE } from "@/lib/calendar-date";
import { CalendarDate, today } from "@internationalized/date";
import { SearchBar } from "@/components/search-bar";
import { TbClock } from "react-icons/tb";

interface TournamentsLayoutProps {
	children: ReactNode;
}

export const TournamentsLayout = ({ children }: TournamentsLayoutProps) => {
	const router = useRouter();
	const { date } = router.query;
	const dateRef = useRef<CalendarDate | null>(null);
	if (typeof date === "string" && !dateRef.current) {
		dateRef.current = getCalenderDate(new Date(date).valueOf());
	}
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
				<CalendarMenu
					defaultValue={dateRef.current || today(TIMEZONE)}
					key={dateRef.current?.toString()}
				/>
			</header>
			<div>{children}</div>
		</div>
	);
};
