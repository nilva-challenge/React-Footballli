import { getCalenderDate, TIMEZONE } from "@/lib/calendar-date";
import { CalendarDate, today } from "@internationalized/date";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useRouterDate = () => {
	const router = useRouter();
	const { date } = router.query;
	const [dateValue, setDateValue] = useState<CalendarDate>(today(TIMEZONE));

	useEffect(() => {
		if (typeof date === "string") {
			setDateValue(getCalenderDate(new Date(date).valueOf()));
		}
	}, [date]);

	return dateValue;
};
